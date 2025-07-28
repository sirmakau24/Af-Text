function ChatList() {
  // Example chats array
  const chats = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  return (
    <div className="chat-list">
      <h3>Chats</h3>
      <ul>
        {chats.map(chat => (
          <li key={chat.id}>{chat.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ChatList;
