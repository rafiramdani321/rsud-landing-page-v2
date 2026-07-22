import { useState } from "react";
import { Building2, ArrowUpRight } from "lucide-react";
import type { CategoryFasilitas, FasilitasItem } from "../../types";
import { fasilitasItems } from "../../data/mockData";

const CATEGORIES: CategoryFasilitas[] = [
  "Semua",
  "Gedung & Ruang",
  "Ruang Khusus",
  "Peralatan Medis",
  "Kapasitas",
];

const SUMMARY_STATS = [
  { value: "450+", label: "Tempat tidur total" },
  { value: "8", label: "Kamar operasi" },
  { value: "30", label: "Bed ICU / ICCU" },
  { value: "3", label: "Gedung utama" },
];

function FasilitasCard({ item }: { item: FasilitasItem }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 hover:border-border/80 transition-colors group">
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: item.iconBg, color: item.iconColor }}
        >
          {item.icon}
        </div>
        {item.badge && (
          <span
            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full shrink-0"
            style={{ background: item.badgeBg, color: item.badgeColor }}
          >
            {item.badge}
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
          {item.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {item.desc}
        </p>
      </div>

      {item.detail && (
        <div className="flex items-center gap-1.5 pt-3 border-t border-border">
          <Building2 size={11} className="text-muted-foreground shrink-0" />
          <span className="text-[11px] text-muted-foreground">
            {item.detail}
          </span>
        </div>
      )}
    </article>
  );
}

const FasilitasPage = () => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFasilitas>("Semua");

  const filtered =
    activeCategory === "Semua"
      ? fasilitasItems
      : fasilitasItems.filter((f) => f.category === activeCategory);

  return (
    <div className="px-4 sm:px-10 lg:px-24 xl:px-40 py-10 space-y-8">
      {/* Hero */}
      <section
        className="relative rounded-3xl overflow-hidden p-10 md:p-14"
        style={{ background: "#064E5C" }}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300,
            height: 300,
            right: -70,
            top: -90,
            background: "rgba(255,255,255,.06)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 140,
            height: 140,
            right: 240,
            bottom: -55,
            background: "rgba(255,255,255,.04)",
          }}
        />
        <div className="relative z-10">
          <p className="text-[11px] tracking-widest uppercase text-white/45 font-medium mb-2">
            RSUD Karawang · Tentang Kami
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3">
            Fasilitas <span className="text-cyan-300">rumah sakit</span>
          </h1>
          <p className="text-sm text-white/60 leading-relaxed max-w-lg mb-6">
            Gedung, ruang khusus, dan peralatan medis canggih yang mendukung
            pelayanan kesehatan terbaik bagi masyarakat Karawang.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3">
            {SUMMARY_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-4 py-2.5 text-center"
                style={{
                  background: "rgba(255,255,255,.10)",
                  border: "0.5px solid rgba(255,255,255,.15)",
                }}
              >
                <div className="text-xl font-bold text-white leading-none">
                  {s.value}
                </div>
                <div className="text-[11px] text-white/55 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs rounded-full px-4 py-1.5 border transition-colors ${
              activeCategory === cat
                ? "bg-teal-50 text-teal-800 border-teal-200 font-semibold"
                : "bg-background text-muted-foreground border-border hover:bg-accent"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-xs text-muted-foreground self-center">
          {filtered.length} fasilitas
        </span>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <FasilitasCard key={item.name} item={item} />
        ))}
      </div>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-1">
            Mencari layanan medis pendukung?
          </h2>
          <p className="text-xs text-muted-foreground">
            Lihat jadwal dan informasi operasional IGD, Laboratorium, Radiologi,
            Farmasi, dan layanan penunjang lainnya.
          </p>
        </div>
        <a
          href="/pelayanan/penunjang"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition shrink-0"
          style={{ background: "#064E5C" }}
        >
          Layanan Penunjang
          <ArrowUpRight size={15} />
        </a>
      </section>
    </div>
  );
};

export default FasilitasPage;
