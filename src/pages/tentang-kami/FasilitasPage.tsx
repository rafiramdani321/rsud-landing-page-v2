"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
  Search,
  Scissors,
  Heart,
  Cpu,
  BedDouble,
  MapPin,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { fasilitasItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Input } from "#components/ui/input.tsx";
import { Button } from "#components/ui/button.tsx";

export default function FasilitasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Daftar Kategori Unik
  const categories = useMemo(() => {
    const unique = Array.from(new Set(fasilitasItems.map((item) => item.category)));
    return ["Semua", ...unique];
  }, []);

  // Filter items berdasarkan Search & Kategori
  const filteredFasilitas = useMemo(() => {
    return fasilitasItems.filter((item) => {
      const matchCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item?.detail?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

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
                Fasilitas & Sarana
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Sarana & Prasarana Medis</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Fasilitas Rumah Sakit
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {HOSPITAL.name} dilengkapi dengan gedung perawatan modern, ruang tindakan khusus, serta peralatan medis teknologi tinggi untuk mendukung penyembuhan Anda.
            </p>

            {/* Live Search Bar */}
            <div className="relative mt-8 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari fasilitas (contoh: ICU, CT-Scan, Bedah, VIP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 rounded-2xl border-border/80 bg-card pl-11 pr-4 text-sm font-medium shadow-sm transition-all focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. STATS SUMMARY BANNER                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="border-b border-border/40 bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <BedDouble className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-foreground">450+</div>
                <div className="text-[11px] font-medium text-muted-foreground">Kapasitas Tempat Tidur</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                <Scissors className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-foreground">8 Kamar</div>
                <div className="text-[11px] font-medium text-muted-foreground">Bedah Sentral (OK)</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-foreground">45 Bed</div>
                <div className="text-[11px] font-medium text-muted-foreground">ICU/ICCU/NICU</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-foreground">128 Slice</div>
                <div className="text-[11px] font-medium text-muted-foreground">CT-Scan & MRI 1.5T</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. CATEGORY FILTERS & CARDS GRID                               */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-2xl px-4 py-2.5 text-xs font-extrabold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-card border border-border/80 text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Grid Cards */}
          {filteredFasilitas.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFasilitas.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    {/* Header Card: Icon & Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: item.iconBg,
                          color: item.iconColor,
                        }}
                      >
                        {item.icon}
                      </div>

                      <span
                        className="inline-flex rounded-xl px-3 py-1 text-xs font-black"
                        style={{
                          backgroundColor: item.badgeBg,
                          color: item.badgeColor,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <div className="mt-5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {item.category}
                      </span>
                      <h3 className="mt-1 text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>

                  {/* Detail Location Footer */}
                  <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-border/80 bg-card p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-foreground">
                Fasilitas Tidak Ditemukan
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Coba kata kunci pencarian lain atau ubah filter kategori di atas.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
                className="mt-4 rounded-xl font-bold"
              >
                Reset Pencarian
              </Button>
            </div>
          )}

          {/* Bottom Banner Info */}
          <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Informasi Ketersediaan Kamar</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
                  Ingin Mengecek Ketersediaan Tempat Tidur Real-time?
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Hubungi layanan pendaftaran dan informasi rawat inap kami untuk bantuan alokasi bed pasien.
                </p>
              </div>

              <Button asChild className="rounded-xl font-bold shadow-sm shrink-0">
                <Link to="/kontak">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Hubungi Call Center
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}