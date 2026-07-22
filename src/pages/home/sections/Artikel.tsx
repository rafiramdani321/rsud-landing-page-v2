import { useInView } from "../../../hooks/useinView";
import { cn } from "../../../libs/utils";
import BeritaTerkini from "./BeritaDanPengumuman";
import { ColHeader } from "#components/common/ColHeader.tsx";
import { artikelItems } from "../../../data/mockData";
import type { ArtikelItem } from "../../../types";
import imageDefault from "#/assets/blog/image-default.webp";

const FeaturedCard = ({ item }: { item: ArtikelItem }) => {
  return (
    <div className="rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors cursor-pointer mb-3 group shadow-md">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={item.image || imageDefault}
          alt={item.judul}
          className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4">
        <p className="text-[11px] font-bold text-primary uppercase tracking-wide mb-1.5">
          {item.kategori}
        </p>
        <p className="text-sm font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
          {item.judul}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {item.excerpt}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">{item.tanggal}</span>
          <span className="text-xs font-semibold text-primary">Baca →</span>
        </div>
      </div>
    </div>
  );
};

const ArtikelCard = ({
  item,
  index,
  itemLength,
}: {
  item: (typeof artikelItems)[number];
  index: number;
  itemLength: number;
}) => {
  return (
    <div
      className={cn(
        "flex gap-3 py-3 cursor-pointer group",
        index < itemLength - 1 && "border-b border-primary/30",
      )}
    >
      <div className="overflow-hidden rounded-xl shrink-0">
        <img
          src={item.image || imageDefault}
          alt={item.judul}
          className="
            w-24
            h-24
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold text-primary uppercase tracking-wide">
          {item.kategori}
        </p>
        <p className="text-xs font-semibold text-foreground leading-snug mt-0.5 group-hover:text-primary transition-colors line-clamp-2">
          {item.judul}
        </p>
        <p className="text-[11px] text-muted-foreground mt-1">{item.tanggal}</p>
      </div>
    </div>
  );
};

const Artikel = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView();

  const featuredItem = artikelItems.find((item) => item.featured);
  const regulerItems = artikelItems.filter((item) => !item.featured);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <div>
          <ColHeader
            eyebrow="📝 Artikel"
            title="Blog & Edukasi Kesehatan"
            eyebrowClass="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full font-bold text-[10px] sm:text-xs py-0.5 sm:py-1 px-3 w-fit"
            href="/info/blog"
          />

          {featuredItem && <FeaturedCard item={featuredItem} />}

          {regulerItems.map((item, i) => (
            <ArtikelCard
              key={i}
              index={i}
              item={item}
              itemLength={regulerItems.length}
            />
          ))}
        </div>

        <div>
          <BeritaTerkini />
        </div>
      </div>
    </section>
  );
};

export default Artikel;
