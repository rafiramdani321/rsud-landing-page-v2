"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  Search,
  Sparkles,
  Building,
  FileCheck,
  AlertCircle,
  X,
  CheckCircle2,
  Send,
} from "lucide-react";
import type { JobItem } from "../../types";
import { JobItems } from "../../data/mockData";
import { HOSPITAL } from "../../libs/hospital-data";
import { Button } from "#components/ui/button.tsx";

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function RekrutmenPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [isApplied, setIsApplied] = useState(false);

  // Daftar kategori unik untuk filter chips
  const categories = useMemo(() => {
    const list = Array.from(new Set(JobItems.map((j) => j.category)));
    return ["Semua", ...list];
  }, []);

  // Filter lowongan berdasarkan pencarian dan kategori
  const filteredJobs = useMemo(() => {
    return JobItems.filter((job) => {
      const matchesCategory =
        selectedCategory === "Semua" || job.category === selectedCategory;

      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.employmentType.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
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
                Rekrutmen & Karir
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Bergabunglah Bersama Tim Kami</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Peluang Karir RSUD Karawang
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Mari bertumbuh dan memberikan pelayanan kesehatan bermutu tinggi untuk masyarakat bersama tenaga medis dan profesional terkemuka di {HOSPITAL.name}.
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
                placeholder="Cari posisi (misal: Dokter, Perawat, Administrasi)..."
                className={`${fieldClass} pl-10 shadow-sm`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. CATEGORY FILTERS & JOBS GRID                                */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Chips Horizontal Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-2xl px-4 py-2 text-xs font-extrabold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card border border-border/80 text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Info */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs font-medium text-muted-foreground">
              Menampilkan <span className="font-bold text-foreground">{filteredJobs.length}</span> posisi tersedia
            </p>
          </div>

          {/* Jobs List Grid */}
          {filteredJobs.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
              <Briefcase className="mx-auto h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-base font-bold text-foreground">
                Lowongan Tidak Ditemukan
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tidak ada posisi yang cocok dengan kriteria pencarian "{searchQuery}".
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 rounded-xl text-xs font-semibold"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
              >
                Reset Filter
              </Button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filteredJobs.map((job) => (
                <div
                  key={job.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                        {job.category}
                      </span>

                      {job.deadlineSoon && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-extrabold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                          <Clock className="h-3 w-3" />
                          Segera Ditutup
                        </span>
                      )}
                    </div>

                    {/* Job Title */}
                    <h3 className="mt-4 text-xl font-extrabold text-foreground transition-colors group-hover:text-primary">
                      {job.title}
                    </h3>

                    {/* Specs List */}
                    <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl border border-border/60 bg-muted/30 p-3.5 text-xs">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="font-semibold text-foreground">{job.employmentType}</span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="font-semibold text-foreground">{job.type}</span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                        <MapPin className="h-3.5 w-3.5 text-secondary shrink-0" />
                        <span className="font-medium">{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-amber-600" />
                      <span>Batas: <strong className="text-foreground">{job.deadline}</strong></span>
                    </div>

                    <Button
                      size="sm"
                      className="rounded-xl text-xs font-bold shadow-sm"
                      onClick={() => {
                        setSelectedJob(job);
                        setIsApplied(false);
                      }}
                    >
                      Lamar Sekarang
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* 3. RECRUITMENT INFO & DISCLAMER                               */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-14 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>Peringatan Bebas Pungutan Biaya</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
                  Proses Rekrutmen Bebas dari Biaya Apapun
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {HOSPITAL.name} tidak pernah memungut biaya atau bekerjasama dengan agen travel manapun selama proses seleksi pegawai.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. APPLICATION MODAL                                         */}
      {/* ------------------------------------------------------------- */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {isApplied ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">
                  Lamaran Berhasil Terkirim!
                </h3>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Terima kasih telah melamar posisi <strong>{selectedJob.title}</strong>. Tim SDM kami akan meninjau berkas Anda.
                </p>
                <Button
                  className="rounded-xl font-bold text-xs mt-4"
                  onClick={() => setSelectedJob(null)}
                >
                  Selesai
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-extrabold text-primary">
                    {selectedJob.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {selectedJob.employmentType}
                  </span>
                </div>

                <h2 className="mt-3 text-xl font-extrabold text-foreground">
                  {selectedJob.title}
                </h2>

                {/* Job Summary */}
                <div className="mt-4 space-y-2 rounded-2xl border border-border/60 bg-muted/30 p-3.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lokasi Penempatan:</span>
                    <span className="font-bold text-foreground">{selectedJob.location}</span>
                  </div>
                  <div className="flex justify-between border-t border-border/40 pt-2">
                    <span className="text-muted-foreground">Tipe Kerja:</span>
                    <span className="font-bold text-foreground">{selectedJob.type}</span>
                  </div>
                  <div className="flex justify-between border-t border-border/40 pt-2">
                    <span className="text-muted-foreground">Batas Akhir:</span>
                    <span className="font-bold text-amber-600">{selectedJob.deadline}</span>
                  </div>
                </div>

                {/* General Requirements */}
                <div className="mt-4 space-y-2 text-xs">
                  <p className="font-bold text-foreground">Persyaratan Umum:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <FileCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>Warga Negara Indonesia (WNI)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>Memiliki STR Aktif (Khusus Tenaga Medis/Kesehatan)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>Pendidikan sesuai dengan kualifikasi jabatan</span>
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3 border-t border-border/60 pt-4">
                  <Button
                    variant="outline"
                    className="w-1/2 rounded-xl text-xs font-semibold"
                    onClick={() => setSelectedJob(null)}
                  >
                    Batal
                  </Button>
                  <Button
                    className="w-1/2 rounded-xl text-xs font-bold"
                    onClick={() => setIsApplied(true)}
                  >
                    <Send className="mr-1.5 h-3.5 w-3.5" />
                    Kirim Lamaran
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}