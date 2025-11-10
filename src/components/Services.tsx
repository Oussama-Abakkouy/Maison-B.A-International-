import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, Sparkles, Hotel, Users } from "lucide-react";
import eventImage from "@/assets/hero-luxury-event.jpg";
import audiovisualImage from "@/assets/audiovisual-production.jpg";
import performanceImage from "@/assets/performance-luxury.jpg";
import hotelsImage from "@/assets/hotels-entertainment.jpg";
import teamBuildingImage from "@/assets/team-building-luxury.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const sectionRef = useScrollReveal();
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Luxury weddings, galas, festivals, congresses — elegance and precision.",
      details: "From intimate celebrations to grand corporate events, we orchestrate every detail with meticulous attention to luxury and sophistication.",
      image: eventImage,
    },
    {
      icon: Video,
      title: "Audiovisual Production",
      description: "Promotional videos, commercials, films, series, documentaries, with high-end quality and expertise.",
      details: "Cinematic storytelling with cutting-edge technology, creating compelling visual narratives that captivate and inspire.",
      image: audiovisualImage,
    },
    {
      icon: Sparkles,
      title: "Performance",
      description: "Professional stage management, live entertainment, and spectacular performances tailored to your vision.",
      details: "From concerts to theatrical productions, we deliver world-class performances with state-of-the-art production and flawless execution.",
      image: performanceImage,
    },
    {
      icon: Hotel,
      title: "Hotels Entertainment",
      description: "Bespoke entertainment solutions for luxury hotels, creating unforgettable guest experiences.",
      details: "Curated entertainment programs, live performances, and exclusive events that elevate the hospitality experience to new heights.",
      image: hotelsImage,
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Strategic corporate retreats and team-building experiences that inspire collaboration and innovation.",
      details: "Transform your team dynamics with customized programs combining luxury venues, engaging activities, and professional facilitation for lasting impact.",
      image: teamBuildingImage,
    },
  ];

  return (
    <section ref={sectionRef as any} className="py-16 sm:py-24 bg-gradient-luxury scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Five distinct domains, one unified vision of excellence. Operating between Morocco, Turkey, and Europe, we connect innovation and luxury.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {services.slice(0, 3).map((service, index) => (
              <Card 
                key={index} 
                className="group hover:luxury-shadow transition-luxury bg-card/95 backdrop-blur-sm border-gold/40 overflow-hidden hover-lift"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <service.icon className="w-10 h-10 text-gold drop-shadow-glow" />
                    <div className="w-12 h-1 bg-gradient-gold rounded-full" />
                  </div>
                </div>
                
                <CardHeader className="pb-3 pt-6">
                  <CardTitle className="font-serif text-2xl text-foreground group-hover:text-gold transition-smooth">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground/90">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Second row - 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <Card 
                key={index + 3} 
                className="group hover:luxury-shadow transition-luxury bg-card/95 backdrop-blur-sm border-gold/40 overflow-hidden hover-lift"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <service.icon className="w-10 h-10 text-gold drop-shadow-glow" />
                    <div className="w-12 h-1 bg-gradient-gold rounded-full" />
                  </div>
                </div>
                
                <CardHeader className="pb-3 pt-6">
                  <CardTitle className="font-serif text-2xl text-foreground group-hover:text-gold transition-smooth">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground/90">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;