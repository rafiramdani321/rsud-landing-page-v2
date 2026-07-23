"use client";

import { Link } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
  Award,
  Users,
  Target,
  Compass,
  History,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL } from "../../libs/hospital-data";
import { nilaiProfileItems, PimpinanProfileItems, TimelineProfileItems } from "../../data/mockData";
import { Button } from "#components/ui/button.tsx";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-border/60 bg-linear-to-b from-primary/5 via-background to-background py-14 lg:py-20">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Beranda
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-semibold text-foreground">
                Profil Rumah Sakit
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Tentang Kami</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Profil {HOSPITAL.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pusat rujukan pelayanan kesehatan terdepan di Kabupaten Karawang yang berkomitmen memberikan layanan medis yang bermutu, aman, profesional, dan berorientasi pada kepuasan pasien.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. VISI & MISI SECTION                                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Card Visi */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 via-card to-card p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">
                Visi
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-foreground/90">
                "Menjadi Rumah Sakit Rujukan Utama yang Unggul, Modern, dan Terpercaya dalam Pelayanan Kesehatan bagi Masyarakat Karawang dan Sekitarnya."
              </p>
            </div>

            {/* Card Misi */}
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">
                Misi
              </h2>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Menyelenggarakan pelayanan kesehatan paripurna yang bermutu tinggi dan mengutamakan keselamatan pasien.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Meningkatkan kualitas sumber daya manusia medis dan non-medis secara berkelanjutan dan profesional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Mengembangkan sarana, prasarana, serta sarana teknologi kesehatan terkini.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Mewujudkan tata kelola rumah sakit yang transparan, akuntabel, dan berintegritas tinggi.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. CORE VALUES / NILAI-NILAI ORGANISASI                      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Budaya Organisasi</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Nilai-Nilai Utama Pelayanan
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Prinsip dan nilai dasar yang melandasi setiap insan tenaga medis dan staf {HOSPITAL.name} dalam bertugas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nilaiProfileItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.iconColor}15`,
                    color: item.iconColor,
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. JAJARAN PIMPINAN                                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary mb-3">
              <Users className="h-3.5 w-3.5" />
              <span>Manajemen & Direksi</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Jajaran Pimpinan
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Tim kepemimpinan berpengalaman yang mengarahkan visi dan mutu operasional rumah sakit.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {PimpinanProfileItems.map((leader) => (
              <div
                key={leader.role}
                className="group relative flex flex-col items-center rounded-3xl border border-border/80 bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                {/* Initial Avatar */}
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full text-xl font-black shadow-inner"
                  style={{
                    backgroundColor: leader.avatarBg,
                    color: leader.avatarColor,
                  }}
                >
                  {leader.initials}
                </div>

                <h3 className="mt-4 text-base font-extrabold text-foreground">
                  {leader.name}
                </h3>

                <p className="mt-1 text-xs font-semibold text-primary">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. TIMELINE SEJARAH                                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
              <History className="h-3.5 w-3.5" />
              <span>Rekam Jejak Sejarah</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Perjalanan Kami
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Sejarah dan tonggak penting peningkatkan mutu pelayanan {HOSPITAL.name} dari masa ke masa.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-10">
            {TimelineProfileItems.map((item) => (
              <div key={item.year} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-7.75 sm:-left-9.75 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors">
                  <div className="h-2 w-2 rounded-full bg-primary group-hover:bg-background" />
                </div>

                {/* Timeline Content */}
                <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all group-hover:border-primary/40">
                  <span className="inline-block rounded-xl bg-primary/10 px-3 py-1 text-xs font-black text-primary">
                    Tahun {item.year}
                  </span>

                  <h3 className="mt-3 text-lg font-extrabold text-foreground">
                    {item.event}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Akreditasi Paripurna KARS</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
                  Siap Melayani Anda Sepenuh Hati
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Dapatkan informasi lebih lanjut mengenai jadwal dokter dan fasilitas pelayanan kami.
                </p>
              </div>

              <Button asChild className="rounded-xl font-bold shadow-sm shrink-0">
                <Link to="/jadwal-dokter">Lihat Jadwal Dokter</Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}