const { Server } = require('socket.io');
const Message = require('./models/Message');

module.exports = function(server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication error'));
      }
      
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.user.username}`);

    // Join user to global room
    socket.join('global');

    // Load previous messages
    socket.on('loadMessages', async () => {
      const messages = await Message.find().populate('sender', 'username').sort('createdAt');
      socket.emit('messagesLoaded', messages);
    });

    // Listen for new messages
    socket.on('sendMessage', async (message) => {
      const newMessage = await Message.create({
        sender: socket.user._id,
        content: message.content,
        room: 'global'
      });

      const populatedMessage = await Message.findById(newMessage._id).populate('sender', 'username');
      
      io.to('global').emit('messageReceived', populatedMessage);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.user.username}`);
    });
  });

  return io;
};
sss