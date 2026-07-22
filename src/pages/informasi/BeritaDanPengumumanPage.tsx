import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import type { BadgeVariant } from "../../types";
import { cn } from "../../libs/utils";
import { beritaItems, pengumumanItems } from "../../data/mockData";

type Tab = "berita" | "pengumuman";

const badgeStyles: Record<BadgeVariant, string> = {
  hot: "bg-red-100 text-red-800",
  new: "bg-blue-100 text-blue-800",
  info: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
};

const BadgePill = ({
  variant,
  label,
}: {
  variant: BadgeVariant;
  label: string;
}) => {
  return (
    <span
      className={cn(
        "text-[10px] font-bold px-2 py-0.5 rounded-full",
        badgeStyles[variant],
      )}
    >
      {label}
    </span>
  );
};

const BeritaDanPengumumanPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeTab = (searchParams.get("tab") as Tab) ?? "berita";

  React.useEffect(() => {
    if (!searchParams.get("tab")) {
      navigate("/info?tab=berita", { replace: true });
    }
  }, [searchParams]);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "berita", label: "Berita", count: beritaItems.length },
    { key: "pengumuman", label: "Pengumuman", count: pengumumanItems.length },
  ];

  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      {/* Header */}
      <section className="relative rounded-3xl bg-primary overflow-hidden p-8 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-secondary">
            Berita & <span className="text-cyan-300">Pengumuman</span>
          </h2>
          <p className="text-sm text-secondary/60 mt-0.5">
            RSUD Kabupaten Karawang - informasi dan pengumuman terkini
          </p>
        </div>
      </section>

      {/* Tab Content */}
      <div className="bg-background border border-border rounded-xl overflow-hidden mt-6">
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              to={`/info?tab=${tab.key}`}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors border-b-2",
                activeTab === tab.key
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground",
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "text-[10px] font-medium px-2 py-0.5 rounded-full",
                  activeTab === tab.key
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {tab.count}
              </span>
            </Link>
          ))}
        </div>

        <div className="p-4">
          {activeTab === "berita" ? <BeritaContent /> : <PengumumanContent />}
        </div>
      </div>
    </div>
  );
};

const BeritaContent = () => {
  const [featured, ...rest] = beritaItems;

  return (
    <div>
      {/* Featured */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden mb-4 cursor-pointer group hover:border-border/80 transition-colors">
        <div className="bg-muted/50 min-h-48 flex items-center justify-center">
          <span className="text-4xl">📋</span>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BadgePill
                variant={featured.badgeVariant}
                label={featured.badge}
              />
              <span className="text-xs text-muted-foreground">
                {featured.sumber}
              </span>
            </div>
            <h3 className="text-base font-medium text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
              {featured.judul}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {featured.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-muted-foreground">
              {featured.tanggal}
            </span>
            <span className="text-xs font-medium text-primary">
              Baca selengkapnya →
            </span>
          </div>
        </div>
      </div>

      {/* Rest */}
      <div className="flex flex-col gap-3">
        {rest.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 border border-border rounded-xl overflow-hidden cursor-pointer hover:border-border/80 transition-colors group"
          >
            <div className="w-24 bg-muted/50 flex items-center justify-center shrink-0">
              <span className="text-2xl">📋</span>
            </div>
            <div className="py-3 pr-3 flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <BadgePill variant={item.badgeVariant} label={item.badge} />
                <span className="text-xs text-muted-foreground">
                  {item.sumber}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                {item.judul}
              </p>
              <span className="text-xs text-muted-foreground">
                {item.tanggal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PengumumanContent = () => {
  const penting = pengumumanItems.filter((i) => i.penting);
  const biasa = pengumumanItems.filter((i) => !i.penting);

  return (
    <div className="flex flex-col gap-6">
      {/* Penting */}
      {penting.length > 0 && (
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 items-center gap-1.5">
            <span className="text-amber-500">📌</span>
            Perlu diperhatikan
          </p>
          <div className="flex flex-col gap-3">
            {penting.map((item) => (
              <div
                key={item.id}
                className="bg-background border-l-2 border-l-amber-400 border border-border rounded-xl p-4 cursor-pointer hover:border-border/80 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <BadgePill variant={item.badgeVariant} label={item.badge} />
                    <span className="text-xs text-muted-foreground">
                      {item.sumber}
                    </span>
                  </div>
                  {item.berlakuHingga && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 shrink-0 whitespace-nowrap">
                      s/d {item.berlakuHingga}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {item.judul}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {item.tanggal}
                  </span>
                  <span className="text-xs font-medium text-primary">
                    Lihat detail →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Biasa */}
      {biasa.length > 0 && (
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Lainnya
          </p>
          <div className="flex flex-col gap-3">
            {biasa.map((item) => (
              <div
                key={item.id}
                className="bg-background border border-border rounded-xl p-4 cursor-pointer hover:border-border/80 transition-colors group"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <BadgePill variant={item.badgeVariant} label={item.badge} />
                    <span className="text-xs text-muted-foreground">
                      {item.sumber}
                    </span>
                  </div>
                  {item.berlakuHingga && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground shrink-0 whitespace-nowrap">
                      s/d {item.berlakuHingga}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors">
                  {item.judul}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">
                    {item.tanggal}
                  </span>
                  <span className="text-xs font-medium text-primary">
                    Lihat detail →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BeritaDanPengumumanPage;
