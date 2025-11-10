import { MapPin, Globe, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef as any} className="py-16 sm:py-24 bg-secondary text-pearl scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                Global <span className="text-gradient-gold">Excellence</span>
              </h2>
              <p className="text-base sm:text-xl leading-relaxed text-pearl/80 mb-6 sm:mb-8">
                Operating between Morocco, Turkey, and Europe, we connect excellence and innovation across continents, delivering premium experiences that transcend borders.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-gold">Unique Integrated Offering</h3>
                  <p className="text-pearl/70 leading-relaxed">
                    The only company providing comprehensive solutions across event planning, audiovisual production, and international trade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-gold">Full-Service Solutions</h3>
                  <p className="text-pearl/70 leading-relaxed">
                    Turnkey solutions from conception to delivery, ensuring seamless execution and exceptional quality control.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-gold">International Network</h3>
                  <p className="text-pearl/70 leading-relaxed">
                    Strong partnerships and local expertise across Morocco, Turkey, and Europe, maintaining the highest standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/5 to-gold/20 rounded-2xl p-8 luxury-shadow">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center text-gold">Our Operational Territories</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-pearl/5 rounded-lg border border-gold/20">
                  <span className="font-semibold">Morocco</span>
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-pearl/5 rounded-lg border border-gold/20">
                  <span className="font-semibold">Turkey</span>
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-pearl/5 rounded-lg border border-gold/20">
                  <span className="font-semibold">Europe</span>
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
                <p className="text-sm text-center italic text-pearl/80">
                  "Every project is a unique adventure we share with you. Your success is our greatest reward."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;