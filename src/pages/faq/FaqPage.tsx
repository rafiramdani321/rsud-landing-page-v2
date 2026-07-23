"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  Search,
  HelpCircle,
  PhoneCall,
  MessageSquare,
  HelpCircle as QuestionIcon,
} from "lucide-react";
import { FaqItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Input } from "#components/ui/input.tsx";
import { Button } from "#components/ui/button.tsx";

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // Default item 1 terbuka

  // Mengambil daftar kategori unik dari data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(FaqItems.map((item) => item.category)));
    return ["Semua", ...unique];
  }, []);

  // Filter items berdasarkan Search & Kategori
  const filteredFaqs = useMemo(() => {
    return FaqItems.filter((item) => {
      const matchCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof item.answer === "string" &&
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
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
              <span className="font-semibold text-foreground">FAQ</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Pusat Bantuan Informasi</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Pertanyaan Sering Diajukan
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Temukan jawaban cepat seputar prosedur pendaftaran, penjaminan BPJS Kesehatan, fasilitas rawat inap, dan layanan IGD {HOSPITAL.name}.
            </p>

            {/* Live Search Bar */}
            <div className="relative mt-8 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari pertanyaan (contoh: BPJS, Pendaftaran, Jam Besuk)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 rounded-2xl border-border/80 bg-card pl-11 pr-4 text-sm font-medium shadow-sm transition-all focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. CATEGORY FILTERS & ACCORDION LIST                          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
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

          {/* Accordion FAQ Container */}
          {filteredFaqs.length > 0 ? (
            <div className="mt-8 space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-3xl border border-border/80 bg-card transition-all duration-200 shadow-sm hover:border-primary/40"
                  >
                    {/* Header Question Toggle */}
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: faq.dotColor }}
                        />
                        <span className="text-sm font-extrabold text-foreground sm:text-base">
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-primary/10 text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    {/* Answer Body */}
                    {isOpen && (
                      <div className="border-t border-border/60 bg-muted/20 px-5 pb-6 pt-4 sm:px-6">
                        <div className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-border/80 bg-card p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <QuestionIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-foreground">
                Pertanyaan Tidak Ditemukan
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Coba gunakan kata kunci lain atau hubungi pusat bantuan kami.
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
          {/* 3. CTA SUPPORT BOX                                           */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-16 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>Masih Punya Pertanyaan?</span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground sm:text-2xl">
                  Tidak Menemukan Jawaban Yang Anda Cari?
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm leading-relaxed">
                  Tim customer service dan bagian pengaduan RSUD Karawang siap melayani dan membantu kendala informasi Anda.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button asChild variant="outline" className="rounded-xl font-bold">
                  <Link to="/pengaduan">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Layanan Pengaduan
                  </Link>
                </Button>
                <Button asChild className="rounded-xl font-bold shadow-sm">
                  <Link to="/kontak">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Hubungi Kami
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