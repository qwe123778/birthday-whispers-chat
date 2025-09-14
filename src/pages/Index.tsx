import { useState, useEffect } from "react";
import BirthdayMessageForm from "@/components/BirthdayMessageForm";
import ConfettiAnimation from "@/components/ConfettiAnimation";
import { Cake, Gift, Heart, Star } from "lucide-react";
import heroImage from "@/assets/birthday-hero.jpg";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti animation on page load
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-celebration">
      {showConfetti && <ConfettiAnimation />}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8 animate-bounce-in">
              <Cake className="w-16 h-16 text-primary mr-4 animate-float" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-party bg-clip-text text-transparent">
                Happy Birthday!
              </h1>
              <Gift className="w-16 h-16 text-celebration ml-4 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <p className="text-2xl md:text-3xl text-foreground mb-8 animate-bounce-in font-medium" style={{ animationDelay: '0.3s' }}>
              🎉 It's time to celebrate! 🎉
            </p>
            
            <p className="text-xl text-muted-foreground mb-12 animate-bounce-in max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
              Send your heartfelt birthday wishes directly to her WhatsApp and make this day extra special! 
              Your message will bring joy and smiles to her celebration. 💕
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-12 animate-bounce-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-primary animate-float" />
                <span className="text-foreground font-medium">Send Love</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-accent animate-float" style={{ animationDelay: '1s' }} />
                <span className="text-foreground font-medium">Make Memories</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-6 h-6 text-celebration animate-float" style={{ animationDelay: '2s' }} />
                <span className="text-foreground font-medium">Spread Joy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <BirthdayMessageForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          Made with <Heart className="w-4 h-4 inline text-primary" /> for a special birthday celebration
        </p>
      </footer>
    </div>
  );
};

export default Index;