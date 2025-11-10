import { useScrollReveal } from "@/hooks/useScrollReveal";
import img5 from "@/assets/img 5.jpg";
import img4 from "@/assets/img 4.jpg";
import img3 from "@/assets/img 3.jpg";
import img6 from "@/assets/img 6.jpg";
import img1 from "@/assets/img 1.jpg";
import img2 from "@/assets/img 2.jpg";

const Gallery = () => {
  const sectionRef = useScrollReveal();
  
  const images = [
    { src: img1, alt: "Film Production" }, //
    { src: img2, alt: "Audiovisual Production" },
    { src: img3, alt: "Import & Export Services" },
    { src: img4, alt: "Premium Event Design" },
    { src: img5, alt: "Film Production" },
    { src: img6, alt: "Hospitality Products" },
  ];

  return (
    <section ref={sectionRef as any} className="py-16 sm:py-24 bg-background scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Explore moments of excellence and luxury captured through our work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square hover-lift"
              style={{
                animation: `fadeIn 0.8s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-luxury group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-luxury">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-gold-light font-serif text-lg sm:text-xl">{image.alt}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-luxury rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
