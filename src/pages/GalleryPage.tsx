import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import eventImage from "@/assets/hero-luxury-event.jpg";
import audiovisualImage from "@/assets/audiovisual-production.jpg";
import performanceImage from "@/assets/performance-luxury.jpg";
import hotelsImage from "@/assets/hotels-entertainment.jpg";
import teamBuildingImage from "@/assets/team-building-luxury.jpg";
import ex from "@/assets/vid1.mp4";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  category: string;
}

const GalleryPage = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const mediaItems: MediaItem[] = [
    { type: "image", src: eventImage, alt: "Luxury Wedding Gala", category: "events" },
    { type: "image", src: audiovisualImage, alt: "Film Production Set", category: "audiovisual" },
    { type: "image", src: performanceImage, alt: "Live Concert Performance", category: "performance" },
    { type: "image", src: hotelsImage, alt: "Hotel Entertainment", category: "hotels" },
    { type: "image", src: teamBuildingImage, alt: "Corporate Team Building", category: "team-building" },
    { type: "image", src: eventImage, alt: "Premium Corporate Event", category: "events" },
    { type: "image", src: audiovisualImage, alt: "Commercial Video Production", category: "audiovisual" },
    { type: "image", src: performanceImage, alt: "Theatre Production", category: "performance" },
    { type: "image", src: hotelsImage, alt: "Luxury Hotel Event", category: "hotels" },
    { type: "image", src: teamBuildingImage, alt: "Team Workshop", category: "team-building" },
    { type: "image", src: eventImage, alt: "Festival Production", category: "events" },
    { type: "image", src: audiovisualImage, alt: "Documentary Filming", category: "audiovisual" },
    { type: "video", src: ex, alt: "Documentary Filming", category: "audiovisual" },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "events", label: "Events" },
    { id: "audiovisual", label: "Audiovisual" },
    { id: "performance", label: "Performance" },
    { id: "hotels", label: "Hotels" },
    { id: "team-building", label: "Team Building" },
  ];

  const filteredMedia = filter === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="text-foreground hover:text-gold">
                <X className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              <span className="text-gradient-gold">Gallery</span>
            </h1>
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 border-b border-gold/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={`transition-all ${
                  filter === category.id
                    ? "bg-gradient-gold border-gold text-charcoal"
                    : "border-gold/30 text-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredMedia.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedMedia(item)}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer hover-lift"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.05}s forwards`,
                  opacity: 0,
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                    muted
                    loop
                    playsInline
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === "video" && (
                    <Play className="w-12 h-12 text-gold drop-shadow-glow" />
                  )}
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-gold-light font-serif text-base sm:text-lg line-clamp-2">
                    {item.alt}
                  </p>
                </div>

                {/* Type indicator */}
                <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-luxury">
                  {item.type === "video" ? (
                    <VideoIcon className="w-4 h-4 text-gold" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-gold" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-charcoal border-gold/30">
          {selectedMedia && (
            <div className="relative">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  className="w-full h-auto max-h-[85vh]"
                  autoPlay
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent p-6">
                <h3 className="font-serif text-xl sm:text-2xl text-gold-light">
                  {selectedMedia.alt}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;
