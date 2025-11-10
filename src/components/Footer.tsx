import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-pearl py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              <span className="text-gradient-gold">Maison B.A</span> International
            </h3>
            <p className="text-sm sm:text-base text-pearl/70 leading-relaxed mb-4 sm:mb-6 max-w-md">
              Creating unique experiences, premium content, and tailor-made solutions across Morocco, Turkey, and Europe.
            </p>
            <p className="text-sm sm:text-base text-gold italic font-light">
              "Your Vision, Our Signature"
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gold">Services</h4>
            <ul className="space-y-2 text-sm sm:text-base text-pearl/70">
              <li className="hover:text-gold transition-smooth cursor-pointer">Event Planning</li>
              <li className="hover:text-gold transition-smooth cursor-pointer">Audiovisual Production</li>
              <li className="hover:text-gold transition-smooth cursor-pointer">Import & Export</li>
              <li className="hover:text-gold transition-smooth cursor-pointer">Luxury Consulting</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gold">Locations</h4>
            <ul className="space-y-2 text-sm sm:text-base text-pearl/70">
              <li>Morocco</li>
              <li>Turkey</li>
              <li>Europe</li>
              <li className="text-sm italic">International Network</li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-gold/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-pearl/60 gap-4">
          <p>&copy; 2024 Maison B.A International. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-gold transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-smooth">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;