import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, Package } from "lucide-react";
import eventImage from "@/assets/hero-luxury-event.jpg";
import audiovisualImage from "@/assets/audiovisual-production.jpg";
import importExportImage from "@/assets/import-export-luxury.jpg";
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
      icon: Package,
      title: "Import & Export",
      description: "Tailor-made hospitality products, personalized hotel items, leisure and entertainment materials, delivered worldwide.",
      details: "Premium hospitality solutions connecting Morocco, Turkey, and Europe with bespoke products and seamless logistics.",
      image: importExportImage,
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
            Three distinct domains, one unified vision of excellence. Operating between Morocco, Turkey, and Europe, we connect innovation and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:luxury-shadow transition-luxury bg-card border-gold/30 overflow-hidden hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="font-serif text-2xl text-card-foreground group-hover:text-gold transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;