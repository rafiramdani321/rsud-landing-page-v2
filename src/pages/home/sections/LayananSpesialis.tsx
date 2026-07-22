import { ArrowUpRight } from "lucide-react";
import { cn } from "../../../libs/utils";
import { Button } from "#components/ui/button.tsx";
import { useInView } from "../../../hooks/useinView";
import { Link } from "react-router-dom";
import { layananSpesialisItems } from "../../../data/mockData";

const LayananSpesialis = () => {
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
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <span className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full font-bold text-[10px] sm:text-xs py-0.5 sm:py-1 px-3 w-fit">
          Pelayanan
        </span>
        <h2 className="font-bold text-primary text-xl sm:text-2xl leading-snug">
          Layanan Spesialis
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm">
          Tim dokter spesialis berpengalaman siap memberikan pelayanan medis
          terbaik bagi masyarakat Karawang.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {layananSpesialisItems.map((item, i) => (
          <div
            key={i}
            style={{ transitionDelay: sectionVisible ? `${i * 50}ms` : "0ms" }}
            className={cn(
              "flex flex-col items-center text-center px-5 py-7 gap-2.5 cursor-pointer",
              "border-r border-b border-foreground/10 transition-all duration-500",
              "last-of-type:border-r-0",
              "nth-[2n]:border-r-0 sm:nth-[2n]:border-r sm:nth-[4n]:border-r-0",
              "hover:bg-primary/5",
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            {/* Icon */}
            <div className="w-13 h-13 rounded-full bg-primary/80 border border-primary/20 flex items-center justify-center shadow-sm shadow-primary/10 shrink-0">
              <img
                src={item.icon}
                className="w-7 h-7 object-contain"
                alt={item.name}
              />
            </div>

            {/* Divider dekoratif */}
            <div className="w-6 h-0.5 bg-primary/20 rounded-full" />

            <p className="font-semibold text-sm text-foreground leading-snug">
              {item.name}
            </p>
            <p className="text-xs text-primary/80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full text-center mt-10">
        <Button variant="primary" asChild>
          <Link to={"/pelayanan/dokter"}>
            Lihat semua spesialis
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LayananSpesialis;
