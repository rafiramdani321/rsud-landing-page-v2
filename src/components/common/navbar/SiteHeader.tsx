"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, CalendarCheck, ChevronDown } from "lucide-react"
import { NAV_LINKS, HOSPITAL } from "#/libs/hospital-data.ts"
import { Button } from "#/components/ui/button.tsx"
import logoRsud from "#/assets/logo-rsud.webp"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)

  const toggleGroup = (label: string) => {
    setExpandedGroup((prev) => (prev === label ? null : label))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo & Branding */}
        <Link
          to="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label={`Beranda ${HOSPITAL.fullName}`}
        >
          <img
            src={logoRsud}
            alt={`Logo ${HOSPITAL.name}`}
            className="h-10 w-10 object-contain lg:h-11 lg:w-11"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold text-foreground sm:text-lg">
              {HOSPITAL.name}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/70 sm:text-[11px]">
              {HOSPITAL.fullName}
            </span>
          </span>
        </Link>

        {/* Navigasi Desktop (dengan Dropdown Hover) */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigasi Utama">              
          <Link
            to={"/"}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Beranda
          </Link>
          {NAV_LINKS.map((link) => {
            if ("items" in link && link.items) {
              return (
                <div key={link.label} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                  </button>

                  {/* Menu Dropdown Desktop */}
                  <div className="absolute left-0 top-full hidden w-56 rounded-2xl border border-border/80 bg-card p-2 shadow-xl backdrop-blur-md group-hover:block">
                    {link.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="block rounded-xl px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.label}
                to={link.href ?? "#"}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Akses Cepat & Toggle Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button asChild className="hidden rounded-xl font-semibold shadow-sm sm:inline-flex">
            <Link to="/pelayanan/pendaftaran" className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              <span>Buat Janji Temu</span>
            </Link>
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-foreground transition-colors hover:bg-accent xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Buka menu navigasi"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navigasi Mobile (dengan Accordion Dropdown) */}
      {open && (
        <nav
          className="max-h-[80vh] overflow-y-auto border-t border-border/80 bg-card px-4 py-3 shadow-lg xl:hidden"
          aria-label="Navigasi Seluler"
        >
          <div className="mx-auto flex max-w-7xl flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              if ("items" in link && link.items) {
                const isExpanded = expandedGroup === link.label
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleGroup(link.label)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-accent"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Submenu Accordion Mobile */}
                    {isExpanded && (
                      <div className="ml-3 my-1 border-l-2 border-primary/20 pl-3 space-y-1">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.label}
                  to={link.href ?? "#"}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-accent"
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Tombol Buat Janji Temu Versi Mobile */}
            <div className="pt-2">
              <Button asChild className="w-full rounded-xl font-semibold shadow-sm sm:hidden">
                <Link to="/pelayanan/pendaftaran" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Buat Janji Temu</span>
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}