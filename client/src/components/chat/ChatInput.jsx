// src/components/chat/ChatInput.jsx
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="chat-input">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default ChatInput;
