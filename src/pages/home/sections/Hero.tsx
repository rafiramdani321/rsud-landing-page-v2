"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  Stethoscope,
  CalendarDays,
  Siren,
  ShieldCheck,
  Clock,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Activity,
  PhoneCall,
} from "lucide-react";
import { POLICLINICS, WEEKDAYS, HOSPITAL } from "#/libs/hospital-data.ts";
import { Button } from "#/components/ui/button.tsx";
import rsudHeroImage from "#/assets/images/rsud_karawang.png";

type Tab = "doctor" | "schedule" | "emergency";

const TABS: { id: Tab; label: string; icon: typeof Search }[] = [
  { id: "doctor", label: "Cari Dokter", icon: Stethoscope },
  { id: "schedule", label: "Jadwal Poliklinik", icon: CalendarDays },
  { id: "emergency", label: "Gawat Darurat", icon: Siren },
];

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background/80 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20";

const HERO_IMAGES: { src: string; alt: string }[] = [
  {
    src: rsudHeroImage,
    alt: "Gedung Utama RSUD Karawang",
  },
];

const STATS = [
  { icon: Clock, value: 24, suffix: "/7", label: "Layanan IGD Siaga" },
  { icon: Stethoscope, value: 120, suffix: "+", label: "Dokter Spesialis" },
  { icon: Award, value: 25, suffix: "+", label: "Tahun Dedikasi" },
];

function useCountUp(target: number, active: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs]);

  return value;
}

