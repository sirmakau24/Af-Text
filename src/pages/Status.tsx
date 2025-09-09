import { useState } from "react";
import { ArrowLeft, Plus, Camera, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface StatusItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  viewed: boolean;
  isMyStatus?: boolean;
}

const mockStatuses: StatusItem[] = [
  {
    id: "1",
    user: {
      name: "My Status",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    timestamp: "2 hours ago",
    viewed: false,
    isMyStatus: true
  },
  {
    id: "2",
    user: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    timestamp: "30 minutes ago",
    viewed: false
  },
  {
    id: "3",
    user: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=40&h=40&fit=crop&crop=face"
    },
    timestamp: "1 hour ago",
    viewed: true
  },
  {
    id: "4",
    user: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    timestamp: "3 hours ago",
    viewed: false
  }
];

const Status = () => {
  const navigate = useNavigate();
  const [statuses] = useState<StatusItem[]>(mockStatuses);

  const handleBack = () => {
    navigate("/chat");
  };

  const myStatus = statuses.find(status => status.isMyStatus);
  const otherStatuses = statuses.filter(status => !status.isMyStatus);
  const recentStatuses = otherStatuses.filter(status => !status.viewed);
  const viewedStatuses = otherStatuses.filter(status => status.viewed);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground border-b">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="text-primary-foreground hover:bg-primary-hover"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Status</h1>
        <div className="flex-1" />
        <Button
          variant="ghost"
          size="icon"
          className="text-primary-foreground hover:bg-primary-hover"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </header>

      <div className="p-4 space-y-6">
        {/* My Status */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <Avatar className="h-14 w-14">
                <AvatarImage src={myStatus?.user.avatar} />
                <AvatarFallback>Me</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-primary hover:bg-primary-hover"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">My Status</h3>
              <p className="text-sm text-muted-foreground">
                {myStatus ? `Last updated ${myStatus.timestamp}` : "Tap to add status update"}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <Camera className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Recent Updates */}
        {recentStatuses.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
              Recent Updates
            </h3>
            <div className="space-y-3">
              {recentStatuses.map((status) => (
                <div key={status.id} className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={status.user.avatar} />
                      <AvatarFallback>{status.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{status.user.name}</h4>
                    <p className="text-sm text-muted-foreground">{status.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Viewed Updates */}
        {viewedStatuses.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
              Viewed Updates
            </h3>
            <div className="space-y-3">
              {viewedStatuses.map((status) => (
                <div key={status.id} className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg opacity-60">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={status.user.avatar} />
                      <AvatarFallback>{status.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 rounded-full border-2 border-muted-foreground/30"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{status.user.name}</h4>
                    <p className="text-sm text-muted-foreground">{status.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;