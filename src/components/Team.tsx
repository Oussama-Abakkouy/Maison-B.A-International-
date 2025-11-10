import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Calendar, Video } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Team = () => {
  const sectionRef = useScrollReveal();
  const teamMembers = [
    {
      name: "Jad Hachoumi",
      role: "Import-Export Manager",
      icon: Package,
      expertise: "International Trade & Logistics",
      description: "Leading our global sourcing and distribution operations across Morocco, Turkey, and Europe with unparalleled expertise in luxury hospitality products."
    },
    {
      name: "Aya Hachoumi",
      role: "Event Manager",
      icon: Calendar,
      expertise: "Luxury Event Planning",
      description: "Orchestrating unforgettable experiences with meticulous attention to detail, from intimate celebrations to grand corporate galas."
    },
    {
      name: "Berhan Zulaloglu",
      role: "Production Manager",
      icon: Video,
      expertise: "Audiovisual Excellence",
      description: "Crafting cinematic narratives and premium content with cutting-edge technology and creative vision that captivates audiences worldwide."
    }
  ];

  return (
    <section ref={sectionRef as any} className="py-16 sm:py-24 bg-secondary text-pearl scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-gradient-gold">Leadership</span>
          </h2>
          <p className="text-base sm:text-xl text-pearl/80 max-w-3xl mx-auto leading-relaxed px-4">
            Meet the visionaries behind Maison B.A International, each bringing unique expertise and passion to our luxury services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group bg-card/95 backdrop-blur-sm border-gold/30 hover:luxury-shadow transition-luxury text-center hover-lift"
            >
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:glow-shadow transition-luxury">
                  <member.icon className="w-10 h-10 text-charcoal" />
                </div>
                <CardTitle className="font-serif text-2xl text-card-foreground group-hover:text-gold transition-smooth">
                  {member.name}
                </CardTitle>
                <p className="text-gold font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground italic">{member.expertise}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic text-gold mb-4">
              "Every project is a unique adventure we share with you. Your success is our greatest reward."
            </blockquote>
            <p className="text-pearl/70">— Maison B.A International Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;