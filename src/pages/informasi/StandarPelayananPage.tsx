"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
  Scale,
  FileText,
  Clock,
  Download,
  ShieldCheck,
} from "lucide-react";
import { dasarHukumStandarPelayananItems, UnitsItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Button } from "#components/ui/button.tsx";

export default function StandarPelayananPage() {
  // State untuk Tab Unit Aktif
  const [activeUnitKey, setActiveUnitKey] = useState<string>(UnitsItems[0].key);

  // Cari unit item berdasarkan key
  const activeUnit = UnitsItems.find((u) => u.key === activeUnitKey) || UnitsItems[0];

  // Helper untuk menentukan gaya badge waktu
  const getWaktuVariantStyles = (variant: string) => {
    switch (variant) {
      case "red":
        return "bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 border-rose-500/30";
      case "amber":
        return "bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border-amber-500/30";
      case "blue":
        return "bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 border-blue-500/30";
      case "teal":
      default:
        return "bg-teal-500/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-400 border-teal-500/30";
    }
  };

  // Helper untuk menentukan gaya badge fitur
  const getBadgeVariantStyles = (variant: string) => {
    switch (variant) {
      case "red":
        return "bg-rose-500/10 text-rose-600";
      case "amber":
        return "bg-amber-500/10 text-amber-600";
      case "blue":
        return "bg-blue-500/10 text-blue-600";
      case "purple":
        return "bg-purple-500/10 text-purple-600";
      case "teal":
      default:
        return "bg-teal-500/10 text-teal-600";
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
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Beranda
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-semibold text-foreground">
                Standar Pelayanan
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Pedoman Operasional Layanan Publik</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Standar Pelayanan
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tolok ukur pedoman penyelenggaraan pelayanan dan acuan penilaian kualitas layanan sebagai komitmen {HOSPITAL.name} kepada masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. DASAR HUKUM SECTION                                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Scale className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-extrabold text-foreground">
              Dasar Hukum & Landasan Regulasi
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dasarHukumStandarPelayananItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div
                  className="inline-flex rounded-xl px-3 py-1 text-xs font-extrabold text-white mb-3"
                  style={{ backgroundColor: item.color }}
                >
                  {item.title}
                </div>
                <p className="text-xs font-medium leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. UNITS INTERACTIVE TABS & SERVICE ITEMS                      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Unit Tabs Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {UnitsItems.map((unit) => {
              const isActive = activeUnitKey === unit.key;
              return (
                <button
                  key={unit.key}
                  onClick={() => setActiveUnitKey(unit.key)}
                  className={`flex shrink-0 items-center gap-2.5 rounded-2xl px-4 py-3 text-xs font-extrabold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                      : "bg-card border border-border/80 text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-xl transition-colors"
                    style={{
                      backgroundColor: isActive ? "rgba(255,255,255,0.2)" : unit.iconBg,
                      color: isActive ? "#ffffff" : unit.iconColor,
                    }}
                  >
                    {unit.icon}
                  </span>
                  <span>{unit.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Unit Info Banner */}
          <div className="mt-8 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: activeUnit.iconBg, color: activeUnit.iconColor }}
              >
                {activeUnit.icon}
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-foreground">
                  {activeUnit.label}
                </h2>
                <p className="text-xs font-medium text-muted-foreground">
                  {activeUnit.sub}
                </p>
              </div>
            </div>

            {/* Items Grid for Active Unit */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {activeUnit.items.map((srv) => (
                <div
                  key={srv.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    {/* Item Title & Time Badge */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                        {srv.title}
                      </h3>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold shrink-0 ${getWaktuVariantStyles(
                          srv.waktuVariant
                        )}`}
                      >
                        <Clock className="h-3.5 w-3.5" />
                        {srv.waktu}
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {srv.description}
                    </p>

                    {/* Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {srv.badges.map((b) => (
                        <span
                          key={b.label}
                          className={`rounded-xl px-2.5 py-1 text-[11px] font-extrabold ${getBadgeVariantStyles(
                            b.variant
                          )}`}
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PDF Download Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground font-medium">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                      Dokumen SOP Resmi
                    </span>

                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="h-8 rounded-xl text-xs font-semibold text-primary hover:bg-primary/10"
                    >
                      <a href={srv.pdfHref} download target="_blank" rel="noopener noreferrer">
                        <Download className="mr-1.5 h-3.5 w-3.5" />
                        Unduh SK / SOP
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banner Integritas */}
          <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Jaminan Standar Mutu Pelayanan</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
                  Pelayanan Sesuai Prosedur & Bebas Pungli
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Apabila Anda mendapati pelayanan yang tidak sesuai dengan standar waktu di atas, silakan sampaikan keluhan Anda ke saluran pengaduan resmi.
                </p>
              </div>

              <Button asChild className="rounded-xl font-bold shadow-sm shrink-0">
                <Link to="/maklumat-pelayanan">Lihat Maklumat Pelayanan</Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}