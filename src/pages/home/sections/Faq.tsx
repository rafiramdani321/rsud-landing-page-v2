"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQ_CATEGORIES } from "#/libs/hospital-data.ts"
import { SectionHeading } from "./SectionHeading"

export function Faq() {
  const [activeCat, setActiveCat] = useState(FAQ_CATEGORIES[0].category)
  const [openKey, setOpenKey] = useState<string | null>(`${FAQ_CATEGORIES[0].category}-0`)

  const current = FAQ_CATEGORIES.find((c) => c.category === activeCat) ?? FAQ_CATEGORIES[0]

  return (
    <section id="faq" className="scroll-mt-24 bg-muted/50 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeading
          eyebrow="Tanya Jawab (FAQ)"
          title="Pertanyaan yang Sering Diajukan"
          description="Temukan jawaban cepat mengenai pendaftaran, asuransi/BPJS, jam besuk, dan layanan gawat darurat kami."
        />

        {/* Tab Kategori FAQ */}
        <div 
          className="mt-8 flex flex-wrap justify-center gap-2" 
          role="tablist" 
          aria-label="Kategori Pertanyaan"
        >
          {FAQ_CATEGORIES.map((c) => {
            const isActive = activeCat === c.category
            return (
              <button
                key={c.category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCat(c.category)
                  setOpenKey(`${c.category}-0`)
                }}
                className={`rounded-full px-4 py-2 text-xs font-semibold sm:text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/80 bg-card text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {c.category}
              </button>
            )
          })}
        </div>

        {/* Daftar Akordeon FAQ */}
        <div className="mt-8 space-y-3">
          {current.items.map((item, i) => {
            const key = `${current.category}-${i}`
            const open = openKey === key
            const contentId = `faq-answer-${i}`

            return (
              <div 
                key={key} 
                className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenKey(open ? null : key)}
                    aria-expanded={open}
                    aria-controls={contentId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-foreground transition-colors hover:text-primary sm:px-6"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {open && (
                  <div
                    id={contentId}
                    className="border-t border-border/40 px-5 pb-5 pt-3 text-xs leading-relaxed text-muted-foreground sm:px-6 sm:text-sm"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}