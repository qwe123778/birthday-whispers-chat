import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BirthdayMessageForm = () => {
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim() || !senderName.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name and message to send the birthday wish!",
        variant: "destructive",
      });
      return;
    }

    const phoneNumber = "2349139040930"; // WhatsApp format (without + and spaces)
    const encodedMessage = encodeURIComponent(
      `🎉 Happy Birthday! 🎂\n\nFrom: ${senderName}\n\nMessage: ${message}\n\n🎈 Sent with love from your birthday message site! 🎈`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    setIsAnimating(true);
    
    toast({
      title: "Opening WhatsApp! 🎉",
      description: "Your birthday message is ready to send!",
    });
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setMessage("");
      setSenderName("");
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 bg-gradient-card shadow-celebration backdrop-blur-sm border-2 border-primary/20 animate-bounce-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-primary mr-2 animate-float" />
          <h2 className="text-3xl font-bold bg-gradient-party bg-clip-text text-transparent">
            Send a Birthday Message
          </h2>
          <Sparkles className="w-8 h-8 text-accent ml-2 animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <p className="text-muted-foreground text-lg">
          Share your birthday wishes and they'll be sent directly via WhatsApp! 🎂
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="senderName" className="block text-sm font-medium text-foreground mb-2">
            Your Name
          </label>
          <Input
            id="senderName"
            placeholder="Enter your name..."
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="text-lg border-2 border-primary/30 focus:border-primary transition-all duration-300"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Birthday Message
          </label>
          <Textarea
            id="message"
            placeholder="Write your heartfelt birthday message here... 🎉"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="text-lg border-2 border-primary/30 focus:border-primary transition-all duration-300 resize-none"
          />
        </div>

        <Button 
          onClick={handleSendMessage}
          className={`w-full text-lg py-6 bg-gradient-party hover:shadow-celebration transition-all duration-300 ${
            isAnimating ? 'animate-pulse scale-105' : ''
          }`}
          disabled={isAnimating}
        >
          <Heart className="w-5 h-5 mr-2" />
          {isAnimating ? "Preparing your message..." : "Send Birthday Wishes"}
          <Send className="w-5 h-5 ml-2" />
        </Button>
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Your message will open WhatsApp where you can send it directly! 💕</p>
      </div>
    </Card>
  );
};

export default BirthdayMessageForm;