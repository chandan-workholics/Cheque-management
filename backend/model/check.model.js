// models/Check.js
const mongoose = require('mongoose');

const checkSchema = new mongoose.Schema({
  imageUrl: String,
  customerName: String,
  licenseNo: String,
  date: String,
  company: String,
  checkType: String,
  amount: String,
  status: { type: String, enum: ['bad', 'good'], default: 'good' },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Check', checkSchema);
