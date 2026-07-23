"use client"

import { useState } from "react"
import { Check, Clock, ArrowRight } from "lucide-react"
import { ROOMS } from "#/libs/hospital-data.ts"
import { SectionHeading } from "./SectionHeading"
import { Button } from "#/components/ui/button.tsx"

export function Inpatient() {
  const [activeId, setActiveId] = useState(ROOMS[0]?.id ?? "")
  const room = ROOMS.find((r) => r.id === activeId) ?? ROOMS[0]

  return (
    <section id="inpatient" className="scroll-mt-24 bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeading
          eyebrow="Rawat Inap"
          title="Layanan & Kelas Kamar Rawat Inap"
          description="Pilih berbagai pilihan kamar perawatan yang nyaman dengan transparansi tarif sesuai kebutuhan Anda."
        />

        {/* Room Filter Pills */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Kelas Kamar"
        >
          {ROOMS.map((r) => {
            const isSelected = activeId === r.id
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(r.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "border border-border/80 bg-card text-muted-foreground hover:border-primary/40 hover:bg-card hover:text-foreground"
                }`}
              >
                {r.name}
              </button>
            )
          })}
        </div>

        {/* Room Details Card Container */}
        {room && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="grid gap-0 lg:grid-cols-12 lg:items-center">
              
              {/* Gambar Ruangan */}
              <div className="relative h-64 w-full bg-muted sm:h-80 lg:col-span-5 lg:h-full lg:min-h-90">
                <img
                  src={room.image}
                  alt={`Interior ${room.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-bold text-foreground shadow-sm backdrop-blur-sm">
                  {room.name}
                </span>
              </div>

              {/* Detail & Fasilitas Ruangan */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-foreground">{room.name}</h3>
                    <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span>Jam Besuk: {room.visiting}</span>
                    </p>
                  </div>

                  {/* Daftar Fasilitas */}
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Fasilitas Ruangan
                    </p>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {room.facilities.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Harga & Tombol Pemesanan */}
                <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border/60 bg-muted/40 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">Estimasi Tarif / Malam</p>
                    <p className="text-xl font-extrabold text-primary">{room.price}</p>
                  </div>
                  <Button asChild className="rounded-xl px-5 font-semibold">
                    <a href="#book" className="flex items-center gap-1.5">
                      <span>Pesan Kamar</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}