const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register-vendor', authController.registerVendor);
router.post('/verify-otp', authController.verifyOtp);
router.post('/resend-otp', authController.resendOtp);
router.post('/login', authController.login);


router.post('/forget-password', authController.forgotPassword);
router.post('/verify-otp-for-password', authController.verifyOtpForPasswordReset);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
