const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/register', adminController.adminRegister);
router.post('/login', adminController.adminLogin);
router.get('/dashboard-detail', adminController.dashboardDetail);

module.exports = router;
