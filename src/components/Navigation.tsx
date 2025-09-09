import { MessageCircle, Users, Settings as SettingsIcon, Radio } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      icon: MessageCircle,
      label: "Chats",
      path: "/chat",
      active: location.pathname === "/chat"
    },
    {
      icon: Radio,
      label: "Status",
      path: "/status",
      active: location.pathname === "/status"
    },
    {
      icon: SettingsIcon,
      label: "Settings",
      path: "/settings",
      active: location.pathname === "/settings"
    }
  ];

  return (
    <nav className="border-t border-border bg-card p-2">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.path}
              variant="ghost"
              size="sm"
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center py-3 px-4 h-auto gap-1 ${
                item.active 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};