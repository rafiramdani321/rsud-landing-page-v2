"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Search,
  Sparkles,
  Calendar,
  Eye,
  User,
  BookOpen,
  ArrowRight,
  X,
  TrendingUp,
} from "lucide-react";
import type { ArtikelItem } from "../../types";
import { artikelItems, kategoryArtikelItems } from "../../data/mockData";
import { Button } from "#components/ui/button.tsx";
import { HOSPITAL } from "../../libs/hospital-data";

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<ArtikelItem | null>(null);

  // Filter artikel berdasarkan kategori dan query pencarian
  const filteredArticles = useMemo(() => {
    return artikelItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "Semua" ||
        item.kategori.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Cari artikel featured (jika ada)
  const featuredArticle = useMemo(() => {
    return artikelItems.find((item) => item.featured) || artikelItems[0];
  }, []);

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
                Blog & Artikel Kesehatan
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Pusat Edukasi Medis</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Artikel & Edukasi Kesehatan
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Temukan berbagai tips kesehatan, panduan gizi, pencegahan penyakit, dan wawasan medis terpercaya yang disusun oleh tim dokter & tenaga ahli {HOSPITAL.name}.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel (misal: Jantung, Diabetes, Nutrisi)..."
                className={`${fieldClass} pl-10 shadow-sm`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. FEATURED ARTICLE HERO CARD                                */}
      {/* ------------------------------------------------------------- */}
      {featuredArticle && !searchQuery && selectedCategory === "Semua" && (
        <section className="py-8 border-b border-border/40 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-md transition-all hover:shadow-xl sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Image Container */}
                <div className="overflow-hidden rounded-2xl bg-muted lg:col-span-6 aspect-video relative">
                  <img
                    src={featuredArticle.image || ""}
                    alt={featuredArticle.judul}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-rose-600 px-3 py-1 text-xs font-extrabold text-white shadow-md">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Artikel Unggulan
                  </div>
                </div>

                {/* Content Container */}
                <div className="space-y-4 lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-medium">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                      {featuredArticle.kategori}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {featuredArticle.tanggal}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {featuredArticle.views} x dibaca
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl leading-snug group-hover:text-primary transition-colors">
                    {featuredArticle.judul}
                  </h2>

                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-border/40">
                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <User className="h-4 w-4" />
                      </div>
                      <span>{featuredArticle.author}</span>
                    </div>

                    <Button
                      onClick={() => setSelectedArticle(featuredArticle)}
                      className="rounded-xl font-bold text-xs"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. CATEGORY FILTER & ARTICLES GRID                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Chips Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("Semua")}
              className={`shrink-0 rounded-2xl px-4 py-2 text-xs font-extrabold transition-all ${
                selectedCategory === "Semua"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-border/80 text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              Semua Kategori
            </button>

            {kategoryArtikelItems.map((kat) => (
              <button
                key={kat.id}
                onClick={() => setSelectedCategory(kat.name)}
                className={`shrink-0 rounded-2xl px-4 py-2 text-xs font-extrabold transition-all ${
                  selectedCategory === kat.name
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card border border-border/80 text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {kat.name}
              </button>
            ))}
          </div>

          {/* Articles Count Status */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs font-medium text-muted-foreground">
              Menampilkan <span className="font-bold text-foreground">{filteredArticles.length}</span> artikel
              {selectedCategory !== "Semua" && (
                <span> untuk kategori <strong className="text-primary">{selectedCategory}</strong></span>
              )}
            </p>
          </div>

          {/* Article Cards Grid */}
          {filteredArticles.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-base font-bold text-foreground">Artikel Tidak Ditemukan</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tidak ada artikel yang sesuai dengan pencarian atau kategori ini.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 rounded-xl text-xs font-semibold"
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSearchQuery("");
                }}
              >
                Reset Filter
              </Button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((item) => (
                <article
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div>
                    {/* Image Thumbnail */}
                    <div className="aspect-video w-full overflow-hidden bg-muted relative">
                      <img
                        src={item.image || ""}
                        alt={item.judul}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold text-foreground shadow-sm">
                        {item.kategori}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.tanggal}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {item.views} views
                        </span>
                      </div>

                      <h3 className="mt-3 text-base font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {item.judul}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between border-t border-border/60 pt-4">
                      <span className="text-[11px] font-semibold text-muted-foreground truncate max-w-37.5">
                        {item.author}
                      </span>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 rounded-xl font-semibold text-xs text-primary hover:bg-primary/10"
                        onClick={() => setSelectedArticle(item)}
                      >
                        Baca Artikel
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. READ ARTICLE MODAL                                        */}
      {/* ------------------------------------------------------------- */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl scrollbar-thin">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image Header */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted relative mb-6">
              <img
                src={selectedArticle.image || ""}
                alt={selectedArticle.judul}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-extrabold text-primary-foreground shadow-md">
                {selectedArticle.kategori}
              </span>
            </div>

            {/* Article Header Info */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1 text-foreground font-bold">
                <User className="h-3.5 w-3.5 text-primary" />
                {selectedArticle.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {selectedArticle.tanggal}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" />
                {selectedArticle.views} x dibaca
              </span>
            </div>

            <h2 className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl leading-snug">
              {selectedArticle.judul}
            </h2>

            {/* Article Content Body */}
            <div className="mt-6 space-y-4 border-t border-border/60 pt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground text-sm sm:text-base">
                {selectedArticle.excerpt}
              </p>
              <p>
                Menjaga kesehatan tubuh merupakan investasi jangka panjang bagi kualitas hidup yang lebih baik. Melalui pemahaman yang benar serta pencegahan sejak dini, berbagai risiko komplikasi penyakit serius dapat diminimalkan.
              </p>
              <p>
                Apabila Anda atau anggota keluarga mengalami keluhan medis yang berlanjut, sangat disarankan untuk melakukan konsultasi langsung dengan dokter spesialis kami di {HOSPITAL.name} untuk mendapatkan penanganan yang presisi dan profesional.
              </p>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4">
              <span className="text-xs text-muted-foreground">
                Sumber: Tim Promosi Kesehatan
              </span>

              <Button
                variant="outline"
                className="rounded-xl font-semibold text-xs"
                onClick={() => setSelectedArticle(null)}
              >
                Tutup Artikel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}