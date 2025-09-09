import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  // Auto-redirect to login for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-8">
            <MessageCircle className="h-10 w-10 text-primary-foreground" />
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Af-Text
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Connect instantly with friends and family. Simple, fast, and secure messaging.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-3">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground text-center">Send messages instantly with real-time delivery</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-semibold">Secure & Private</h3>
              <p className="text-muted-foreground text-center">Your conversations are protected and encrypted</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-semibold">Stay Connected</h3>
              <p className="text-muted-foreground text-center">Chat with individuals or create group conversations</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>

          {/* Auto-redirect notice */}
          <p className="text-sm text-muted-foreground mt-8">
            You'll be redirected to login in a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
