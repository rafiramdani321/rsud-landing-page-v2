"use client"

import {
  FlaskConical,
  ScanLine,
  Pill,
  ClipboardCheck,
  Dumbbell,
  ArrowRight,
  Check,
} from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { Button } from "#/components/ui/button.tsx"

const SERVICES = [
  {
    icon: FlaskConical,
    name: "Laboratorium 24/7",
    description:
      "Pemeriksaan darah dan patologi klinik yang cepat, tepat, dan akurat siap melayani sepanjang hari.",
  },
  {
    icon: ScanLine,
    name: "Radiologi Canggih",
    description:
      "Fasilitas MRI 3 Tesla, CT-Scan, Rontgen X-Ray, dan USG yang ditangani oleh spesialis radiologi berpengalaman.",
  },
  {
    icon: Pill,
    name: "Farmasi & Apotek 24 Jam",
    description:
      "Layanan obat-obatan lengkap dan terintegrasi agar Anda tidak perlu menunggu lama untuk kebutuhan medis darurat.",
  },
  {
    icon: Dumbbell,
    name: "Rehabilitasi Medik & Fisioterapi",
    description:
      "Program pemulihan fisik dan fisioterapi terpadu untuk membantu memulihkan mobilitas serta kebugaran Anda.",
  },
]

export function SupportServices() {
  return (
    <section id="services" className="scroll-mt-24 bg-muted/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeading
          eyebrow="Layanan Penunjang"
          title="Fasilitas & Layanan Medis Penunjang"
          description="Layanan medis modern yang mendukung keakuratan diagnosis, efektivitas pengobatan, hingga proses pemulihan."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          
          {/* Grid Layanan Medis Utama (2 Kolom) */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kartu Promo Medical Check-Up (MCU) */}
          <div className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-primary p-6 text-primary-foreground shadow-lg sm:p-8 lg:col-span-1">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/15 backdrop-blur-sm">
                <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              
              <h3 className="mt-4 text-xl font-extrabold tracking-tight">
                Paket Medical Check-Up (MCU)
              </h3>
              
              <p className="mt-2 text-xs leading-relaxed text-primary-foreground/85 sm:text-sm">
                Layanan pemeriksaan kesehatan menyeluruh untuk perorangan maupun perusahaan. Deteksi dini risiko penyakit dan jaga kesehatan Anda sejak sekarang.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span>Pilihan Paket Dasar, Eksekutif &amp; Premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span>Hasil keluar di hari yang sama &amp; Konsultasi Dokter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span>Penawaran khusus untuk grup &amp; perusahaan</span>
                </li>
              </ul>
            </div>

            <Button
              asChild
              variant="secondary"
              className="mt-8 w-full rounded-xl font-semibold shadow-md"
            >
              <a href="#book" className="flex items-center justify-center gap-2">
                <span>Daftar MCU Sekarang</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}