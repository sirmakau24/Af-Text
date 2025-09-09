import { useState } from "react";
import { ArrowLeft, User, Bell, Lock, Palette, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    messages: true,
    sounds: true,
    vibration: false,
    desktop: true
  });

  const handleBack = () => {
    navigate("/chat");
  };

  const handleLogout = () => {
    navigate("/login");
  };

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
        <h1 className="text-xl font-semibold">Settings</h1>
      </header>

      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
              <Button variant="outline">Edit</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Message notifications</p>
                <p className="text-sm text-muted-foreground">Get notified when you receive messages</p>
              </div>
              <Switch
                checked={notifications.messages}
                onCheckedChange={(checked) => setNotifications({...notifications, messages: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sound</p>
                <p className="text-sm text-muted-foreground">Play sound for new messages</p>
              </div>
              <Switch
                checked={notifications.sounds}
                onCheckedChange={(checked) => setNotifications({...notifications, sounds: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Vibration</p>
                <p className="text-sm text-muted-foreground">Vibrate on new messages</p>
              </div>
              <Switch
                checked={notifications.vibration}
                onCheckedChange={(checked) => setNotifications({...notifications, vibration: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Desktop notifications</p>
                <p className="text-sm text-muted-foreground">Show notifications on desktop</p>
              </div>
              <Switch
                checked={notifications.desktop}
                onCheckedChange={(checked) => setNotifications({...notifications, desktop: checked})}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              Two-step verification
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Change password
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Blocked contacts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Privacy settings
            </Button>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              Theme
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Chat wallpaper
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Font size
            </Button>
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Help & Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              Help Center
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Contact us
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Terms of Service
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Privacy Policy
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card>
          <CardContent className="pt-6">
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;