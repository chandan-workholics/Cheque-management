const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendMail = require('../utils/sendMail');

exports.registerVendor = async (req, res) => {
    const { firstname, lastname, mobile, bussiness, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new User({ firstname, lastname, mobile, bussiness, email, password: hashedPassword, otp });
    await newUser.save();
    await sendMail(email, otp);

    res.json({ message: 'OTP sent to email. Please verify.' });
};

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    if (user.otp === otp) {
        user.otpVerified = true;
        user.otp = null;
        await user.save();
        res.json({ message: 'OTP verified. Registration complete.' });
    } else {
        res.status(400).json({ message: 'Invalid OTP' });
    }
};

exports.resendOtp = async (req, res) => {
    const { email } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // If already verified
    if (user.otpVerified) return res.status(400).json({ message: 'User already verified' });

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

    // Save OTP
    user.otp = otp;
    await user.save();

    // Send OTP via email
    try {
        await sendMail(email, otp);
        res.json({ message: 'OTP resent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send OTP', error: error.message });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.otpVerified) return res.status(400).json({ message: 'User not found or not verified' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

    const token = jwt.sign({ id: user._id, role: user.role }, 'secret_key', { expiresIn: '1d' });
    res.json({ token, role: user.role, message: 'Login successful' });
};



exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    user.otp = otp;
    user.otpVerified = false; // optional: reset verification
    await user.save();

    try {
        await sendMail(email, otp);
        res.json({ message: 'OTP sent to email' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send OTP', error: error.message });
    }
};


exports.verifyOtpForPasswordReset = async (req, res) => {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.otp === otp) {
        user.otpVerified = true;
        await user.save();
        res.json({ message: 'OTP verified. You can now reset your password.' });
    } else {
        res.status(400).json({ message: 'Invalid OTP' });
    }
};


exports.resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.otpVerified) {
        return res.status(400).json({ message: 'OTP not verified' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.otp = null;
    user.otpVerified = false;
    await user.save();

    res.json({ message: 'Password reset successfully' });
};