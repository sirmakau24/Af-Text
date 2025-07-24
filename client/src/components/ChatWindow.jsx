import React from 'react';
import './components 2/ChatWindow.css';
import MessageInput from './components styles/MessageInput';

function ChatWindow() {
  return (
    <div className="chatWindow">
      <div className="messages">
        <div className="message received">Hey, welcome to Af-Text!</div>
        <div className="message sent">Thanks! It's looking nice!</div>
      </div>
      <MessageInput />
    </div>
  );
}

export default ChatWindow;