import Header from '../components/Header';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';

function Chat() {
  return (
    <div className="chat-page">
      <Header />
      <div className="chat-body">
        <ChatList />
        <div className="chat-area">
          <ChatWindow />
          <MessageInput />
        </div>
      </div>
    </div>
  );
}
export default Chat;
