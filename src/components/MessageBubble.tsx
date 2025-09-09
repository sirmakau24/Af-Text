import { Check, CheckCheck } from "lucide-react";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: "me" | "other";
  status: "sent" | "delivered" | "read";
}

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isMe = message.sender === "me";
  
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-[80%] md:max-w-[70%] px-4 py-2 rounded-lg relative ${
          isMe 
            ? 'bg-message-sent text-message-sent-foreground rounded-br-none' 
            : 'bg-message-received text-message-received-foreground rounded-bl-none shadow-sm'
        }`}
      >
        <p className="text-sm leading-relaxed break-words">{message.content}</p>
        
        <div className={`flex items-center gap-1 mt-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
          <span className={`text-xs ${isMe ? 'text-message-sent-foreground/70' : 'text-muted-foreground'}`}>
            {message.timestamp}
          </span>
          
          {isMe && (
            <div className="text-message-sent-foreground/70">
              {message.status === "sent" && <Check className="h-3 w-3" />}
              {message.status === "delivered" && <CheckCheck className="h-3 w-3" />}
              {message.status === "read" && <CheckCheck className="h-3 w-3 text-blue-400" />}
            </div>
          )}
        </div>
        
        {/* Tail for speech bubble */}
        <div
          className={`absolute top-0 ${
            isMe 
              ? 'right-0 translate-x-1 border-l-8 border-l-message-sent border-t-8 border-t-transparent' 
              : 'left-0 -translate-x-1 border-r-8 border-r-message-received border-t-8 border-t-transparent'
          }`}
        />
      </div>
    </div>
  );
};