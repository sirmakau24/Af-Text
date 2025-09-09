import { ArrowLeft, Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  subtitle?: string;
  avatar?: string;
  showBack?: boolean;
  onBack?: () => void;
  showSearch?: boolean;
  showMenu?: boolean;
}

export const Header = ({ 
  title, 
  subtitle, 
  avatar, 
  showBack = false, 
  onBack,
  showSearch = true,
  showMenu = true 
}: HeaderProps) => {
  return (
    <header className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground border-b border-border/20">
      {showBack && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="md:hidden text-primary-foreground hover:bg-primary-hover"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      )}
      
      {avatar && (
        <div className="relative">
          <img
            src={avatar}
            alt={title}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <h1 className="font-medium text-lg truncate">{title}</h1>
        {subtitle && (
          <p className="text-sm opacity-80 truncate">{subtitle}</p>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {showSearch && (
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-hover"
          >
            <Search className="h-5 w-5" />
          </Button>
        )}
        
        {showMenu && (
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-hover"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        )}
      </div>
    </header>
  );
};