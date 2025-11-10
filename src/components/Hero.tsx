import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-luxury-event.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="animate-fade-in space-y-1">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-bold text-pearl mb-6 leading-tight">
            Maison B.A
            <span className="text-gradient-gold block">International</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gold-light font-light mb-6 sm:mb-8 italic">
            "Your Vision, Our Signature"
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-pearl/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Creator of unique experiences, premium content, and tailor-made solutions for luxury event planning, audiovisual production, and hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
            <Button variant="hero" size="xl" className="min-w-[200px] animate-glow">
              Discover Our Services
            </Button>
            <Button variant="elegant" size="xl" className="min-w-[200px]">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center animate-float">
        <div className="flex flex-col items-center text-gold-light">
          <span className="text-xs sm:text-sm mb-2 font-light">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;