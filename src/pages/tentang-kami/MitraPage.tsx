import { ExternalLink, Mail } from "lucide-react";
import type { MitraKamiItem } from "../../types";
import { mitraKamiItems } from "../../data/mockData";

function MitraCard({ mitra }: { mitra: MitraKamiItem }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold shrink-0 tracking-wide"
          style={{ background: mitra.avatarBg, color: mitra.avatarColor }}
        >
          {mitra.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground leading-snug">
            {mitra.name}
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {mitra.category}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed flex-1">
        {mitra.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {mitra.tags.map((tag) => (
          <span
            key={tag.label}
            className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
            style={{ background: tag.bg, color: tag.color }}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
          Aktif
        </span>
        <a
          href={mitra.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-teal-700 hover:underline"
        >
          <ExternalLink size={12} />
          {mitra.websiteLabel}
        </a>
      </div>
    </article>
  );
}

const MitraPage = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-24 xl:px-40 py-10 space-y-8">
      {/* Hero */}
      <section
        className="relative rounded-3xl bg-primary overflow-hidden p-10 md:p-14"
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
            width: 140,
            height: 140,
            right: 230,
            bottom: -55,
            background: "rgba(255,255,255,.04)",
          }}
        />
        <div className="relative z-10">
          <p className="text-[11px] tracking-widest uppercase text-white/45 font-medium mb-2">
            RSUD Karawang · Tentang Kami
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3">
            Mitra <span className="text-cyan-300">terpercaya</span> kami
          </h1>
          <p className="text-sm text-white/60 leading-relaxed max-w-lg">
            RSUD Karawang bekerja sama dengan berbagai institusi asuransi dan
            layanan kesehatan untuk memastikan akses pelayanan terbaik bagi
            seluruh pasien.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "5", label: "Mitra aktif", highlight: false },
          { value: "3", label: "Jenis layanan", highlight: false },
          { value: "Aktif", label: "Status kerja sama", highlight: true },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4 text-center"
            style={{
              background: s.highlight
                ? "#E1F5EE"
                : "var(--color-background-secondary)",
            }}
          >
            <div
              className="text-2xl font-semibold"
              style={{
                color: s.highlight ? "#0F6E56" : "var(--color-text-primary)",
              }}
            >
              {s.value}
            </div>
            <div
              className="text-xs mt-1"
              style={{
                color: s.highlight ? "#085041" : "var(--color-text-secondary)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <section>
        <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mb-4">
          Mitra kerja sama
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mitraKamiItems.map((m) => (
            <MitraCard key={m.name} mitra={m} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ background: "#064E5C" }}
      >
        <div>
          <h2 className="text-base font-semibold text-white mb-1">
            Ingin bermitra dengan kami?
          </h2>
          <p className="text-sm text-white/60">
            Hubungi tim kerja sama untuk informasi lebih lanjut
          </p>
        </div>
        <a
          href="mailto:kerjasama@rsudkarawang.id"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold bg-white hover:bg-cyan-50 transition shrink-0"
          style={{ color: "#064E5C" }}
        >
          <Mail size={15} />
          Hubungi kami
        </a>
      </section>
    </div>
  );
};

export default MitraPage;
