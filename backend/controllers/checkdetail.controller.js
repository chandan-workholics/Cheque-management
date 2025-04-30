const Check = require('../model/check.model');


exports.addCheckDetail = async (req, res) => {
    try {
        const { imageUrl, customerName, licenseNo, date, company, checkType, amount } = req.body;

        const newCheck = new Check({ imageUrl, customerName, licenseNo, date, company, checkType, amount });

        await newCheck.save();

        return res.status(201).json({
            message: 'Check details added successfully',
            data: newCheck,
        });
    } catch (error) {
        console.error('Error in addCheckDetail:', error);
        return res.status(500).json({
            message: 'Something went wrong while saving check details',
            error: error.message,
        });
    }
};


exports.getAllChecks = async (req, res) => {
    try {
        const checks = await Check.find();
        return res.status(200).json({ message: 'All checks fetched successfully', data: checks });
    } catch (error) {
        console.error('Error in getAllChecks:', error);
        return res.status(500).json({ message: 'Failed to fetch checks', error: error.message });
    }
};

exports.getCheckById = async (req, res) => {
    try {
        const { id } = req.params;

        const check = await Check.findById(id);
        if (!check) {
            return res.status(404).json({ message: 'Check not found' });
        }

        return res.status(200).json({ message: 'Check fetched successfully', data: check });
    } catch (error) {
        console.error('Error in getCheckById:', error);
        return res.status(500).json({ message: 'Failed to fetch check', error: error.message });
    }
};


exports.updateCheckById = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedCheck = await Check.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedCheck) {
            return res.status(404).json({ message: 'Check not found' });
        }

        return res.status(200).json({ message: 'Check updated successfully', data: updatedCheck });
    } catch (error) {
        console.error('Error in updateCheckById:', error);
        return res.status(500).json({ message: 'Failed to update check', error: error.message });
    }
};


exports.deleteCheckById = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCheck = await Check.findByIdAndDelete(id);
        if (!deletedCheck) {
            return res.status(404).json({ message: 'Check not found' });
        }

        return res.status(200).json({ message: 'Check deleted successfully' });
    } catch (error) {
        console.error('Error in deleteCheckById:', error);
        return res.status(500).json({ message: 'Failed to delete check', error: error.message });
    }
};

