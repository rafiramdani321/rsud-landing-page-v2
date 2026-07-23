"use client";

import { useState } from "react";
import {
  Clock,
  ArrowRight,
  UserCheck,
  CalendarDays,
  Search,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Calendar as CalendarIcon,
} from "lucide-react";
import {
  POLICLINICS,
  POLI_CATEGORIES,
  DOCTORS,
  HOSPITAL,
} from "#/libs/hospital-data.ts";
import { Button } from "#/components/ui/button.tsx";
import { SectionHeading } from "./SectionHeading";

export function Polyclinics() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? POLICLINICS
      : POLICLINICS.filter((p) => p.category === active);

  return (
    <section id="polyclinics" className="scroll-mt-24 py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Spesialis"
          title="Poliklinik Unggulan RSUD"
          description="Fasilitas klinik spesialis lengkap dengan peralatan medis modern dan penanganan dokter profesional."
        />

        {/* Filter Category Chips */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter Poliklinik"
        >
          {POLI_CATEGORIES.map((cat) => {
            const isSelected = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isSelected}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "border border-border/80 bg-card/60 text-muted-foreground hover:border-primary/40 hover:bg-card hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Polyclinic Grid Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((poli) => (
            <div
              key={poli.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/30">
                    <poli.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    {poli.category}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {poli.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {poli.description}
                </p>
              </div>

              <div className="mt-6 border-t border-border/50 pt-4">
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span>{poli.hours}</span>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-3 w-full justify-between px-0 text-xs font-semibold text-primary hover:bg-transparent hover:text-primary"
                >
                  <a href="#doctors" className="group/btn flex items-center">
                    <span>Lihat Dokter Spesialis</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = DOCTORS.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section id="doctors" className="scroll-mt-24 py-16 md:py-24 bg-muted/30 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tenaga Medis"
          title="Dokter Spesialis Kami"
          description="Ditangani oleh tim dokter ahli yang berdedikasi memberikan perawatan medis terbaik dengan penuh empati."
        />

        {/* Filter Input Search */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari nama dokter atau spesialisasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-11 w-full rounded-2xl border border-border/80 bg-background pl-10 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Doctors Grid Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.name}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-muted border border-border/60">
                  {doc.photo ? (
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                      <UserCheck className="h-8 w-8" />
                    </div>
                  )}
                </div>

                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                    {doc.specialty}
                  </span>
                  <h3 className="mt-1.5 text-base font-bold text-foreground">
                    {doc.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    Poli {doc.specialty}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-border/60 pt-4 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  <span className="block font-medium text-foreground">Hari Praktik:</span>
                  <span className="truncate max-w-40 block">{doc.days || "Senin - Jumat"}</span>
                </div>
                <Button asChild size="sm" className="rounded-xl px-4 text-xs font-semibold shadow-sm">
                  <a href="#book" className="flex items-center gap-1.5">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span>Janji Temu</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   4. SECTION BOOKING / APPOINTMENT (Buat Janji Temu) - Lanjutan Bawah
   ========================================================================== */
export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="book" className="scroll-mt-24 py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-2xl md:p-10 lg:p-12">
          
          {/* Subtle Glow Background Accent */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                eyebrow="Pendaftaran Online"
                title="Buat Janji Temu Tanpa Antre"
                description="Dapatkan kepastian jadwal konsultasi dokter spesialis dengan kemudahan pendaftaran daring."
              />

              <ul className="mt-8 space-y-3.5 text-sm font-medium text-foreground">
                {[
                  "Pilih dokter & waktu kunjungan secara fleksibel",
                  "Konfirmasi instan melalui WhatsApp/SMS",
                  "Prioritas layanan loket pendaftaran online",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-center gap-3">
                <PhoneCall className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-bold text-foreground">Butuh Bantuan Kendala Pendaftaran?</p>
                  <p className="text-xs text-muted-foreground">Hubungi Call Center: {HOSPITAL.emergencyPhone || "(0267) 123456"}</p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-primary/10 p-8 text-center border border-primary/20">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <h3 className="mt-3 text-xl font-bold text-foreground">Pendaftaran Berhasil!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Kode reservasi dan rincian janji temu telah dikirimkan ke nomor WhatsApp Anda.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 rounded-xl"
                  >
                    Buat Janji Lainnya
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Nama Lengkap Pasien *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      className="h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="0812xxxx"
                      className="h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Pilihan Poliklinik *
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>Pilih Poliklinik</option>
                      {POLICLINICS.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Pilih Dokter (Opsional)
                    </label>
                    <select
                      defaultValue=""
                      className="h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>Pilih Dokter Spesialis</option>
                      {DOCTORS.map((d) => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Rencana Tanggal Berobat *
                    </label>
                    <input
                      required
                      type="date"
                      className="h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="sm:col-span-2 mt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 rounded-xl text-sm font-semibold shadow-md shadow-primary/20"
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>Konfirmasi Booking Janji Temu</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}