"use client"

import { Button } from "#/components/ui/button.tsx"
import { Briefcase, Heart, GraduationCap, ArrowRight } from "lucide-react"
import imageCareer from "#/assets/images/careers.png"

const PERKS = [
  { icon: Heart, label: "Budaya kerja ramah & berorientasi pada pasien" },
  { icon: GraduationCap, label: "Pelatihan & pengembangan karier berkelanjutan" },
  { icon: Briefcase, label: "Tunjangan kompetitif & jenjang karier jelas" },
]

export function Careers() {
  return (
    <section id="careers" className="scroll-mt-24 bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg md:grid-cols-2">
          
          {/* Sisi Konten Teks */}
          <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Rekrutmen & Karier
              </span>
              <h2 className="mt-2 text-balance text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
                Kembangkan Karier Anda di Dunia Kesehatan Bersama Kami
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Bergabunglah dengan tim yang mengedepankan empati dan keunggulan medis. Kami mencari profesional berdedikasi yang siap memberikan dampak positif bagi kehidupan pasien.
              </p>

              {/* Badge Lowongan Kerja */}
              <div className="mt-5 inline-flex items-center gap-3.5 rounded-2xl bg-muted/70 p-3.5 border border-border/60">
                <span className="text-3xl font-black text-primary">3</span>
                <span className="text-xs font-semibold leading-tight text-foreground">
                  Posisi Medis &amp; Staf
                  <br />
                  <span className="text-muted-foreground font-normal">tersedia saat ini</span>
                </span>
              </div>

              {/* Keunggulan/Perks */}
              <ul className="mt-6 space-y-3">
                {PERKS.map((p) => (
                  <li key={p.label} className="flex items-center gap-3 text-xs font-medium text-foreground sm:text-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <p.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-xl px-6 font-semibold shadow-md shadow-primary/20">
                <a href="#careers" className="flex items-center gap-2">
                  <span>Lihat Lowongan Kerja</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          {/* Sisi Gambar (Presisi & Proporsional) */}
          <div className="relative min-h-70 w-full bg-muted md:min-h-full">
            <img
              src={imageCareer}
              alt="Tim tenaga medis rumah sakit berdiskusi bersama"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}