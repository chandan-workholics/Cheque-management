const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/register', adminController.adminLogin);
router.post('/login', adminController.adminLogin);

module.exports = router;
