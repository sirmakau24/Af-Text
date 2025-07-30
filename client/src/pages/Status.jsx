function Status() {
  // Example statuses data
  const statuses = [
    { id: 1, user: "Alice", text: "Feeling great today!", time: "2 mins ago" },
    { id: 2, user: "Bob", text: "Just finished a project.", time: "10 mins ago" },
    { id: 3, user: "Charlie", text: "Looking forward to the weekend.", time: "1 hour ago" },
  ];

  return (
    <div className="status-page">
      <h2>Status Updates</h2>
      <ul>
        {statuses.map((status) => (
          <li key={status.id} className="status-item">
            <strong>{status.user}</strong>: {status.text}
            <div className="status-time">{status.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Status;
