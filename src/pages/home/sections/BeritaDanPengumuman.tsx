import { ColHeader } from "#components/common/ColHeader.tsx";
import { beritaItems, pengumumanItems } from "../../../data/mockData";
import { cn } from "../../../libs/utils";
import { Link } from "react-router-dom";

const badgeStyles: Record<string, string> = {
  hot: "bg-red-100 text-red-800",
  new: "bg-blue-100 text-blue-800",
  info: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
};

const combinedItems = [
  ...beritaItems.map((item) => ({ ...item, type: "berita" as const })),
  ...pengumumanItems.map((item) => ({ ...item, type: "pengumuman" as const })),
]
  .sort((a, b) => b.id - a.id)
  .slice(0, 5);

const BeritaTerkini = () => {
  return (
    <div>
      <ColHeader
        eyebrow="📰 Berita"
        title="Berita & Pengumuman"
        eyebrowClass="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 rounded-full font-bold text-[10px] sm:text-xs py-0.5 sm:py-1 px-3 w-fit"
        href="/info?tab=berita"
      />

      <div className="flex flex-col">
        {combinedItems.map((item, i) => (
          <Link
            key={`${item.type}-${item.id}`}
            to={
              item.type === "berita"
                ? `/info?tab=berita`
                : `/info?tab=pengumuman`
            }
            className={cn(
              "flex gap-3 py-3.5 cursor-pointer group items-start",
              i < combinedItems.length - 1 && "border-b border-primary/30",
            )}
          >
            <span className="text-2xl font-extrabold text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors leading-none w-7 shrink-0 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full",
                    badgeStyles[item.badgeVariant],
                  )}
                >
                  {item.badge}
                </span>
                {/* Tambah label type */}
                <span
                  className={cn(
                    "text-[10px] font-medium px-2 py-0.5 rounded-full",
                    item.type === "pengumuman"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  {item.type === "pengumuman" ? "Pengumuman" : "Berita"}
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground leading-snug mt-1.5 mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                {item.judul}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-muted-foreground">
                  {item.tanggal}
                </span>
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                <span className="text-[11px] text-muted-foreground">
                  {item.sumber}
                </span>
              </div>
            </div>
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-xl">
              {item.type === "pengumuman" ? "📢" : "📋"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BeritaTerkini;
