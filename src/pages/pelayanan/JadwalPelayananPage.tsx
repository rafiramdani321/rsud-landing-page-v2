"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  UserCheck,
  ChevronRight,
  CalendarCheck,
  Building2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { jadwalPelayananItems } from "../../data/mockData";
import { Button } from "#components/ui/button.tsx";
import { WEEKDAYS } from "../../libs/hospital-data";

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function JadwalPelayananPage() {
  const [selectedDay, setSelectedDay] = useState<string>("Senin");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPoli, setSelectedPoli] = useState<string>("All");

  // Ekstrak daftar unik Poliklinik untuk filter dropdown
  const poliOptions = useMemo(() => {
    const polis = Array.from(
      new Set(jadwalPelayananItems.map((item) => item.poli))
    );
    return ["All", ...polis.sort()];
  }, []);

  // Filter logika jadwal
  const filteredJadwal = useMemo(() => {
    return jadwalPelayananItems.filter((item) => {
      const matchDay = selectedDay === "All" || item.hari === selectedDay;
      const matchPoli = selectedPoli === "All" || item.poli === selectedPoli;
      const matchQuery =
        item.dokter.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.poli.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lokasi.toLowerCase().includes(searchQuery.toLowerCase());

      return matchDay && matchPoli && matchQuery;
    });
  }, [selectedDay, selectedPoli, searchQuery]);

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
                Jadwal Pelayanan Poli
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Informasi Terintegrasi</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Jadwal Poliklinik & Dokter
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Temukan informasi operasional poliklinik spesialis dan jadwal
              praktik dokter. Rencanakan kunjungan Anda untuk kenyamanan pelayanan medis.
            </p>
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-amber-700 dark:text-amber-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p>
                <strong>Catatan Pendaftaran:</strong> Loket pendaftaran rawat jalan dibuka pukul <strong>07.00 - 11.00 WIB</strong>. Layanan UGD tetap beroperasi <strong>24 Jam</strong>.
              </p>
            </div>
            <Button
              asChild
              size="sm"
              className="shrink-0 rounded-xl font-semibold shadow-sm"
            >
              <Link to="/pelayanan/pendaftaran">Daftar Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. NAVIGATION TABS & FILTER TOOLBAR                            */}
      {/* ------------------------------------------------------------- */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Day Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedDay("All")}
              className={`flex items-center gap-2 whitespace-nowrap rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
                selectedDay === "All"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border border-border/80 bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Semua Hari</span>
            </button>

            {WEEKDAYS.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
                  selectedDay === day
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "border border-border/80 bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <span>{day}</span>
              </button>
            ))}
          </div>

          {/* Filter Bar */}
          <div className="mt-6 grid gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm sm:grid-cols-2 md:grid-cols-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama dokter atau poli..."
                className={`${fieldClass} pl-10`}
              />
            </div>

            {/* Poli Select */}
            <div className="relative">
              <select
                value={selectedPoli}
                onChange={(e) => setSelectedPoli(e.target.value)}
                className={fieldClass}
              >
                <option value="All">Semua Poliklinik</option>
                {poliOptions
                  .filter((p) => p !== "All")
                  .map((p) => (
                    <option key={p} value={p}>
                      Poli {p}
                    </option>
                  ))}
              </select>
            </div>

            {/* Clear Button */}
            {(searchQuery || selectedPoli !== "All" || selectedDay !== "Senin") && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPoli("All");
                  setSelectedDay("Senin");
                }}
                className="h-11 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                Reset Filter
              </Button>
            )}
          </div>

          {/* Status Indicator */}
          <div className="mt-6 flex items-center justify-between text-xs font-medium text-muted-foreground">
            <p>
              Menampilkan <strong>{filteredJadwal.length}</strong> jadwal pelayanan
              {selectedDay !== "All" && ` pada hari ${selectedDay}`}
            </p>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* 3. JADWAL GRID DISPLAY                                        */}
          {/* ------------------------------------------------------------- */}
          {filteredJadwal.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">
                Jadwal Tidak Ditemukan
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tidak ada jadwal dokter atau poliklinik yang sesuai dengan kata kunci Anda.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 rounded-xl text-xs font-semibold"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPoli("All");
                  setSelectedDay("Senin");
                }}
              >
                Reset Filter
              </Button>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredJadwal.map((item, idx) => (
                <div
                  key={`${item.dokter}-${item.hari}-${idx}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div>
                    {/* Header Card: Hari & Poli */}
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                        <Building2 className="h-3.5 w-3.5" />
                        Poli {item.poli}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {item.hari}
                      </span>
                    </div>

                    {/* Content: Dokter & Jam */}
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-2.5">
                        <UserCheck className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Dokter Spesialis</p>
                          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.dokter}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Clock className="mt-0.5 h-4 w-4 text-emerald-500 shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Jam Pelayanan</p>
                          <p className="text-xs font-bold text-foreground">
                            {item.jamPelayanan} WIB
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <MapPin className="mt-0.5 h-4 w-4 text-secondary shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Lokasi / Poliklinik</p>
                          <p className="text-xs font-semibold text-foreground">
                            {item.lokasi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 border-t border-border/60 pt-3">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between rounded-xl text-xs font-semibold hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link to="/pelayanan/pendaftaran">
                        <span>Buat Janji Kunjungan</span>
                        <CalendarCheck className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}