import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import galleryHero from "@/assets/gallery-hero.png";
import galleryBathroom from "@/assets/gallery-bathroom.png";
import galleryBedroom from "@/assets/gallery-bedroom.png";
import galleryPoolDeck from "@/assets/gallery-pool-deck.png";
import galleryPoolSide from "@/assets/gallery-pool-side.png";
import gallerySpa from "@/assets/gallery-spa.png";
import galleryTreatment from "@/assets/gallery-treatment.png";

const galleryImages = [
  { src: galleryHero, alt: "Soulever development - aerial waterfront view" },
  { src: galleryBathroom, alt: "Soulever penthouse master bathroom with ocean view" },
  { src: galleryBedroom, alt: "Soulever three bedroom apartment with panoramic sea view" },
  { src: galleryPoolDeck, alt: "Soulever pool deck and resort-style amenities" },
  { src: galleryPoolSide, alt: "Soulever infinity pool with ocean vista" },
  { src: gallerySpa, alt: "Soulever spa and treatment room" },
  { src: galleryTreatment, alt: "Soulever treatment room with tropical views" },
];

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-gold text-xl md:text-2xl font-bold tracking-[0.15em] uppercase">
            Gallery
          </h2>
        </motion.div>

        {/* Mobile-first responsive slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              dragFree: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {galleryImages.map((img, i) => (
                <CarouselItem key={i} className="pl-0 basis-full md:basis-full">
                  <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl md:rounded-2xl">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Prev/Next - larger touch targets on mobile */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-border/50 hover:bg-background/95 transition-colors touch-manipulation"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-border/50 hover:bg-background/95 transition-colors touch-manipulation"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
            </button>
          </Carousel>

          {/* Dots - mobile-friendly */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  i === current
                    ? "w-8 bg-gold"
                    : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
