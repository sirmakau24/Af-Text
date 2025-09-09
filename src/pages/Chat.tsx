import { useState } from "react";
import { ChatList } from "@/components/ChatList";
import { ChatWindow } from "@/components/ChatWindow";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
  online: boolean;
}

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: "me" | "other";
  status: "sent" | "delivered" | "read";
}

const mockChats: Chat[] = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "Hey, how are you doing?",
    timestamp: "10:30 AM",
    unread: 2,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    online: true
  },
  {
    id: "2",
    name: "Sarah Wilson",
    lastMessage: "Thanks for the help!",
    timestamp: "9:45 AM",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    online: false
  },
  {
    id: "3",
    name: "Team Project",
    lastMessage: "Alice: The meeting is at 3 PM",
    timestamp: "Yesterday",
    unread: 5,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=40&h=40&fit=crop&crop=face",
    online: true
  }
];

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hey! How's it going?",
    timestamp: "10:25 AM",
    sender: "other",
    status: "read"
  },
  {
    id: "2",
    content: "Going great! Just working on the new project. How about you?",
    timestamp: "10:26 AM",
    sender: "me",
    status: "read"
  },
  {
    id: "3",
    content: "That's awesome! I'd love to hear more about it",
    timestamp: "10:28 AM",
    sender: "other",
    status: "read"
  },
  {
    id: "4",
    content: "Sure! It's a chat application built with React. Really excited about the real-time features we're implementing",
    timestamp: "10:30 AM",
    sender: "me",
    status: "delivered"
  }
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(mockChats[0]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: "me",
      status: "sent"
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);
    setIsMobileView(true);
  };

  const handleBackToList = () => {
    setIsMobileView(false);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Chat List */}
      <div className={`${isMobileView ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-80 border-r border-border bg-card`}>
        <Header title="Af-Text" showSearch={true} showMenu={false} />
        <ChatList 
          chats={mockChats} 
          selectedChat={selectedChat}
          onChatSelect={handleChatSelect}
        />
        <Navigation />
      </div>

      {/* Main Chat Window */}
      <div className={`${!isMobileView ? 'hidden md:flex' : 'flex'} flex-col flex-1`}>
        {selectedChat ? (
          <ChatWindow
            chat={selectedChat}
            messages={messages}
            onSendMessage={handleSendMessage}
            onBack={handleBackToList}
          />
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-chat-background">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-4">💬</div>
              <h2 className="text-2xl font-light mb-2">Welcome to Af-Text</h2>
              <p>Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;