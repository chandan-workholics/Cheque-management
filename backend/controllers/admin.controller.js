const Admin = require('../model/admin.model');
const Check = require('../model/check.model');
const Vender = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require("moment");
const sendMail = require('../utils/sendMail');


exports.adminRegister = async (req, res) => {
    try {
        const { firstname, lastname, mobile, bussiness, email, password } = req.body;
        const adminExist = await Admin.findOne({ email });
        if (adminExist) return res.status(400).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const newAdmin = new Admin({ firstname, lastname, mobile, bussiness, email, password: hashedPassword, otp });
        await newAdmin.save();


        res.json({ message: 'admin register successfully.' });
    } catch (error) {
        console.log(error)
    }
}


exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Admin not found or not verified' });

    const isMatch = bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

    const token = jwt.sign({ id: admin._id, role: admin.role }, 'secret_key', { expiresIn: '1d' });
    res.json({ token, role: admin.role, adminId: admin._id, message: 'Login successful' });
};




exports.dashboardDetailss = async (req, res) => {
    try {
        const checks = await Check.find();
        const vendors = await Vender.find();

        const totalVendor = vendors.length;

        // Today range
        const startOfToday = moment().startOf("day");
        const endOfToday = moment().endOf("day");

        // New checks = created today
        const newCheck = checks.filter((c) =>
            moment(c.createdAt).isBetween(startOfToday, endOfToday, null, '[]')
        ).length;

        const goodCheck = checks.filter((c) => c.status === "good").length;
        const badCheck = checks.filter((c) => c.status === "bad").length;

        // Sum of today's check amounts
        const todayChecks = checks.filter((c) =>
            moment(c.createdAt).isBetween(startOfToday, endOfToday, null, '[]')
        );
        const todayStatus = todayChecks.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

        // Weekly (last 7 days)
        const weeklyChecks = checks.filter((c) =>
            moment(c.createdAt).isAfter(moment().subtract(7, "days"))
        );
        const weeklyStatus = weeklyChecks.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

        // Monthly (last 30 days)
        const monthlyChecks = checks.filter((c) =>
            moment(c.createdAt).isAfter(moment().subtract(30, "days"))
        );
        const monthlyStatus = monthlyChecks.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);



        res.status(200).json({
            totalVendor,
            newCheck,
            goodCheck,
            badCheck,
            todayStatus,
            weeklyStatus,
            monthlyStatus
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};



exports.dashboardDetail = async (req, res) => {
    try {
        const checks = await Check.find();
        const vendors = await Vender.find();

        const totalVendor = vendors.length;

        // Today's range
        const startOfToday = moment().startOf("day");
        const endOfToday = moment().endOf("day");

        // New checks (today)
        const newCheck = checks.filter((c) =>
            moment(c.createdAt).isBetween(startOfToday, endOfToday, null, "[]")
        ).length;

        // Good & Bad
        const goodCheck = checks.filter((c) => c.status === "good").length;
        const badCheck = checks.filter((c) => c.status === "bad").length;

        // Amounts
        const todayChecks = checks.filter((c) =>
            moment(c.createdAt).isBetween(startOfToday, endOfToday, null, "[]")
        );
        const todayStatus = todayChecks.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

        const weeklyChecks = checks.filter((c) =>
            moment(c.createdAt).isAfter(moment().subtract(7, "days"))
        );
        const weeklyStatus = weeklyChecks.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

        const monthlyChecks = checks.filter((c) =>
            moment(c.createdAt).isAfter(moment().subtract(30, "days"))
        );
        const monthlyStatus = monthlyChecks.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

        // // Weekly bar chart (Mon to Sun)
        // const weeklyData = Array(7).fill(0); // [M, T, W, T, F, S, S]
        // checks.forEach((c) => {
        //     const day = moment(c.createdAt).isoWeekday(); // 1 (Mon) to 7 (Sun)
        //     if (moment(c.createdAt).isAfter(moment().subtract(7, "days"))) {
        //         weeklyData[day - 1] += 1;
        //     }
        // });

        // Pie chart for check status
        const checkStatus = [
            { label: "Good Checks", value: goodCheck },
            { label: "Bad Checks", value: badCheck },
            { label: "New Check", value: newCheck }
        ];

        // 1. Daily (today's checks per hour, 0 to 23)
        const dailyData = Array(24).fill(0);
        todayChecks.forEach((c) => {
            const hour = moment(c.createdAt).hour(); // 0 to 23
            dailyData[hour] += 1;
        });

        // 2. Weekly (Mon to Sun)
        const weeklyData = Array(7).fill(0); // [Mon, Tue, ..., Sun]
        weeklyChecks.forEach((c) => {
            const day = moment(c.createdAt).isoWeekday(); // 1 (Mon) to 7 (Sun)
            weeklyData[day - 1] += 1;
        });

        // 3. Monthly (last 30 days by date)
        const monthlyData = {};
        monthlyChecks.forEach((c) => {
            const date = moment(c.createdAt).format("YYYY-MM-DD");
            monthlyData[date] = (monthlyData[date] || 0) + 1;
        });

        // Convert monthlyData to array of objects sorted by date
        const sortedMonthly = Object.entries(monthlyData)
            .sort(([a], [b]) => new Date(a) - new Date(b))
            .map(([date, count]) => ({ date, count }));



        res.status(200).json({
            totalVendor,
            newCheck,
            goodCheck,
            badCheck,
            todayStatus,
            weeklyStatus,
            monthlyStatus,
            chart: {
                daily: dailyData,        // [0, 1, 2, ..., 23]
                weekly: weeklyData,      // [56, 64, 76, 78, 78, 37, 20]
                monthly: sortedMonthly,  // [{ date: '2024-09-20', count: 5 }, ...]
                checkStatus: checkStatus // pie chart
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
