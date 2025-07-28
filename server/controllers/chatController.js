const Message = require('../models/Message');

// @desc    Get all messages
// @route   GET /api/chat/messages
// @access  Private
exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().populate('sender', 'username').sort('createdAt');
    res.status(200).json({ success: true, data: messages });
  } catch (err) {
    next(err);
  }
};

// @desc    Create message
// @route   POST /api/chat/messages
// @access  Private
exports.createMessage = async (req, res, next) => {
  try {
    const { content } = req.body;
    const message = await Message.create({
      sender: req.user.id,
      content
    });

    res.status(201).json({ success: true, data: message });
  } catch (err) {
    next(err);
  }
};
