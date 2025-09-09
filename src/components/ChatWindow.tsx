import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "./Header";
import { MessageInput } from "./MessageInput";
import { MessageBubble } from "./MessageBubble";

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

interface ChatWindowProps {
  chat: Chat;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onBack: () => void;
}

export const ChatWindow = ({ chat, messages, onSendMessage, onBack }: ChatWindowProps) => {
  return (
    <div className="flex flex-col h-full">
      <Header
        title={chat.name}
        subtitle={chat.online ? "online" : "last seen recently"}
        avatar={chat.avatar}
        showBack={true}
        onBack={onBack}
      />
      
      {/* Messages Area */}
      <div 
        className="flex-1 bg-chat-background"
        style={{
          backgroundImage: `var(--chat-pattern)`,
          backgroundSize: '60px 60px'
        }}
      >
        <ScrollArea className="h-full">
          <div className="p-4 space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        </ScrollArea>
      </div>
      
      {/* Message Input */}
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};