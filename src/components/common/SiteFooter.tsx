"use client"

import { Phone, MessageCircle, Mail, MapPin, Navigation } from "lucide-react"
import { HOSPITAL, NAV_LINKS } from "#/libs/hospital-data.ts"
import { Button } from "#/components/ui/button.tsx"
import logoRsud from "#/assets/logo-rsud.webp"

const ACCREDITATIONS = ["KARS Paripurna", "Mitra BPJS", "ISO 9001", "Prudential", "AXA", "Allianz"]

const SOCIALS = [
  { src: "src/assets/icons/facebook.svg", label: "Facebook" },
  { src: "src/assets/icons/instagram.svg", label: "Instagram" },
  { src: "src/assets/icons/x.svg", label: "X" },  
  { src: "src/assets/icons/youtube.svg", label: "YouTube" },
]

export function SiteFooter() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(HOSPITAL.address)}&z=15&output=embed`

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          
          {/* Brand + Kontak */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoRsud}
                alt={`Logo ${HOSPITAL.name}`}
                className="h-10 w-10 object-contain lg:h-11 lg:w-11"
              />
              <span className="text-lg font-bold leading-tight">{HOSPITAL.name}</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-primary-foreground/80 sm:text-sm">
              Memberikan pelayanan kesehatan berstandar tinggi dengan penuh kepedulian bagi seluruh keluarga sejak tahun 1998.
            </p>
            <ul className="mt-5 space-y-3 text-xs sm:text-sm">
              <li>
                <a 
                  href={HOSPITAL.emergencyPhoneHref} 
                  className="flex items-center gap-2.5 transition-colors hover:text-primary-foreground/70 hover:underline"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>IGD 24 Jam: {HOSPITAL.emergencyPhone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={HOSPITAL.whatsappHref} 
                  className="flex items-center gap-2.5 transition-colors hover:text-primary-foreground/70 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {HOSPITAL.whatsapp}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${HOSPITAL.email}`} 
                  className="flex items-center gap-2.5 transition-colors hover:text-primary-foreground/70 hover:underline"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Email: {HOSPITAL.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{HOSPITAL.address}</span>
              </li>
            </ul>
          </div>

          {/* Navigasi / Sitemap */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/85 transition-colors hover:text-primary-foreground hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Akreditasi & Mitra */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
              Akreditasi &amp; Mitra
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ACCREDITATIONS.map((a) => (
                <li
                  key={a}
                  className="rounded-lg bg-primary-foreground/10 px-2.5 py-1.5 text-[11px] font-semibold text-primary-foreground/90 backdrop-blur-sm"
                >
                  {a}
                </li>
              ))}
            </ul>

            {/* Media Sosial */}
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-foreground/10 transition-all hover:bg-primary-foreground hover:text-primary hover:scale-105"
                >
                  <img src={s.src} alt="" width={18} height={18} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Peta Lokasi */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
              Lokasi Kami
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-primary-foreground/20 shadow-sm">
              <iframe
                title={`Peta Lokasi ${HOSPITAL.fullName}`}
                src={mapSrc}
                className="h-36 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Button asChild variant="secondary" className="mt-3.5 w-full rounded-xl font-semibold">
              <a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(HOSPITAL.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                <span>Petunjuk Arah</span>
              </a>
            </Button>
          </div>

        </div>

        {/* Hak Cipta & Legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {HOSPITAL.fullName}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex gap-5">
            <a href="#top" className="transition-colors hover:text-primary-foreground hover:underline">
              Kebijakan Privasi
            </a>
            <a href="#top" className="transition-colors hover:text-primary-foreground hover:underline">
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}