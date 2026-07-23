"use client";

import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
  FileText,
  Download,
  Users,
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { archivesItems, unsurItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Button } from "#components/ui/button.tsx";

export default function IndexKepuasanPage() {
  // Ambil laporan terbaru untuk summary hero (misal data index 0)
  const latestReport = useMemo(() => archivesItems[0], []);

  // Variant badge color helper
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "teal":
        return {
          bg: "bg-teal-500/10 dark:bg-teal-500/20",
          border: "border-teal-500/30",
          text: "text-teal-700 dark:text-teal-300",
          badge: "bg-teal-500 text-white",
          button: "hover:bg-teal-500/10 hover:text-teal-700",
        };
      case "blue":
        return {
          bg: "bg-blue-500/10 dark:bg-blue-500/20",
          border: "border-blue-500/30",
          text: "text-blue-700 dark:text-blue-300",
          badge: "bg-blue-500 text-white",
          button: "hover:bg-blue-500/10 hover:text-blue-700",
        };
      default:
        return {
          bg: "bg-slate-500/10 dark:bg-slate-500/20",
          border: "border-slate-500/30",
          text: "text-slate-700 dark:text-slate-300",
          badge: "bg-slate-600 text-white",
          button: "hover:bg-slate-500/10 hover:text-slate-700",
        };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-border/60 bg-linear-to-b from-primary/5 via-background to-background py-14 lg:py-20">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Header Text */}
            <div className="lg:col-span-7">
              <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Link to="/" className="transition-colors hover:text-primary">
                  Beranda
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-semibold text-foreground">
                  Indeks Kepuasan Masyarakat
                </span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Transparansi & Evaluasi Layanan</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Indeks Kepuasan Masyarakat (IKM)
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Laporan penilaian dan tingkat kepuasan masyarakat terhadap mutu serta transparansi pelayanan publik yang diselenggarakan oleh {HOSPITAL.name}.
              </p>
            </div>

            {/* Quick Highlight Card */}
            {latestReport && (
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Capaian Terbaru
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-extrabold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                      Mutu: {latestReport.mutu}
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-5xl font-black tracking-tight text-primary sm:text-6xl">
                      {latestReport.score}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      / 100 (Kategori Baik)
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-extrabold text-foreground">
                    {latestReport.title}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border/60 pt-4 text-xs">
                    <div>
                      <span className="text-muted-foreground block">Periode Survei</span>
                      <strong className="font-bold text-foreground">{latestReport.period}</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Jumlah Responden</span>
                      <strong className="font-bold text-foreground">{latestReport.respondents.toLocaleString()} Orang</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. BREAKDOWN 9 UNSUR PELAYANAN                                */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Nilai Per Indikator (Skala 4.00)</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Evaluasi 9 Unsur Pelayanan
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Rincian nilai rata-rata dari 9 unsur pelayanan publik berdasarkan hasil survei kepada pasien dan pengunjung.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {unsurItems.map((item) => {
              // Nilai maksimal standar IKM Permenpan RB adalah 4.00
              const percentage = Math.min((item.value / 4.0) * 100, 100);

              return (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-foreground">
                      {item.label}
                    </h3>
                    <span className="rounded-xl bg-primary/10 px-2.5 py-1 text-xs font-black text-primary">
                      {item.value.toFixed(2)}
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="mt-4 space-y-1.5">
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500 group-hover:bg-primary/80"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
                      <span>0.00</span>
                      <span>Target: 4.00</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. ARCHIVES REPORT SECTION (DOWNLOAD PDF)                     */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 bg-muted/20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary mb-3">
              <FileText className="h-3.5 w-3.5" />
              <span>Dokumen Resmi</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Arsip Laporan IKM
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Unduh berkas laporan resmi Indeks Kepuasan Masyarakat dalam format PDF dari periode ke periode.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {archivesItems.map((arch) => {
              const styles = getVariantStyles(arch.variant);

              return (
                <div
                  key={arch.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:shadow-lg ${styles.bg} ${styles.border}`}
                >
                  <div>
                    {/* Card Header Badges */}
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full px-3 py-0.5 text-xs font-extrabold ${styles.badge}`}>
                        Mutu: {arch.mutu}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        {arch.respondents.toLocaleString()} Responden
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {arch.title}
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      Periode pelaksanaan: {arch.period}
                    </p>
                  </div>

                  {/* Card Footer Score & Action */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                    <div>
                      <span className="text-[11px] text-muted-foreground block font-medium">Nilai IKM</span>
                      <strong className="text-2xl font-black text-foreground">{arch.score}</strong>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className={`rounded-xl text-xs font-bold ${styles.button}`}
                    >
                      <a href={arch.href} download target="_blank" rel="noopener noreferrer">
                        <Download className="mr-1.5 h-3.5 w-3.5" />
                        Unduh PDF
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. COMMITMENT & ACTION FOOTER BANNER                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Komitmen Penyelenggara</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
                  Suara Anda Membentuk Kualitas Layanan Kami
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Seluruh hasil evaluasi IKM secara berkala ditindaklanjuti untuk perbaikan fasilitas, sarana, dan pelatihan SDM di {HOSPITAL.name}.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <Button asChild className="rounded-xl font-bold shadow-sm">
                  <Link to="/kontak">
                    Beri Masukan & Saran
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}