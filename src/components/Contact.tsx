import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef as any} className="py-16 sm:py-24 bg-gradient-luxury scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-pearl mb-4 sm:mb-6">
            Let's Create <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="text-base sm:text-xl text-pearl/80 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to transform your vision into reality? Contact us to discuss your next luxury project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-card border-gold/30">
              <CardHeader>
                <CardTitle className="font-serif text-xl sm:text-2xl text-card-foreground flex items-center gap-3">
                  <Mail className="w-6 h-6 text-gold" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contact@maisonba-international.com</p>
                <p className="text-sm text-muted-foreground/70 mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/30">
              <CardHeader>
                <CardTitle className="font-serif text-xl sm:text-2xl text-card-foreground flex items-center gap-3">
                  <Phone className="w-6 h-6 text-gold" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+90 540 106 07 24 </p>
                <p className="text-muted-foreground">+212 645 75 94 81</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Available 9 AM - 6 PM CET</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/30">
              <CardHeader>
                <CardTitle className="font-serif text-xl sm:text-2xl text-card-foreground flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-gold" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>Morocco • Turkey • Europe</p>
                  <p className="text-sm text-muted-foreground/70">International operations</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-gold/30 luxury-shadow">
              <CardHeader>
                <CardTitle className="font-serif text-2xl sm:text-3xl text-card-foreground">
                  Start Your Luxury Project
                </CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Tell us about your vision and we'll create something extraordinary together.
                </p>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="border-gold/20 focus:border-gold transition-smooth"
                  />
                  <Input 
                    placeholder="Your Email" 
                    type="email"
                    className="border-gold/20 focus:border-gold transition-smooth"
                  />
                </div>
                
                <Input 
                  placeholder="Company Name (Optional)" 
                  className="border-gold/20 focus:border-gold transition-smooth"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="w-full p-3 border border-gold/20 rounded-md bg-background focus:border-gold transition-smooth">
                    <option>Select Service</option>
                    <option>Event Planning</option>
                    <option>Audiovisual Production</option>
                    <option>Import & Export</option>
                    <option>Multiple Services</option>
                  </select>
                  
                  <Input 
                    placeholder="Budget Range" 
                    className="border-gold/20 focus:border-gold transition-smooth"
                  />
                  
                  <Input 
                    placeholder="Project Timeline" 
                    className="border-gold/20 focus:border-gold transition-smooth"
                  />
                </div>
                
                <Textarea 
                  placeholder="Tell us about your project vision, goals, and requirements..."
                  rows={5}
                  className="border-gold/20 focus:border-gold transition-smooth resize-none"
                />
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full md:w-auto min-w-[200px]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;