import { Search, Lightbulb, Users, Cog, CheckCircle, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Process = () => {
  const sectionRef = useScrollReveal();
  const steps = [
    {
      icon: Search,
      title: "Analysis",
      description: "Deep understanding of your vision, requirements, and objectives."
    },
    {
      icon: Lightbulb,
      title: "Conception",
      description: "Creative ideation and strategic planning tailored to your needs."
    },
    {
      icon: Users,
      title: "Partner Selection",
      description: "Curating the finest professionals and suppliers from our network."
    },
    {
      icon: Cog,
      title: "Implementation",
      description: "Meticulous execution with attention to every luxury detail."
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Rigorous standards ensuring excellence at every stage."
    },
    {
      icon: Headphones,
      title: "Delivery & Support",
      description: "Seamless delivery with ongoing support and client care."
    }
  ];

  return (
    <section ref={sectionRef as any} className="py-16 sm:py-24 bg-gradient-luxury scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            A meticulously crafted journey from vision to reality, ensuring excellence at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gold to-gold/30 transform translate-x-4 z-0" />
              )}
              
              <div className="relative bg-card rounded-xl p-6 border border-gold/30 hover:luxury-shadow transition-luxury hover-lift">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-charcoal font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-smooth">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-semibold mb-3 text-card-foreground group-hover:text-gold transition-smooth">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;