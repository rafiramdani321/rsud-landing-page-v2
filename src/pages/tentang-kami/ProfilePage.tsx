import {
  Hospital,
  Eye,
  Target,
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  Map,
  ShieldCheck,
  Calendar,
  NotebookText,
} from "lucide-react";
import type { StatProfileItem } from "../../types";
import {
  nilaiProfileItems,
  PimpinanProfileItems,
  TimelineProfileItems,
} from "../../data/mockData";

const STATS: StatProfileItem[] = [
  { value: "450+", label: "Tempat tidur" },
  { value: "28", label: "Spesialis & subspesialis" },
  { value: "1.200+", label: "Tenaga kesehatan" },
  { value: "24 jam", label: "Layanan IGD", highlight: true },
];

const MISI = [
  "Meningkatkan mutu dan keselamatan pasien secara berkelanjutan",
  "Menyediakan SDM kesehatan yang profesional dan berempati",
  "Mengembangkan sarana prasarana berbasis teknologi terkini",
  "Menyelenggarakan tata kelola rumah sakit yang transparan",
  "Memperkuat kemitraan dengan faskes dan komunitas",
];

const HERO_BADGES = [
  { icon: <NotebookText size={12} />, text: "Akreditasi Paripurna" },
  { icon: <ShieldCheck size={12} />, text: "Terakreditasi KARS 2023" },
  { icon: <Star size={12} />, text: "Kelas B" },
  { icon: <Calendar size={12} />, text: "Berdiri sejak 1937" },
];

const ProfilePage = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-24 xl:px-40 py-10 space-y-8">
      {/* Hero */}
      <section
        className="relative rounded-3xl overflow-hidden flex flex-col justify-end p-10 md:p-14 min-h-55"
        style={{ background: "#064E5C" }}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300,
            height: 300,
            right: -80,
            top: -100,
            background: "rgba(255,255,255,.06)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 160,
            height: 160,
            left: 200,
            bottom: -60,
            background: "rgba(255,255,255,.04)",
          }}
        />

        <div className="relative z-10 flex items-center gap-6 mb-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-white/80"
            style={{
              background: "rgba(255,255,255,.12)",
              border: "0.5px solid rgba(255,255,255,.2)",
            }}
          >
            <Hospital size={30} />
          </div>
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/45 font-medium mb-1">
              Profil Rumah Sakit
            </p>
            <h1 className="text-2xl font-extrabold text-white leading-snug">
              Rumah Sakit Umum Daerah{" "}
              <span className="text-cyan-300">Karawang</span>
            </h1>
            <p className="text-xs text-white/55 mt-0.5">
              Jl. Galuh Mas No. 1, Kabupaten Karawang, Jawa Barat · Kelas B
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {HERO_BADGES.map((b) => (
            <span
              key={b.text}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium rounded-full px-3 py-1.5"
              style={{
                background: "rgba(255,255,255,.10)",
                border: "0.5px solid rgba(255,255,255,.18)",
                color: "rgba(255,255,255,.75)",
              }}
            >
              {b.icon}
              {b.text}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {STATS.map((s) => (
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
              className="text-xs mt-1 leading-snug"
              style={{
                color: s.highlight ? "#085041" : "var(--color-text-secondary)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Visi Misi */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div
          className="rounded-2xl p-6 flex flex-col gap-4"
          style={{ background: "#064E5C" }}
        >
          <div style={{ color: "#7FE8F0" }}>
            <Eye size={24} />
          </div>
          <div>
            <p
              className="text-[11px] tracking-widest uppercase font-medium mb-2"
              style={{ color: "rgba(255,255,255,.45)" }}
            >
              Visi
            </p>
            <h2 className="text-base font-semibold text-white leading-snug mb-3">
              Menjadi rumah sakit rujukan regional yang unggul, mandiri, dan
              berkeadilan
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,.6)" }}
            >
              Terwujud pada tahun 2028 dengan layanan berkualitas tinggi yang
              dapat diakses oleh seluruh masyarakat Karawang dan sekitarnya.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
          <div className="text-teal-600">
            <Target size={24} />
          </div>
          <div>
            <p className="text-[11px] tracking-widest uppercase font-medium text-teal-700 mb-2">
              Misi
            </p>
            <h2 className="text-base font-semibold text-foreground leading-snug mb-4">
              Lima pilar layanan unggulan kami
            </h2>
            <ul className="space-y-2.5">
              {MISI.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                >
                  <Check size={14} className="text-teal-600 shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Nilai Utama */}
      <section>
        <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mb-4">
          Nilai utama
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {nilaiProfileItems.map((n) => (
            <div
              key={n.title}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <div className="mb-2" style={{ color: n.iconColor }}>
                {n.icon}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {n.title}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {n.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sejarah */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-sm font-semibold text-foreground mb-6">
          Sejarah singkat
        </h2>
        <div className="flex flex-col">
          {TimelineProfileItems.map((item) => (
            <div
              key={item.year}
              className="grid grid-cols-[80px_1fr] gap-4 relative pb-5 last:pb-0"
            >
              {!item.isLast && (
                <div
                  className="absolute"
                  style={{
                    left: 37,
                    top: 28,
                    bottom: 0,
                    width: 1,
                    background: "var(--color-border-tertiary)",
                  }}
                />
              )}

              <div className="text-xs font-semibold text-teal-700 text-right pt-0.5">
                {item.year}
              </div>

              <div className="relative pl-6">
                <div
                  className="absolute rounded-full"
                  style={{
                    left: 0,
                    top: 4,
                    width: 10,
                    height: 10,
                    background: item.isLast ? "#064E5C" : "#1D9E75",
                    border: "2px solid var(--color-background-primary)",
                  }}
                />
                <div className="text-sm font-semibold text-foreground mb-0.5">
                  {item.event}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pimpinan */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-sm font-semibold text-foreground mb-4">
          Pimpinan rumah sakit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PimpinanProfileItems.map((p) => (
            <div
              key={p.initials}
              className="rounded-xl p-4 text-center"
              style={{ background: "var(--color-background-secondary)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold mx-auto mb-3"
                style={{ background: p.avatarBg, color: p.avatarColor }}
              >
                {p.initials}
              </div>
              <div className="text-sm font-semibold text-foreground leading-snug">
                {p.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{p.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section
        className="rounded-2xl p-6 md:p-8 grid sm:grid-cols-[1fr_auto] gap-6 items-center"
        style={{ background: "#064E5C" }}
      >
        <div>
          <h2 className="text-base font-semibold text-white mb-1">
            Hubungi kami
          </h2>
          <p className="text-sm text-white/60">
            Kami siap membantu pertanyaan dan kebutuhan Anda
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              { icon: <Phone size={13} />, text: "(0267) xxx-xxx" },
              { icon: <Mail size={13} />, text: "info@rsudkarawang.id" },
              { icon: <MapPin size={13} />, text: "Jl. Galuh Mas No. 1" },
            ].map((k) => (
              <span
                key={k.text}
                className="inline-flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(255,255,255,.7)" }}
              >
                <span style={{ color: "rgba(255,255,255,.45)" }}>{k.icon}</span>
                {k.text}
              </span>
            ))}
          </div>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold bg-white hover:bg-cyan-50 transition shrink-0"
          style={{ color: "#064E5C" }}
        >
          <Map size={15} />
          Lihat peta
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
