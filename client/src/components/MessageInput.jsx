import React, { useState } from 'react';
import './components 2/MessageInput.css';

function MessageInput() {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      alert(`Send: ${text}`);
      setText('');
    }
  };

  return (
    <div className="messageInput">
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;