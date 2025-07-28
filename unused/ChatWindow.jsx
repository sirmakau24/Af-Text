function ChatWindow() {
  const messages = [
    { id: 1, sender: "Alice", text: "Hello" },
    { id: 2, sender: "Bob", text: "Hi Alice, how are you?" },
    { id: 3, sender: "Charlie", text: "I'm good, thanks! And you?" },
  ];

  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <div key={msg.id} className="chat-message">
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}
export default ChatWindow;
