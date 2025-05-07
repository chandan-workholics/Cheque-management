const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    image: { type: String, required: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Chat', chatSchema);
  