const express = require('express');
const router = express.Router();
const checkController = require('../controllers/checkdetail.controller');
const { authenticate } = require('../middleware/auth.middleware');

router.post('/add-check',authenticate, checkController.addCheckDetail);
router.get('/get-all-check',authenticate, checkController.getAllChecks);
router.get('/get-checkById/:id',authenticate, checkController.getCheckById);
router.put('/update-check/:id',authenticate, checkController.updateCheckById);
router.delete('/delete-check/:id',authenticate, checkController.deleteCheckById);
router.get('/get-checkByVenderId/:venderId',authenticate, checkController.getCheckByVenderId);
router.get('/get-checkByCompany/:company',authenticate, checkController.getCheckByCompany);
router.get('/statuss',authenticate, checkController.getCheckStatuss);
router.get('/status',authenticate, checkController.getCheckStatus);

module.exports = router;