function StatCard({
  stat,
  index,
  visible,
}: {
  stat: (typeof STATS)[number];
  index: number;
  visible: boolean;
}) {
  const count = useCountUp(stat.value, visible, 1000 + index * 150);
  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-md backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <stat.icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <dt className="text-xl font-bold tabular-nums tracking-tight text-foreground md:text-2xl">
            {count}
            <span className="text-primary">{stat.suffix}</span>
          </dt>
          <dd className="text-xs font-medium text-muted-foreground">
            {stat.label}
          </dd>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [tab, setTab] = useState<Tab>("doctor");
  const [slide, setSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;
    const id = setInterval(
      () => setSlide((s) => (s + 1) % HERO_IMAGES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-background pt-6 lg:pt-10">
      {/* Dynamic Background Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-125 w-125 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-25 top-1/2 h-87.5 w-87.5 rounded-full bg-secondary/10 blur-[100px]"
      />

      {/* Subtle Dot Pattern Grid Overlay */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary/10">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Terakreditasi Paripurna KARS &middot; Sejak 1998</span>
            </div>

            <h1 className="mt-5 text-pretty text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl/tight">
              Pelayanan Kesehatan{" "}
              <span className="relative inline-block text-primary">
                Terpercaya
                <svg
                  className="absolute -bottom-2 left-0 h-2 w-full text-primary/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>{" "}
              Untuk Keluarga Anda
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Memberikan standar medis tertinggi berbasis teknologi mutakhir, ditangani oleh tim spesialis berpengalaman untuk masyarakat Karawang dan sekitarnya.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl px-6 text-sm font-semibold shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                <a href="#book" className="flex items-center gap-2">
                  <span>Buat Janji Temu</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-border/80 bg-background/50 px-6 text-sm font-semibold backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
              >
                <a href="#doctors" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-muted-foreground" />
                  <span>Cari Dokter</span>
                </a>
              </Button>
            </div>

            {/* Stats Row */}
            <dl
              ref={statsRef}
              className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 lg:max-w-xl"
            >
              {STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={i}
                  visible={statsVisible}
                />
              ))}
            </dl>
          </div>

          {/* Right Column: Hero Visual Stack */}
          <div className="relative lg:col-span-5">
            {/* Background Decorative Layer */}
            <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-primary/20 via-secondary/10 to-transparent blur-xl" />

            <div className="relative rounded-2xl border border-border/60 bg-card p-2 shadow-2xl">
              <div className="group relative aspect-4/3 overflow-hidden rounded-xl bg-muted sm:aspect-14/10">
                {HERO_IMAGES.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={720}
                    height={560}
                    className={`h-full w-full object-cover transition-all duration-700 ease-out ${
                      i === slide ? "scale-100 opacity-100" : "absolute inset-0 scale-105 opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {HERO_IMAGES.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() =>
                        setSlide(
                          (s) => (s - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow-md backdrop-blur-md transition-all group-hover:opacity-100 hover:bg-background"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() => setSlide((s) => (s + 1) % HERO_IMAGES.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow-md backdrop-blur-md transition-all group-hover:opacity-100 hover:bg-background"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Overlapping Badge 1: Live Pulse IGD */}
            <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-border/80 bg-background/90 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <Activity className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-destructive" />
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">IGD Siaga 24/7</p>
                <p className="text-[11px] text-muted-foreground">Respon Cepat Tanggap</p>
              </div>
            </div>

            {/* Overlapping Badge 2: Rating/Reviews */}
            <div className="absolute -bottom-5 -right-2 hidden items-center gap-3 rounded-2xl border border-border/80 bg-background/90 p-3 shadow-xl backdrop-blur-md sm:flex">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary ring-2 ring-background">
                  4.9
                </span>
              </div>
              <div className="border-l border-border pl-3">
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-muted-foreground">
                  12.400+ Pasien Terlayani
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Quick Search Hub */}
        <div className="mt-12 lg:mt-16">
          <div className="rounded-3xl border border-border/80 bg-card/80 p-4 shadow-xl backdrop-blur-xl md:p-6">
            
            {/* Segmented Control Tabs */}
            <div
              className="inline-flex w-full flex-wrap gap-1.5 rounded-2xl bg-muted/60 p-1.5 sm:w-auto"
              role="tablist"
              aria-label="Quick search"
            >
              {TABS.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={active}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:flex-none sm:text-sm ${
                      active
                        ? t.id === "emergency"
                          ? "bg-destructive text-destructive-foreground shadow-sm"
                          : "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <t.icon className={`h-4 w-4 ${active && t.id !== "emergency" ? "text-primary" : ""}`} aria-hidden="true" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Form Containers */}
            <div className="mt-4">
              {tab === "doctor" && (
                <form
                  className="grid gap-3 md:grid-cols-[1fr_1fr_auto]"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label className="sr-only" htmlFor="doctor-name">
                    Nama Dokter
                  </label>
                  <input
                    id="doctor-name"
                    className={fieldClass}
                    placeholder="Ketik nama dokter..."
                  />
                  <label className="sr-only" htmlFor="doctor-specialty">
                    Spesialisasi
                  </label>
                  <select
                    id="doctor-specialty"
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Pilih Poliklinik / Spesialis
                    </option>
                    {POLICLINICS.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <Button type="submit" className="h-11 rounded-xl px-6 font-semibold shadow-sm">
                    <Search className="mr-1.5 h-4 w-4" aria-hidden="true" />
                    Cari Dokter
                  </Button>
                </form>
              )}

              {tab === "schedule" && (
                <form
                  className="grid gap-3 md:grid-cols-[1fr_1fr_auto]"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label className="sr-only" htmlFor="schedule-poli">
                    Poliklinik
                  </label>
                  <select
                    id="schedule-poli"
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Pilih Poliklinik
                    </option>
                    {POLICLINICS.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <label className="sr-only" htmlFor="schedule-day">
                    Hari
                  </label>
                  <select
                    id="schedule-day"
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Pilih Hari Praktik
                    </option>
                    {WEEKDAYS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <Button type="submit" className="h-11 rounded-xl px-6 font-semibold shadow-sm">
                    <CalendarDays className="mr-1.5 h-4 w-4" aria-hidden="true" />
                    Cek Jadwal
                  </Button>
                </form>
              )}

              {tab === "emergency" && (
                <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-destructive/10 p-4 border border-destructive/20 md:flex-row md:items-center">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive text-destructive-foreground shadow-md shadow-destructive/30">
                      <Siren className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground">
                        Butuh Penanganan Medis Darurat?
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Layanan IGD & Ambulans RSUD Karawang siap siaga 24 jam nonstop.
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="destructive"
                    size="lg"
                    className="w-full h-11 rounded-xl font-bold shadow-md shadow-destructive/20 md:w-auto"
                  >
                    <a href={HOSPITAL.emergencyPhoneHref} className="flex items-center gap-2">
                      <PhoneCall className="h-4 w-4" />
                      <span>Hubungi IGD: {HOSPITAL.emergencyPhone}</span>
                    </a>
                  </Button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}