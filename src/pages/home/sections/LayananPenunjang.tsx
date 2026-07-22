import { ArrowUpRight } from "lucide-react";
import { cn } from "../../../libs/utils";
import { useInView } from "../../../hooks/useinView";
import { Button } from "#components/ui/button.tsx";
import type { LayananPenunjangItem } from "../../../types";
import { Link } from "react-router-dom";
import { layananPenunjangItems } from "../../../data/mockData";

const tagStyles = {
  urgent: "bg-red-100 text-red-800",
  default: "bg-primary/10 text-primary",
};

const FeaturedCard = ({
  item,
  visible,
}: {
  item: LayananPenunjangItem;
  visible: boolean;
}) => {
  const Icon = item.icon;

  return (
    <div
      style={{ transitionDelay: visible ? "0ms" : "0ms" }}
      className={cn(
        "group relative row-span-2 col-span-2 sm:col-span-1 flex flex-col rounded-2xl p-5 cursor-pointer overflow-hidden",
        "transition-all duration-500",
        "bg-linear-to-br from-primary to-primary/70",
        "hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      )}
    >
      {/* Background */}
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-secondary/5" />
      <div className="absolute -bottom-10 -left-6 w-48 h-48 rounded-full bg-secondary/5" />

      {/* Icon */}
      <div className="flex items-center justify-between relative z-10">
        <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center">
          <Icon className="w-5 h-5 text-secondary" />
        </div>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-secondary/15 text-secondary/90">
          🔴 {item.tag}
        </span>
      </div>

      <div className="h-px bg-white/15 my-3.5 relative z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <p className="font-bold text-white text-lg leading-snug mb-2">
          {item.name}
        </p>
        <p className="text-secondary/65 text-xs leading-relaxed flex-1">
          {item.desc}
        </p>

        {/* Stats */}
        <div className="flex gap-5 mt-5">
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-extrabold text-cyan-300 leading-none">
              24/7
            </span>
            <span className="text-[10px] text-secondary/60">Selalu Siaga</span>
          </div>
          <div className="w-px bg-white/15" />
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-extrabold text-cyan-300 leading-none">
              5 mnt
            </span>
            <span className="text-[10px] text-white/60">Respons Cepat</span>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-3.5 py-2 w-fit">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
          <span className="text-xs font-semibold text-secondary">
            Aktif Sekarang
          </span>
        </div>
      </div>
    </div>
  );
};

const FasilitasCard = ({
  item,
  index,
  visible,
}: {
  item: (typeof layananPenunjangItems)[number];
  index: number;
  visible: boolean;
}) => {
  const Icon = item.icon;
  const isUrgent = item.tagVariant === "urgent";

  return (
    <div
      style={{ transitionDelay: visible ? `${(index + 1) * 60}ms` : "0ms" }}
      className={cn(
        "group relative flex flex-col rounded-2xl p-4 sm:p-5 cursor-pointer overflow-hidden",
        "border transition-all duration-500",
        "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/8",
        isUrgent
          ? "border-red-200/70 hover:border-red-300"
          : "border-border/70 hover:border-primary/40",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      )}
    >
      {/* top bar */}
      <div
        className={cn(
          "absolute top-0 inset-x-0 h-0.75 rounded-t-2xl transition-all duration-300",
          isUrgent ? "bg-red-400" : "bg-primary/15 group-hover:bg-primary/70",
        )}
      />

      {/* Icon + Tag */}
      <div className="flex items-start justify-between gap-2 mt-1.5 mb-3">
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
            isUrgent ? "bg-red-50 text-red-500" : "bg-primary/10 text-primary",
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span
          className={cn(
            "text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-0.5 shrink-0",
            tagStyles[item.tagVariant],
          )}
        >
          {item.tag}
        </span>
      </div>

      <div className="h-px bg-border/50 mb-3" />

      <p className="font-bold text-xs sm:text-sm text-foreground leading-snug mb-1.5">
        {item.name}
      </p>
      <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3 font-medium">
        {item.desc}
      </p>
    </div>
  );
};

const LayananPenunjang = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView();

  const featuredItems = layananPenunjangItems.find((item) => item.featured);
  const regularItems = layananPenunjangItems.filter((item) => !item.featured);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full py-10 px-4 sm:px-16 lg:px-48 transition-all duration-700",
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
      )}
    >
      <div className="flex items-end justify-between gap-4 flex-wrap mb-7 sm:mb-8">
        <div className="flex flex-col gap-1.5">
          <span className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full font-bold text-[10px] sm:text-xs py-0.5 sm:py-1 px-3 w-fit">
            Pelayanan
          </span>
          <h2 className="font-bold text-foreground text-base sm:text-2xl leading-snug">
            Layanan Penunjang
          </h2>
          <p className="hidden sm:block text-muted-foreground sm:text-sm leading-relaxed max-w-md font-medium">
            Layanan pendukung medis modern untuk pelayanan terbaik bagi
            masyarakat Karawang.
          </p>
        </div>
        <Button variant="primary" asChild size="xs" className="text-[10px] rounded-full">
          <Link to={"/pelayanan/penunjang"}>
            Lihat semua
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />  
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {featuredItems && (
          <FeaturedCard visible={sectionVisible} item={featuredItems} />
        )}
        {regularItems.map((item, i) => (
          <FasilitasCard
            key={item.name}
            item={item}
            index={i}
            visible={sectionVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default LayananPenunjang;
