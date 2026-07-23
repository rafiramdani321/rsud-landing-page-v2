"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  UserCheck,
  FileText,
  PenLine,
  Lock,
  HelpCircle,
  Receipt,
  HeartHandshake,
  ClipboardList,
  BadgeCheck,
  ClipboardCheck,
  Coins,
  Stethoscope,
  FileSignature,
  AlertTriangle,
  Ban,
  Sparkles,
  Info,
  CheckCircle2,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { hakPasienItems, kewajibanPasienItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Button } from "#components/ui/button.tsx";


// Helper Map untuk mengubah string icon nama dari data menjadi komponen Lucide Icon
const ICON_MAP: Record<string, LucideIcon> = {
  UserCheck,
  FileText,
  PenLine,
  Lock,
  HelpCircle,
  Receipt,
  HeartHandshake,
  ClipboardList,
  BadgeCheck,
  ClipboardCheck,
  Coins,
  Stethoscope,
  FileSignature,
  AlertTriangle,
  Ban,
};

export default function HakDanKewajibanPage() {
  const [activeTab, setActiveTab] = useState<"hak" | "kewajiban">("hak");

  const renderIcon = (iconName: string) => {
    const IconComponent = ICON_MAP[iconName] || Info;
    return <IconComponent className="h-6 w-6" />;
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
                Hak & Kewajiban Pasien
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Transparansi & Standar Pelayanan</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Hak dan Kewajiban Pasien
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Sesuai dengan Undang-Undang Kesehatan dan Peraturan Menteri Kesehatan RI, kami berkomitmen menjaga hak-hak Anda serta menciptakan hubungan kerja sama yang harmonis antara pasien dan tenaga medis.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. TAB CONTROLS & CONTENT SECTION                              */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Tab Switcher */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-2xl border border-border/80 bg-card p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab("hak")}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-extrabold transition-all sm:text-sm ${
                  activeTab === "hak"
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Hak Pasien ({hakPasienItems.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("kewajiban")}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-extrabold transition-all sm:text-sm ${
                  activeTab === "kewajiban"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Kewajiban Pasien ({kewajibanPasienItems.length})</span>
              </button>
            </div>
          </div>

          {/* Tab Description Header */}
          <div className="mt-8 text-center">
            {activeTab === "hak" ? (
              <p className="text-xs font-semibold text-primary sm:text-sm">
                Berikut adalah hak-hak yang dijamin untuk seluruh pasien selama mendapatkan layanan kesehatan di {HOSPITAL.name}:
              </p>
            ) : (
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 sm:text-sm">
                Berikut adalah kewajiban yang wajib dipatuhi oleh pasien dan keluarga demi kelancaran pelayanan medis:
              </p>
            )}
          </div>

          {/* ------------------------------------------------------------- */}
          {/* HAK PASIEN GRID                                               */}
          {/* ------------------------------------------------------------- */}
          {activeTab === "hak" && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in duration-300">
              {hakPasienItems.map((item, idx) => (
                <div
                  key={item.label}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div>
                    {/* Index Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        {renderIcon(item.icon)}
                      </div>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-[11px] font-bold text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Label & Description */}
                    <h3 className="mt-5 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-border/40 pt-3 text-[11px] font-semibold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Hak Dilindungi Undang-Undang</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* KEWAJIBAN PASIEN GRID                                         */}
          {/* ------------------------------------------------------------- */}
          {activeTab === "kewajiban" && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in duration-300">
              {kewajibanPasienItems.map((item, idx) => (
                <div
                  key={item.label}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5"
                >
                  <div>
                    {/* Index Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 transition-transform duration-300 group-hover:scale-110">
                        {renderIcon(item.icon)}
                      </div>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-[11px] font-bold text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Label & Description */}
                    <h3 className="mt-5 text-base font-bold text-foreground transition-colors group-hover:text-amber-600">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-border/40 pt-3 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                    <Info className="h-3.5 w-3.5" />
                    <span>Tanggung Jawab Bersama</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* 3. LEGAL BANNER / FOOTER NOTE                                  */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-14 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Jaminan Kualitas Pelayanan</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
                  Punya Pertanyaan Mengenai Hak & Kewajiban Pasien?
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Tim Customer Service dan Unit Pengaduan Masyarakat {HOSPITAL.name} siap memberikan penjelasan menyeluruh.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-xl font-bold shadow-sm">
                  <Link to="/kontak">Hubungi Layanan Pengaduan</Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}