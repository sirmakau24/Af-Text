// src/pages/Chat.jsx
import React, { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketContext';
import ChatHeader from '../components/chat/ChatHeader';
import MessagesList from '../components/chat/MessagesList';
import ChatInput from '../components/chat/ChatInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on('message', (message) => {
        setMessages((prev) => [...prev, message]);
      });

      return () => {
        socket.off('message');
      };
    }
  }, [socket]);

  const sendMessage = (content) => {
    if (socket && content.trim()) {
      socket.emit('sendMessage', { content });
    }
  };

  return (
    <div className="chat-page">
      <ChatHeader />
      <MessagesList messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default Chat;