const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');
const chatController = require('../controllers/chat.controller');
const { authenticate } = require('../middleware/auth.middleware');

// Ticket routes
router.post('/tickets',authenticate, ticketController.createTicket);
router.get('/tickets/vendor/:vendorId',authenticate, ticketController.getTicketsByVendor);


// Chat routes
router.post('/tickets/chat',authenticate, chatController.addChatMessage);
router.get('/tickets/chat/:ticketId',authenticate, chatController.getChatByTicket);

module.exports = router;
