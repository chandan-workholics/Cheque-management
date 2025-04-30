const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['superadmin', 'admin', 'vendor'], default: 'vendor' },
  otp: String,
  otpVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
