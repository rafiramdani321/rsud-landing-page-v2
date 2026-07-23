import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
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
      const frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
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

const heroContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

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
    <motion.div
      variants={heroItemVariants}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-border/60 bg-card/60 p-4 transition-colors duration-300 hover:border-primary/30 hover:bg-card hover:shadow-md backdrop-blur-sm"
    >
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <stat.icon className="h-4 w-4" aria-hidden="true" />
        </motion.div>
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
    </motion.div>
  );
}

export function Hero() {
  const [tab, setTab] = useState<Tab>("doctor");
  const [slide, setSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDListElement>(null);
  const prefersReducedMotion = useReducedMotion();

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
    if (prefersReducedMotion) return;
    const id = setInterval(
      () => setSlide((s) => (s + 1) % HERO_IMAGES.length),
      5000,
    );
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-6 lg:pt-10"
    >
      {/* Dynamic Background Accents */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion ? undefined : { x: [0, 24, 0], y: [0, -16, 0] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 right-0 h-125 w-125 rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion ? undefined : { x: [0, -20, 0], y: [0, 20, 0] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
          <motion.div
            className="lg:col-span-7"
            variants={heroContainerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary/10"
            >
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Terakreditasi Paripurna KARS &middot; Sejak 1998</span>
            </motion.div>

            <motion.h1
              variants={heroItemVariants}
              className="mt-5 text-pretty text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl/tight"
            >
              Pelayanan Kesehatan{" "}
              <span className="relative inline-block text-primary">
                Terpercaya
                <motion.svg
                  className="absolute -bottom-2 left-0 h-2 w-full text-primary/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M0 15 Q 50 0 100 15"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.svg>
              </span>{" "}
              Untuk Keluarga Anda
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Memberikan standar medis tertinggi berbasis teknologi mutakhir,
              ditangani oleh tim spesialis berpengalaman untuk masyarakat
              Karawang dan sekitarnya.
            </motion.p>

            <motion.div
              variants={heroItemVariants}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl px-6 text-sm font-semibold shadow-md shadow-primary/20 transition-shadow duration-200 hover:shadow-lg hover:shadow-primary/30"
                >
                  <a href="#book" className="flex items-center gap-2">
                    <span>Buat Janji Temu</span>
                    <motion.span
                      className="inline-flex"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-border/80 bg-background/50 px-6 text-sm font-semibold backdrop-blur-sm transition-colors duration-200 hover:bg-accent"
                >
                  <a href="#doctors" className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-muted-foreground" />
                    <span>Cari Dokter</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.dl
              ref={statsRef}
              variants={heroContainerVariants}
              className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 lg:max-w-xl"
              initial="hidden"
              animate={statsVisible ? "show" : "hidden"}
            >
              {STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={i}
                  visible={statsVisible}
                />
              ))}
            </motion.dl>
          </motion.div>

          {/* Right Column: Hero Visual Stack */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Background Decorative Layer */}
            <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-primary/20 via-secondary/10 to-transparent blur-xl" />

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative rounded-2xl border border-border/60 bg-card p-2 shadow-2xl"
            >
              <div className="group relative aspect-4/3 overflow-hidden rounded-xl bg-muted sm:aspect-14/10">
                <AnimatePresence mode="sync">
                  {HERO_IMAGES.map(
                    (img, i) =>
                      i === slide && (
                        <motion.img
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          width={720}
                          height={560}
                          initial={{ opacity: 0, scale: 1.06 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ),
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {HERO_IMAGES.length > 1 && (
                  <>
                    <motion.button
                      type="button"
                      aria-label="Previous image"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setSlide(
                          (s) =>
                            (s - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-background"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      type="button"
                      aria-label="Next image"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setSlide((s) => (s + 1) % HERO_IMAGES.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-background"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                  </>
                )}
              </div>
            </motion.div>

            {/* Overlapping Badge 1: Live Pulse IGD */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                y: prefersReducedMotion ? 0 : [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 },
                x: { duration: 0.5, delay: 0.6 },
                y: {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1,
                },
              }}
              className="absolute -left-4 -top-4 hidden rounded-2xl border border-border/80 bg-background/90 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <Activity className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-destructive" />
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">
                  IGD Siaga 24/7
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Respon Cepat Tanggap
                </p>
              </div>
            </motion.div>

            {/* Overlapping Badge 2: Rating/Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{
                opacity: 1,
                x: 0,
                y: prefersReducedMotion ? 0 : [0, 6, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.75 },
                x: { duration: 0.5, delay: 0.75 },
                y: {
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.3,
                },
              }}
              className="absolute -bottom-5 -right-2 hidden items-center gap-3 rounded-2xl border border-border/80 bg-background/90 p-3 shadow-xl backdrop-blur-md sm:flex"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary ring-2 ring-background">
                  4.9
                </span>
              </div>
              <div className="border-l border-border pl-3">
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.9 + i * 0.08,
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Star
                        className="h-3 w-3 fill-current"
                        aria-hidden="true"
                      />
                    </motion.span>
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-muted-foreground">
                  12.400+ Pasien Terlayani
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Quick Search Hub */}
        <motion.div
          className="mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-3xl border border-border/80 bg-card/80 p-4 shadow-xl backdrop-blur-xl md:p-6">
            {/* Segmented Control Tabs */}
            <div
              className="relative inline-flex w-full flex-wrap gap-1.5 rounded-2xl bg-muted/60 p-1.5 sm:w-auto"
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
                    className="relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-colors duration-200 sm:flex-none sm:text-sm"
                  >
                    {active && (
                      <motion.span
                        layoutId="tab-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className={`absolute inset-0 rounded-xl shadow-sm ${
                          t.id === "emergency"
                            ? "bg-destructive"
                            : "bg-background"
                        }`}
                      />
                    )}
                    <span
                      className={`relative z-10 flex items-center gap-2 ${
                        active
                          ? t.id === "emergency"
                            ? "text-destructive-foreground"
                            : "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <t.icon
                        className={`h-4 w-4 ${active && t.id !== "emergency" ? "text-primary" : ""}`}
                        aria-hidden="true"
                      />
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab Form Containers */}
            <div className="mt-4 overflow-hidden">
              <AnimatePresence mode="wait">
                {tab === "doctor" && (
                  <motion.form
                    key="doctor"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
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
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        type="submit"
                        className="h-11 w-full rounded-xl px-6 font-semibold shadow-sm"
                      >
                        <Search className="mr-1.5 h-4 w-4" aria-hidden="true" />
                        Cari Dokter
                      </Button>
                    </motion.div>
                  </motion.form>
                )}

                {tab === "schedule" && (
                  <motion.form
                    key="schedule"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
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
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        type="submit"
                        className="h-11 w-full rounded-xl px-6 font-semibold shadow-sm"
                      >
                        <CalendarDays
                          className="mr-1.5 h-4 w-4"
                          aria-hidden="true"
                        />
                        Cek Jadwal
                      </Button>
                    </motion.div>
                  </motion.form>
                )}

                {tab === "emergency" && (
                  <motion.div
                    key="emergency"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-destructive/10 p-4 border border-destructive/20 md:flex-row md:items-center"
                  >
                    <div className="flex items-center gap-3.5">
                      <motion.span
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : { scale: [1, 1.08, 1] }
                        }
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive text-destructive-foreground shadow-md shadow-destructive/30"
                      >
                        <Siren className="h-5 w-5" aria-hidden="true" />
                      </motion.span>
                      <div>
                        <p className="font-bold text-foreground">
                          Butuh Penanganan Medis Darurat?
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Layanan IGD & Ambulans RSUD Karawang siap siaga 24 jam
                          nonstop.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full md:w-auto"
                    >
                      <Button
                        asChild
                        variant="destructive"
                        size="lg"
                        className="w-full h-11 rounded-xl font-bold shadow-md shadow-destructive/20 md:w-auto"
                      >
                        href={HOSPITAL.emergencyPhoneHref}
                        className="flex items-center gap-2"
                        <a>
                          <PhoneCall className="h-4 w-4" />
                          <span>Hubungi IGD: {HOSPITAL.emergencyPhone}</span>
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
