import { useMemo, useState } from "react";
import {
  Search,
  Award,
  ShieldCheck,
  ChevronDown,
  CalendarCheck,
  User,
  Clock,
  Check,
} from "lucide-react";
import {
  DOCTORS,
  DOCTOR_DEPARTMENTS,
  WEEKDAYS,
  type Doctor,
} from "#/libs/hospital-data.ts";
import { Button } from "#/components/ui/button.tsx";
import { SectionHeading } from "./SectionHeading";

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
      {/* Visual Image Header */}
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

        {/* Overlay Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {doctor.experience && (
            <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-bold text-foreground shadow-sm backdrop-blur-md">
              <Award className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>{doctor.experience} Pengalaman</span>
            </span>
          )}
        </div>

        {doctor.bpjs && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>BPJS</span>
          </span>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Card Details */}
      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
            {doctor.name}{doctor.title ? `, ${doctor.title}` : ""}
          </h3>
          <p className="mt-1 text-xs font-semibold text-primary">
            {doctor.specialty}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {doctor.department}
          </p>
        </div>

        {/* Collapsible Weekly Schedule */}
        <div className="mt-4 flex-1">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-between rounded-xl border border-border/60 bg-muted/50 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Jadwal Praktik Mingguan</span>
            </span>
            <ChevronDown
              className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {open && (
            <div className="mt-2 rounded-xl border border-border/60 bg-background/50 p-1 transition-all duration-200">
              {doctor.schedule && doctor.schedule.length > 0 ? (
                <ul className="divide-y divide-border/40 text-xs">
                  {doctor.schedule.map((s) => (
                    <li
                      key={s.day}
                      className="flex items-center justify-between px-2.5 py-1.5"
                    >
                      <span className="font-semibold text-foreground">{s.day}</span>
                      <span className="text-muted-foreground">{s.time}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-2 text-center text-[11px] text-muted-foreground">
                  Jadwal praktik dapat dikonfirmasi via pendaftaran.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Action Button */}
        <Button asChild className="mt-5 w-full rounded-xl text-xs font-semibold shadow-sm">
          <a href="#book" className="flex items-center justify-center gap-1.5">
            <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Buat Janji Dokter</span>
          </a>
        </Button>
      </div>
    </div>
  );
}

export function Doctors() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All Departments");
  const [day, setDay] = useState("Any Day");
  const [bpjsOnly, setBpjsOnly] = useState(false);

  const filtered = useMemo(() => {
    return DOCTORS.filter((d) => {
      const matchQuery = d.name.toLowerCase().includes(query.toLowerCase());
      const matchDept = dept === "All Departments" || d.department === dept;
      const matchDay = day === "Any Day" || (d.days && d.days.includes(day));
      const matchBpjs = !bpjsOnly || d.bpjs;
      return matchQuery && matchDept && matchDay && matchBpjs;
    });
  }, [query, dept, day, bpjsOnly]);

  return (
    <section id="doctors" className="scroll-mt-24 bg-muted/30 py-16 md:py-24 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Tim Dokter Spesialis"
          title="Dokter & Jadwal Praktik"
          description="Temukan dokter spesialis berpengalaman dan periksa jadwal praktik mingguan mereka untuk kenyamanan konsultasi Anda."
        />

        {/* Filter Toolbar Container */}
        <div className="mt-10 rounded-2xl border border-border/80 bg-card p-3.5 shadow-lg backdrop-blur-md">
          <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_auto] md:items-center">
            
            {/* Search Input */}
            <div className="relative">
              <Search
                className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <label className="sr-only" htmlFor="doctor-search">
                Cari Dokter
              </label>
              <input
                id="doctor-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari berdasarkan nama dokter..."
                className={`${fieldClass} pl-10`}
              />
            </div>

            {/* Department Select */}
            <div>
              <label className="sr-only" htmlFor="filter-dept">
                Spesialisasi / Departemen
              </label>
              <select
                id="filter-dept"
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

            {/* Day Select */}
            <div>
              <label className="sr-only" htmlFor="filter-day">
                Hari Praktik
              </label>
              <select
                id="filter-day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className={fieldClass}
              >
                <option value="Any Day">Semua Hari</option>
                {WEEKDAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* BPJS Checkbox Toggle Pill */}
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
              <span>Layanan BPJS</span>
            </label>

          </div>
        </div>

        {/* Doctors Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">
              Dokter Tidak Ditemukan
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Tidak ada dokter yang sesuai dengan filter pencarian Anda. Coba ubah kata kunci atau pilihan filter.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 rounded-xl text-xs font-semibold"
              onClick={() => {
                setQuery("");
                setDept("All Departments");
                setDay("Any Day");
                setBpjsOnly(false);
              }}
            >
              Reset Filter Pencarian
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}