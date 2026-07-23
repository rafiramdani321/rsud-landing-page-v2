"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Award,
  ShieldCheck,
  CalendarCheck,
  User,
  Clock,
  Check,
  LayoutGrid,
  Table as TableIcon,
  X,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Info,
} from "lucide-react";
import {
  DOCTORS,
  DOCTOR_DEPARTMENTS,
  WEEKDAYS,
  type Doctor,
} from "#/libs/hospital-data.ts";
import { Button } from "#components/ui/button.tsx";

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function DoctorPage() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All Departments");
  const [day, setDay] = useState("Any Day");
  const [bpjsOnly, setBpjsOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Filter Logic
  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((d) => {
      const matchQuery =
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.specialty.toLowerCase().includes(query.toLowerCase());
      const matchDept = dept === "All Departments" || d.department === dept;
      const matchDay = day === "Any Day" || (d.days && d.days.includes(day));
      const matchBpjs = !bpjsOnly || d.bpjs;
      return matchQuery && matchDept && matchDay && matchBpjs;
    });
  }, [query, dept, day, bpjsOnly]);

  const handleReset = () => {
    setQuery("");
    setDept("All Departments");
    setDay("Any Day");
    setBpjsOnly(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border/60 bg-linear-to-b from-primary/5 via-background to-background py-16 lg:py-24">
        {/* Decorative Background Patterns */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left Column: Text & Breadcrumb */}
            <div className="lg:col-span-7">
              {/* Breadcrumb */}
              <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Link to="/" className="transition-colors hover:text-primary">
                  Beranda
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground font-semibold">Tim Dokter</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Pelayanan Medis Profesional</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Temukan Dokter Spesialis & Schedule Praktik
              </h1>
              
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Komitmen kami adalah memberikan pelayanan medis terbaik. Cari dokter spesialis yang tepat, periksa ketersediaan jadwal, dan buat janji temu konsultasi dengan mudah.
              </p>

              {/* Stats Highlights */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
                <div>
                  <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                    {DOCTORS.length}+
                  </p>
                  <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                    Dokter Spesialis
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                    {DOCTOR_DEPARTMENTS.length - 1}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                    Departemen Medis
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                    24/7
                  </p>
                  <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                    Layanan UGD & Rawat
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Search Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-xl backdrop-blur-md">
                <h2 className="text-lg font-bold text-foreground">
                  Cari Jadwal Dokter
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Gunakan pencarian cepat untuk langsung menemukan dokter Anda.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Nama dokter atau spesialisasi..."
                      className={`${fieldClass} pl-10`}
                    />
                  </div>

                  <div>
                    <select
                      value={dept}
                      onChange={(e) => setDept(e.target.value)}
                      className={fieldClass}
                    >
                      {DOCTOR_DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full rounded-xl font-semibold"
                      onClick={() => {
                        const el = document.getElementById("doctor-list");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Lihat Hasil Pencarian ({filteredDoctors.length})
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter Toolbar Section */}
      <section id="doctor-list" className="scroll-mt-20 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-md md:flex-row md:items-center md:justify-between">
            {/* Filters */}
            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {/* Day Select */}
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className={fieldClass}
              >
                <option value="Any Day">Semua Hari Praktik</option>
                {WEEKDAYS.map((d) => (
                  <option key={d} value={d}>
                    Hari {d}
                  </option>
                ))}
              </select>

              {/* BPJS Filter Pill */}
              <label className="inline-flex h-11 cursor-pointer select-none items-center justify-center gap-2 rounded-xl border border-border/80 bg-background px-4 text-xs font-semibold text-foreground transition-all hover:bg-accent">
                <input
                  type="checkbox"
                  checked={bpjsOnly}
                  onChange={(e) => setBpjsOnly(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                    bpjsOnly
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/40 bg-transparent"
                  }`}
                >
                  {bpjsOnly && <Check className="h-3 w-3" />}
                </div>
                <span>Hanya Layanan BPJS</span>
              </label>

              {/* Clear Filter Button */}
              {(query || dept !== "All Departments" || day !== "Any Day" || bpjsOnly) && (
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  className="h-11 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  Reset Filter
                </Button>
              )}
            </div>

            {/* View Mode Toggle Switch */}
            <div className="flex items-center justify-end gap-1 border-t border-border/60 pt-3 md:border-t-0 md:pt-0">
              <span className="mr-2 text-xs font-medium text-muted-foreground hidden sm:inline">
                Tampilan:
              </span>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted"
                }`}
                title="Tampilan Grid Card"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  viewMode === "table"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted"
                }`}
                title="Tampilan Tabel"
              >
                <TableIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Result Count Indicator */}
          <div className="mt-4 flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <p>Menampilkan {filteredDoctors.length} dokter spesialis</p>
          </div>

          {/* Doctor Display */}
          
          {/* EMPTY STATE */}
          {filteredDoctors.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">
                Dokter Tidak Ditemukan
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tidak ada dokter yang sesuai dengan kriteria filter Anda.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 rounded-xl text-xs font-semibold"
                onClick={handleReset}
              >
                Reset Semua Filter
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            /* GRID VIEW */
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Doctor Image Header */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                    {doctor.photo ? (
                      <img
                        src={doctor.photo}
                        alt={`Foto ${doctor.name}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                        <User className="h-12 w-12 opacity-80" />
                      </div>
                    )}

                    <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                      {doctor.experience && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-bold text-foreground shadow-sm backdrop-blur-md">
                          <Award className="h-3.5 w-3.5 text-primary" />
                          <span>{doctor.experience}</span>
                        </span>
                      )}
                    </div>

                    {doctor.bpjs && (
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm backdrop-blur-md">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        <span>BPJS</span>
                      </span>
                    )}
                  </div>

                  {/* Doctor Content Info */}
                  <div className="flex flex-1 flex-col p-5">
                    <div>
                      <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                        {doctor.name}
                        {doctor.title ? `, ${doctor.title}` : ""}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {doctor.specialty}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {doctor.department}
                      </p>
                    </div>

                    {/* Schedule Quick Preview */}
                    <div className="mt-4 flex-1 rounded-xl border border-border/60 bg-muted/40 p-3">
                      <p className="flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span>Ringkasan Hari Praktik:</span>
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {doctor.days && doctor.days.length > 0 ? (
                          doctor.days.map((d) => (
                            <span
                              key={d}
                              className="rounded-md bg-background px-2 py-0.5 text-[10px] font-medium text-foreground border border-border/60"
                            >
                              {d}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-muted-foreground">
                            Konfirmasi Via Pendaftaran
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedDoctor(doctor)}
                        className="rounded-xl text-xs font-semibold"
                      >
                        <Info className="mr-1 h-3.5 w-3.5" />
                        Detail
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="rounded-xl text-xs font-semibold shadow-sm"
                      >
                        <Link to="/pelayanan/pendaftaran">
                          <CalendarCheck className="mr-1 h-3.5 w-3.5" />
                          Janji Temu
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* TABLE VIEW */
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-border/80 bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3.5 font-bold">Dokter</th>
                    <th className="px-4 py-3.5 font-bold">Spesialisasi & Poliklinik</th>
                    <th className="px-4 py-3.5 font-bold">Hari Praktik</th>
                    <th className="px-4 py-3.5 font-bold">Pengalaman</th>
                    <th className="px-4 py-3.5 font-bold">Layanan</th>
                    <th className="px-4 py-3.5 text-right font-bold">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredDoctors.map((doctor) => (
                    <tr
                      key={doctor.name}
                      className="transition-colors hover:bg-muted/30"
                    >
                      <td className="px-4 py-3 font-semibold text-foreground">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-muted">
                            {doctor.photo ? (
                              <img
                                src={doctor.photo}
                                alt={doctor.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                                <User className="h-5 w-5" />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-foreground">
                              {doctor.name}
                              {doctor.title ? `, ${doctor.title}` : ""}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-primary">{doctor.specialty}</p>
                        <p className="text-muted-foreground">{doctor.department}</p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {doctor.days?.map((d) => (
                            <span
                              key={d}
                              className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {doctor.experience || "-"}
                      </td>
                      <td className="px-4 py-3">
                        {doctor.bpjs ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <ShieldCheck className="h-3.5 w-3.5" /> BPJS
                          </span>
                        ) : (
                          <span className="text-muted-foreground">Umum</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedDoctor(doctor)}
                            className="rounded-lg text-[11px]"
                          >
                            Detail
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            className="rounded-lg text-[11px]"
                          >
                            <Link to="/pelayanan/pendaftaran">Daftar</Link>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

        {/* Detail Doctor Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-muted">
                {selectedDoctor.photo ? (
                  <img
                    src={selectedDoctor.photo}
                    alt={selectedDoctor.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                    <User className="h-10 w-10" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {selectedDoctor.name}
                  {selectedDoctor.title ? `, ${selectedDoctor.title}` : ""}
                </h3>
                <p className="text-xs font-semibold text-primary">
                  {selectedDoctor.specialty}
                </p>
                <p className="text-xs text-muted-foreground">
                  Poliklinik: {selectedDoctor.department}
                </p>
                
                <div className="mt-2 flex items-center gap-2">
                  {selectedDoctor.bpjs && (
                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                      Menerima BPJS
                    </span>
                  )}
                  {selectedDoctor.experience && (
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                      {selectedDoctor.experience} Pengalaman
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Doctor Info Section */}
            <div className="mt-6 space-y-4 border-t border-border/60 pt-4 text-xs">
              {selectedDoctor.education && (
                <div>
                  <h4 className="flex items-center gap-1.5 font-bold text-foreground">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>Pendidikan & Kualifikasi</span>
                  </h4>
                  <p className="mt-1 text-muted-foreground leading-relaxed">
                    {selectedDoctor.education}
                  </p>
                </div>
              )}

              {/* Detail Schedule */}
              <div>
                <h4 className="flex items-center gap-1.5 font-bold text-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Jadwal Praktik Lengkap</span>
                </h4>
                <div className="mt-2 rounded-xl border border-border/60 bg-muted/30 p-2">
                  {selectedDoctor.schedule && selectedDoctor.schedule.length > 0 ? (
                    <ul className="divide-y divide-border/40">
                      {selectedDoctor.schedule.map((s) => (
                        <li
                          key={s.day}
                          className="flex items-center justify-between px-2 py-1.5"
                        >
                          <span className="font-semibold text-foreground">
                            {s.day}
                          </span>
                          <span className="text-muted-foreground">{s.time}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="p-2 text-center text-muted-foreground">
                      Jadwal fleksibel. Harap konfirmasi via layanan pendaftaran.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="w-1/2 rounded-xl font-semibold"
                onClick={() => setSelectedDoctor(null)}
              >
                Tutup
              </Button>
              <Button asChild className="w-1/2 rounded-xl font-semibold shadow-sm">
                <Link to="/pelayanan/pendaftaran">Buat Janji Temu</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}