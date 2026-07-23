"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Newspaper,
  Bell,
  Calendar,
  Search,
  Sparkles,
  Tag,
  Clock,
  AlertTriangle,
  X,
  ArrowRight,
  Flame,
  Info,
} from "lucide-react";
import type { BeritaItem, PengumumanItem } from "../../types";
import { beritaItems, pengumumanItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Button } from "#components/ui/button.tsx";

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function BeritaDanPengumumanPage() {
  const [activeTab, setActiveTab] = useState<"berita" | "pengumuman">("berita");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState<BeritaItem | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<PengumumanItem | null>(null);

  // Filter Berita
  const filteredBerita = useMemo(() => {
    return beritaItems.filter(
      (item) =>
        item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sumber.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Filter Pengumuman
  const filteredPengumuman = useMemo(() => {
    return pengumumanItems.filter(
      (item) =>
        item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sumber.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Helper render badge variant
  const renderBadge = (badge: string, variant: string) => {
    switch (variant) {
      case "hot":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-extrabold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
            <Flame className="h-3 w-3" />
            {badge}
          </span>
        );
      case "warning":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-extrabold text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
            <AlertTriangle className="h-3 w-3" />
            {badge}
          </span>
        );
      case "new":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-extrabold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
            <Sparkles className="h-3 w-3" />
            {badge}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-extrabold text-primary">
            <Info className="h-3 w-3" />
            {badge}
          </span>
        );
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
                Berita & Pengumuman
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Pusat Informasi Resmi</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Berita & Pengumuman Terbaru
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Dapatkan berita terbaru mengenai layanan kesehatan, inovasi fasilitas, serta pengumuman operasional penting di {HOSPITAL.name}.
            </p>
          </div>

          {/* Search Field */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berita atau pengumuman..."
                className={`${fieldClass} pl-10 shadow-sm`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. TABS & CONTENT SECTION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Tab Controls */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-2xl border border-border/80 bg-card p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab("berita")}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-extrabold transition-all sm:text-sm ${
                  activeTab === "berita"
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Newspaper className="h-4 w-4" />
                <span>Berita Kesehatan ({filteredBerita.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("pengumuman")}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-extrabold transition-all sm:text-sm ${
                  activeTab === "pengumuman"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Bell className="h-4 w-4" />
                <span>Pengumuman ({filteredPengumuman.length})</span>
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TAB 1: BERITA KESEHATAN                                       */}
          {/* ------------------------------------------------------------- */}
          {activeTab === "berita" && (
            <div className="mt-8 animate-in fade-in duration-300">
              {filteredBerita.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
                  <Newspaper className="mx-auto h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-base font-bold text-foreground">Berita Tidak Ditemukan</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Tidak ada berita yang sesuai dengan kata kunci "{searchQuery}".
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 text-xs" onClick={() => setSearchQuery("")}>
                    Reset Pencarian
                  </Button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {filteredBerita.map((item) => (
                    <article
                      key={item.id}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                    >
                      <div>
                        {/* Header Badge & Date */}
                        <div className="flex items-center justify-between">
                          {renderBadge(item.badge, item.badgeVariant)}
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{item.tanggal}</span>
                          </div>
                        </div>

                        {/* Title & Excerpt */}
                        <h3 className="mt-4 text-lg font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {item.judul}
                        </h3>
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* Footer & Action */}
                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                        <span className="flex items-center gap-1 text-muted-foreground font-medium">
                          <Tag className="h-3.5 w-3.5 text-primary" />
                          {item.sumber}
                        </span>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 rounded-xl font-semibold text-primary hover:bg-primary/10"
                          onClick={() => setSelectedNews(item)}
                        >
                          <span>Baca Selengkapnya</span>
                          <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* TAB 2: PENGUMUMAN OPERASIONAL                                 */}
          {/* ------------------------------------------------------------- */}
          {activeTab === "pengumuman" && (
            <div className="mt-8 animate-in fade-in duration-300">
              {filteredPengumuman.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
                  <Bell className="mx-auto h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-base font-bold text-foreground">Pengumuman Tidak Ditemukan</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Tidak ada pengumuman yang sesuai dengan kata kunci "{searchQuery}".
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 text-xs" onClick={() => setSearchQuery("")}>
                    Reset Pencarian
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredPengumuman.map((item) => (
                    <div
                      key={item.id}
                      className={`group relative flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 hover:shadow-md md:flex-row md:items-center ${
                        item.penting
                          ? "border-amber-500/40 bg-amber-500/5 dark:bg-amber-500/10"
                          : "border-border/80 bg-card hover:border-primary/40"
                      }`}
                    >
                      <div className="max-w-3xl space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          {renderBadge(item.badge, item.badgeVariant)}
                          <span className="text-xs font-semibold text-muted-foreground">
                            {item.sumber}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                            <Calendar className="h-3.5 w-3.5" />
                            {item.tanggal}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                          {item.judul}
                        </h3>

                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {item.excerpt}
                        </p>

                        {item.berlakuHingga && (
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Berlaku hingga: {item.berlakuHingga}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 shrink-0 border-t border-border/40 pt-3 md:mt-0 md:border-0 md:pt-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-xl text-xs font-semibold md:w-auto"
                          onClick={() => setSelectedNotice(item)}
                        >
                          Detail Pengumuman
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. MODAL DETAIL BERITA                                         */}
      {/* ------------------------------------------------------------- */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {renderBadge(selectedNews.badge, selectedNews.badgeVariant)}
              <span className="text-xs text-muted-foreground font-semibold">{selectedNews.sumber}</span>
            </div>

            <h2 className="mt-4 text-xl font-extrabold text-foreground sm:text-2xl leading-snug">
              {selectedNews.judul}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>Dipublikasikan pada {selectedNews.tanggal}</span>
            </div>

            <div className="mt-6 space-y-4 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
              <p>{selectedNews.excerpt}</p>
              <p>
                Artikel berita ini merupakan informasi publik resmi yang diterbitkan oleh Tim Hubungan Masyarakat {HOSPITAL.name}. Untuk informasi lebih lanjut mengenai program ini, Anda dapat berkonsultasi langsung dengan petugas di gedung utama.
              </p>
            </div>

            <div className="mt-8 flex justify-end gap-3 border-t border-border/60 pt-4">
              <Button variant="outline" className="rounded-xl text-xs font-semibold" onClick={() => setSelectedNews(null)}>
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 4. MODAL DETAIL PENGUMUMAN                                    */}
      {/* ------------------------------------------------------------- */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {renderBadge(selectedNotice.badge, selectedNotice.badgeVariant)}
              <span className="text-xs text-muted-foreground font-semibold">{selectedNotice.sumber}</span>
            </div>

            <h2 className="mt-4 text-xl font-extrabold text-foreground leading-snug">
              {selectedNotice.judul}
            </h2>

            <div className="mt-3 space-y-2 rounded-2xl border border-border/60 bg-muted/30 p-3.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tanggal Rilis</span>
                <span className="font-bold text-foreground">{selectedNotice.tanggal}</span>
              </div>
              {selectedNotice.berlakuHingga && (
                <div className="flex items-center justify-between border-t border-border/40 pt-2">
                  <span className="text-muted-foreground">Masa Berlaku</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{selectedNotice.berlakuHingga}</span>
                </div>
              )}
            </div>

            <div className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {selectedNotice.excerpt}
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="outline" className="w-full rounded-xl text-xs font-semibold" onClick={() => setSelectedNotice(null)}>
                Tutup Pengumuman
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}