import { useState } from "react";
import { Download, FileText, Clock, RefreshCw, FileCheck } from "lucide-react";
import type { BadgeItem, StandardItem, UnitKey } from "../../types";
import {
  dasarHukumStandarPelayananItems,
  UnitsItems,
} from "../../data/mockData";

const BADGE_STYLES: Record<
  BadgeItem["variant"],
  { bg: string; color: string }
> = {
  teal: { bg: "#E1F5EE", color: "#0F6E56" },
  blue: { bg: "#E6F1FB", color: "#185FA5" },
  amber: { bg: "#FAEEDA", color: "#854F0B" },
  purple: { bg: "#EEEDFE", color: "#534AB7" },
  red: { bg: "#FCEBEB", color: "#A32D2D" },
};

const FILTER_KEYS: UnitKey[] = [
  "Semua unit",
  "Rawat Jalan",
  "IGD",
  "Rawat Inap",
  "Laboratorium",
  "Farmasi",
  "Radiologi",
];

function BadgePill({ badge }: { badge: BadgeItem }) {
  const style = BADGE_STYLES[badge.variant];
  return (
    <span
      className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
      style={{ background: style.bg, color: style.color }}
    >
      {badge.label}
    </span>
  );
}

function WaktuPill({
  label,
  variant,
}: {
  label: string;
  variant: StandardItem["waktuVariant"];
}) {
  const style = BADGE_STYLES[variant];
  return (
    <span
      className="inline-flex items-center gap-1 text-[11px] font-semibold rounded-full px-2.5 py-1"
      style={{ background: style.bg, color: style.color }}
    >
      <Clock size={10} />
      {label}
    </span>
  );
}

function StandarCard({ item }: { item: StandardItem }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 grid sm:grid-cols-[1fr_auto] gap-4 items-start">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1.5">
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.badges.map((b) => (
            <BadgePill key={b.label} badge={b} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <WaktuPill label={item.waktu} variant={item.waktuVariant} />
        <a
          href={item.pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold rounded-lg px-2.5 py-1.5 transition-colors"
          style={{
            background: "#E1F5EE",
            color: "#0F6E56",
            border: "0.5px solid #9FE1CB",
          }}
        >
          <Download size={11} />
          PDF
        </a>
      </div>
    </div>
  );
}

const StandarPelayananPage = () => {
  const [activeFilter, setActiveFilter] = useState<UnitKey>("Semua unit");

  const visibleUnits =
    activeFilter === "Semua unit"
      ? UnitsItems
      : UnitsItems.filter((u) => u.key === activeFilter);

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
            width: 150,
            height: 150,
            right: 250,
            bottom: -55,
            background: "rgba(255,255,255,.04)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/45 font-medium mb-2">
              RSUD Karawang · Informasi
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3">
              Standar <span className="text-cyan-300">pelayanan</span>
              <br />
              RSUD Karawang
            </h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              Dokumen standar pelayanan publik sesuai UU No. 25 Tahun 2009 dan
              Permenpan RB No. 15 Tahun 2014, mencakup persyaratan, prosedur,
              waktu, dan biaya layanan.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 shrink-0">
            {[
              { icon: <FileCheck size={15} />, text: "UU No. 25/2009" },
              { icon: <FileCheck size={15} />, text: "Permenpan RB 15/2014" },
              { icon: <RefreshCw size={15} />, text: "Diperbarui 2025" },
            ].map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-2.5 rounded-xl px-4 py-2.5"
                style={{
                  background: "rgba(255,255,255,.10)",
                  border: "0.5px solid rgba(255,255,255,.15)",
                }}
              >
                <span className="text-white/60">{p.icon}</span>
                <span className="text-xs font-medium text-white/80 whitespace-nowrap">
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {FILTER_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`text-xs rounded-full px-4 py-1.5 border transition-colors ${
              activeFilter === key
                ? "bg-teal-50 text-teal-800 border-teal-200 font-semibold"
                : "bg-background text-muted-foreground border-border hover:bg-accent"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Unit Section */}
      <div className="space-y-8">
        {visibleUnits.map((unit) => (
          <section key={unit.key}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: unit.iconBg, color: unit.iconColor }}
              >
                {unit.icon}
              </div>
              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  {unit.label}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {unit.sub}
                </p>
              </div>
            </div>
            <div className="space-y-2.5">
              {unit.items.map((item) => (
                <StandarCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Dasar Hukum */}
      <section>
        <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mb-4">
          Dasar hukum
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {dasarHukumStandarPelayananItems.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <FileText size={18} style={{ color: d.color }} className="mb-2" />
              <div className="text-sm font-semibold text-foreground mb-1">
                {d.title}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {d.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <RefreshCw size={13} />
          Terakhir diperbarui: Januari 2025
        </p>
        <a
          href="/standar-pelayanan/standar-pelayanan-rsud-karawang.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          style={{ background: "#064E5C" }}
        >
          <FileText size={15} />
          Unduh semua standar (PDF)
        </a>
      </section>
    </div>
  );
};

export default StandarPelayananPage;
