"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Search,
  Handshake,
  ExternalLink,
  ShieldCheck,
  Building2,
  PhoneCall,
} from "lucide-react";
import { mitraKamiItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Input } from "#components/ui/input.tsx";
import { Button } from "#components/ui/button.tsx";

export default function MitraPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Filter Kategori Unik
  const categories = useMemo(() => {
    const unique = Array.from(new Set(mitraKamiItems.map((item) => item.category)));
    return ["Semua", ...unique];
  }, []);

  // Filter items berdasarkan Search & Kategori
  const filteredMitra = useMemo(() => {
    return mitraKamiItems.filter((item) => {
      const matchCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.label.toLowerCase().includes(searchQuery.toLowerCase()));
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
              <span className="font-semibold text-foreground">Mitra Kami</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Handshake className="h-3.5 w-3.5" />
              <span>Mitra Kerjasama Kesehatan</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Mitra Asuransi & Perusahaan
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {HOSPITAL.name} bekerja sama dengan berbagai penyedia jaminan kesehatan nasional, asuransi swasta, dan korporat untuk memberikan kemudahan akses layanan medis bagi Anda.
            </p>

            {/* Live Search Bar */}
            <div className="relative mt-8 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari nama asuransi / mitra (contoh: BPJS, Mandiri Inhealth, Jasa Raharja)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 rounded-2xl border-border/80 bg-card pl-11 pr-4 text-sm font-medium shadow-sm transition-all focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. CATEGORY FILTERS & MITRA GRID                              */}
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

          {/* Mitra Cards Grid */}
          {filteredMitra.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMitra.map((mitra) => (
                <div
                  key={mitra.name}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    {/* Header: Avatar Inisial & Nama */}
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black shadow-inner"
                        style={{
                          backgroundColor: mitra.avatarBg,
                          color: mitra.avatarColor,
                        }}
                      >
                        {mitra.initials}
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                          {mitra.name}
                        </h3>
                        <p className="mt-0.5 truncate text-xs font-semibold text-muted-foreground">
                          {mitra.category}
                        </p>
                      </div>
                    </div>

                    {/* Deskripsi */}
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      {mitra.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {mitra.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className="rounded-xl px-2.5 py-1 text-[11px] font-extrabold"
                          style={{
                            backgroundColor: tag.bg,
                            color: tag.color,
                          }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Website Link */}
                  {mitra.website && (
                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                        Mitra Resmi
                      </span>

                      <a
                        href={mitra.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-primary transition-colors hover:underline"
                      >
                        <span>{mitra.websiteLabel || "Kunjungi Situs"}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-border/80 bg-card p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-foreground">
                Mitra Tidak Ditemukan
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Coba kata kunci pencarian lain atau pilih kategori yang berbeda.
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

          {/* ------------------------------------------------------------- */}
          {/* 3. CTA KERJASAMA KEMITRAAN BARU                               */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-16 rounded-3xl border border-primary/20 bg-linear-to-r from-primary/10 via-card to-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>Kemitraan Korporat & Asuransi</span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground sm:text-2xl">
                  Ingin Menjadi Mitra Kerjasama Kami?
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm leading-relaxed">
                  Kami membuka peluang kemitraan layanan kesehatan untuk perusahaan, lembaga, dan penyedia asuransi swasta dalam hal MCU Karyawan, Rawat Jalan, dan Rawat Inap.
                </p>
              </div>

              <Button asChild className="rounded-xl font-bold shadow-sm shrink-0">
                <Link to="/kontak">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Hubungi Subbagian Kerjasama
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}