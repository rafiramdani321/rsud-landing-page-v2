import React, { useState } from "react";
import {
  BriefcaseBusiness,
  MapPin,
  Calendar,
  ChevronRight,
  Stethoscope,
  FlaskConical,
  Building2,
  HeartPulse,
  GraduationCap,
  Send,
  Check,
} from "lucide-react";
import HeroImage from "#/assets/rekrutmen/hero-image.jpg";
import type { CategoryRecruitment, JobItem } from "../../types";
import { JobItems } from "../../data/mockData";

const CATEGORIES: { label: CategoryRecruitment; icon: React.ReactNode }[] = [
  { label: "Semua", icon: <BriefcaseBusiness size={13} /> },
  { label: "Tenaga Medis", icon: <Stethoscope size={13} /> },
  { label: "Keperawatan", icon: <HeartPulse size={13} /> },
  { label: "Laboratorium", icon: <FlaskConical size={13} /> },
  { label: "Non Medis", icon: <Building2 size={13} /> },
  { label: "Magang", icon: <GraduationCap size={13} /> },
];

const STEPS = ["Lamaran", "Seleksi", "Tes", "Interview", "Pengumuman"];

const CATEGORY_STYLES: Record<
  Exclude<CategoryRecruitment, "Semua">,
  { tag: string; placeholder: string; icon: React.ReactNode }
> = {
  "Tenaga Medis": {
    tag: "bg-teal-50 text-teal-700",
    placeholder: "from-teal-50 to-teal-200",
    icon: <Stethoscope size={32} className="text-teal-600 opacity-50" />,
  },
  Keperawatan: {
    tag: "bg-violet-50 text-violet-700",
    placeholder: "from-violet-50 to-violet-200",
    icon: <HeartPulse size={32} className="text-violet-600 opacity-50" />,
  },
  Laboratorium: {
    tag: "bg-blue-50 text-blue-700",
    placeholder: "from-blue-50 to-blue-200",
    icon: <FlaskConical size={32} className="text-blue-600 opacity-50" />,
  },
  "Non Medis": {
    tag: "bg-amber-50 text-amber-700",
    placeholder: "from-amber-50 to-amber-200",
    icon: <Building2 size={32} className="text-amber-600 opacity-50" />,
  },
  Magang: {
    tag: "bg-pink-50 text-pink-700",
    placeholder: "from-pink-50 to-pink-200",
    icon: <GraduationCap size={32} className="text-pink-600 opacity-50" />,
  },
};

function JobCard({ job }: { job: JobItem }) {
  const style = CATEGORY_STYLES[job.category];
  return (
    <article className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group">
      <div
        className={`w-full h-24 bg-linear-to-br ${style.placeholder} flex items-center justify-center`}
      >
        {style.icon}
      </div>
      <div className="p-4">
        <span
          className={`inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full mb-3 ${style.tag}`}
        >
          {job.category}
        </span>
        <h3 className="font-semibold text-sm text-foreground mb-3 leading-snug">
          {job.title}
        </h3>
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="shrink-0" />
            {job.location}
          </div>
          <div className="flex items-center gap-1.5">
            <BriefcaseBusiness size={12} className="shrink-0" />
            {job.type}
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-1 mt-3 text-[11px] font-medium px-2 py-0.5 rounded-full ${
            job.deadlineSoon
              ? "bg-amber-50 text-amber-700"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          <Calendar size={10} />
          Batas: {job.deadline}
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <span className="text-[11px] text-muted-foreground bg-muted rounded-full px-2 py-0.5">
            {job.employmentType}
          </span>
          <button className="flex items-center gap-1 text-xs text-primary font-medium group-hover:underline">
            Lihat detail
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
}

const RekrutmenPage = () => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryRecruitment>("Semua");

  const filtered =
    activeCategory === "Semua"
      ? JobItems
      : JobItems.filter((j) => j.category === activeCategory);

  return (
    <div className="px-4 sm:px-10 lg:px-24 xl:px-40 py-10 space-y-8">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden min-h-65 flex items-end">
        <img
          src={HeroImage}
          alt="RSUD Karawang"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(6,78,92,0.97) 0%, rgba(10,120,140,0.88) 38%, rgba(14,152,170,0.5) 65%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 900 260"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line
              x1="380"
              y1="-20"
              x2="260"
              y2="300"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="60"
            />
            <line
              x1="440"
              y1="-20"
              x2="320"
              y2="300"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="28"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-end lg:items-center justify-between gap-6 px-8 md:px-14 py-10">
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/50 font-medium mb-2">
              RSUD Karawang · Rekrutmen
            </p>
            <h1 className="text-3xl font-extrabold text-white leading-tight mb-3">
              Bergabung dan <span className="text-cyan-300">wujudkan</span>
              <br />
              layanan kesehatan terbaik
            </h1>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed mb-6">
              Kami mencari tenaga kesehatan dan profesional non-medis yang
              berdedikasi untuk melayani masyarakat Karawang.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-[#064E5C] rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-cyan-50 transition">
              <BriefcaseBusiness size={15} />
              Lihat semua lowongan
            </button>
          </div>

          <div className="flex lg:flex-col gap-3">
            {[
              { value: "25+", label: "Lowongan aktif" },
              { value: "8", label: "Divisi kerja" },
              { value: "120+", label: "Pegawai" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-center min-w-25"
              >
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="grid lg:grid-cols-[220px_1fr] gap-6">
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold mb-4">Kategori</h3>
            <div className="space-y-1">
              {CATEGORIES.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={`w-full flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                    activeCategory === label
                      ? "bg-teal-50 text-teal-700 font-medium"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold mb-3">Status deadline</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                Masih dibuka
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                Segera berakhir
              </div>
            </div>
          </div>
        </aside>

        <main>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">Lowongan tersedia</h2>
            <span className="text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">
              {filtered.length} posisi
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
              {filtered.map((job) => (
                <JobCard key={job.title} job={job} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground text-sm">
              Tidak ada lowongan untuk kategori ini saat ini.
            </div>
          )}
        </main>
      </section>

      {/* Bottom */}
      <section className="grid lg:grid-cols-2 gap-5">
        {/* Recruitment steps */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-bold text-base mb-6">Tahapan rekrutmen</h3>
          <div className="flex justify-between items-start">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className="flex flex-col items-center text-center flex-1 relative"
              >
                {i < STEPS.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-full h-px bg-border" />
                )}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold relative z-10 ${
                    i === 0
                      ? "bg-teal-600 text-white"
                      : "bg-teal-50 text-teal-700 border border-teal-200"
                  }`}
                >
                  {i === 0 ? <Check size={14} /> : i + 1}
                </div>
                <span className="text-[11px] text-muted-foreground mt-2 leading-tight">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA card */}
        <div
          className="rounded-2xl p-6 flex flex-col justify-between"
          style={{ background: "#064E5C" }}
        >
          <div>
            <h3 className="font-bold text-base text-white">
              Belum ada posisi yang cocok?
            </h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              Kirim CV Anda dan kami akan menghubungi jika ada kesempatan yang
              relevan di masa mendatang.
            </p>
          </div>
          <button className="mt-5 inline-flex items-center gap-2 bg-white text-[#064E5C] rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-cyan-50 transition w-fit">
            <Send size={14} />
            Kirim CV sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default RekrutmenPage;
