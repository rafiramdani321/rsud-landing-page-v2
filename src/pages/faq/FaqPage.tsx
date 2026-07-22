import React, { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  Phone,
  MessageCircle,
  ClipboardList,
  BadgeCheck,
  BedDouble,
  Receipt,
  Ambulance,
  MoreHorizontal,
} from "lucide-react";
import type { CategoryPAQ, FaqItem } from "../../types";
import { FaqItems } from "../../data/mockData";

const CATEGORIES: { key: CategoryPAQ; icon: React.ReactNode }[] = [
  { key: "Semua", icon: null },
  { key: "Pendaftaran", icon: <ClipboardList size={13} /> },
  { key: "BPJS", icon: <BadgeCheck size={13} /> },
  { key: "Rawat Inap", icon: <BedDouble size={13} /> },
  { key: "Biaya", icon: <Receipt size={13} /> },
  { key: "IGD", icon: <Ambulance size={13} /> },
  { key: "Lainnya", icon: <MoreHorizontal size={13} /> },
];

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border bg-card overflow-hidden transition-colors ${
        open ? "border-border" : "border-border"
      }`}
      style={{
        borderColor: open ? "var(--color-border-secondary)" : undefined,
      }}
    >
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: item.dotColor }}
        />
        <span className="flex-1 text-sm font-semibold text-foreground leading-snug">
          {item.question}
        </span>
        <ChevronDown
          size={16}
          className="shrink-0 text-muted-foreground transition-transform duration-200"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: open ? "#0F6E56" : undefined,
          }}
        />
      </button>

      {open && (
        <div className="px-5 pb-4 pl-10 text-sm text-muted-foreground leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryPAQ>("Semua");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return FaqItems.filter((item) => {
      const catMatch =
        activeCategory === "Semua" || item.category === activeCategory;
      const searchMatch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        (typeof item.answer === "string"
          ? item.answer.toLowerCase().includes(q)
          : true);
      return catMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <div className="px-4 sm:px-10 lg:px-24 xl:px-40 py-10 space-y-8 mt-36">
      {/* Hero */}
      <section
        className="relative rounded-3xl overflow-hidden p-10 md:p-14"
        style={{ background: "#064E5C" }}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 280,
            height: 280,
            right: -60,
            top: -80,
            background: "rgba(255,255,255,.06)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 130,
            height: 130,
            right: 220,
            bottom: -50,
            background: "rgba(255,255,255,.04)",
          }}
        />
        <div className="relative z-10">
          <p className="text-[11px] tracking-widest uppercase text-white/45 font-medium mb-2">
            RSUD Karawang · Bantuan
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3">
            Pertanyaan yang{" "}
            <span className="text-cyan-300">sering ditanyakan</span>
          </h1>
          <p className="text-sm text-white/60 leading-relaxed max-w-lg mb-6">
            Temukan jawaban cepat untuk pertanyaan umum seputar layanan,
            pendaftaran, dan fasilitas RSUD Karawang.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "rgba(255,255,255,.4)" }}
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari pertanyaan..."
              className="w-full rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none"
              style={{
                background: "rgba(255,255,255,.12)",
                border: "0.5px solid rgba(255,255,255,.2)",
                color: "#fff",
              }}
            />
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(({ key, icon }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`inline-flex items-center gap-1.5 text-xs rounded-full px-4 py-1.5 border transition-colors ${
              activeCategory === key
                ? "bg-teal-50 text-teal-800 border-teal-200 font-semibold"
                : "bg-background text-muted-foreground border-border hover:bg-accent"
            }`}
          >
            {icon}
            {key}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <section className="space-y-2">
        {filtered.length > 0 ? (
          filtered.map((item) => <AccordionItem key={item.id} item={item} />)
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-14 text-center">
            <Search
              size={28}
              className="mx-auto mb-3 text-muted-foreground opacity-40"
            />
            <p className="text-sm text-muted-foreground">
              Tidak ada pertanyaan yang cocok.
              <br />
              Coba kata kunci lain atau hubungi kami langsung.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section
        className="rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        style={{ background: "#064E5C" }}
      >
        <div>
          <h2 className="text-base font-semibold text-white mb-1">
            Tidak menemukan jawaban yang dicari?
          </h2>
          <p className="text-sm text-white/60">
            Tim kami siap membantu melalui telepon atau WhatsApp
          </p>
        </div>
        <div className="flex gap-2.5 shrink-0">
          <a
            href="tel:0267xxxxxx"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold bg-white hover:bg-cyan-50 transition"
            style={{ color: "#064E5C" }}
          >
            <Phone size={14} />
            (0267) xxx-xxx
          </a>
          <a
            href="https://wa.me/628xxxxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition"
            style={{
              background: "rgba(255,255,255,.15)",
              color: "#fff",
              border: "0.5px solid rgba(255,255,255,.25)",
            }}
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
