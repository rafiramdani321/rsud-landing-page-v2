import { cn } from "../../../libs/utils";
import { useInView } from "../../../hooks/useinView";
import { Button } from "#components/ui/button.tsx";
import { ArrowUpRight, Star } from "lucide-react";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#components/ui/carousel.tsx";
import { Link } from "react-router-dom";
import { dokterItems } from "../../../data/mockData";

const Dokter = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView();

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full py-12 px-4 sm:px-16 lg:px-48 transition-all duration-700",
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
      )}
    >
      <div className="flex items-end justify-between gap-4 flex-wrap mb-7 sm:mb-8">
        <div className="flex flex-col gap-1.5">
          <span className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full font-bold text-[10px] sm:text-xs py-0.5 sm:py-1 px-3 w-fit">
            Spesialis Kami
          </span>
          <h2 className="font-bold text-foreground text-base sm:text-2xl leading-snug">
            Kenali Dokter{" "}
            <span className="text-primary">yang merawat anda</span>
          </h2>
          <p className="hidden sm:block text-muted-foreground text-sm leading-relaxed max-w-md font-medium">
            Ditangani oleh dokter Spesialis berpengalaman dan berdedikasi
            tinggi.
          </p>
        </div>
        <Button variant="primary" asChild size="xs" className="text-[10px] rounded-full">
          <Link to="/pelayanan/dokter">
            Lihat Semua
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </Button>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          AutoPlay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {dokterItems.map((dokter, i) => (
            <CarouselItem
              key={i}
              style={{
                transitionDelay: sectionVisible ? `${i * 60}ms` : "0ms",
              }}
              className={cn(
                "pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4 transition-all duration-500",
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              <div className="h-full">
                <div className="group flex flex-col h-full rounded-2xl border border-border/60 overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <img
                      src={dokter.foto}
                      alt={dokter.name}
                      className="w-full aspect-3/4 object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[11px] sm:text-xs font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-sm">
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                      <span>{dokter.rating}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-sm text-secondary text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                      {dokter.pengalaman}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 p-3 pb-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-primary">
                      {dokter.spesialis}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug line-clamp-2 min-h-10">
                      {dokter.name}
                    </p>
                  </div>

                  <Button className="cursor-pointer mx-3 mb-3 mt-1 py-2 text-xs font-semibold text-primary border border-primary/30 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    {"Lihat Profil →"}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center gap-2 mt-6 justify-end">
          <CarouselPrevious className="static translate-y-0 w-9 h-9 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary cursor-pointer" />
          <CarouselNext className="static translate-y-0 w-9 h-9 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary cursor-pointer" />
        </div>
      </Carousel>
    </section>
  );
};

export default Dokter;
