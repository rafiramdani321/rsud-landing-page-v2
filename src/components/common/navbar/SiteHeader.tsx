"use client";

import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { NAV_LINKS, HOSPITAL } from "#/libs/hospital-data.ts";
import { Button } from "#components/ui/button.tsx";
import logoRsud from "#/assets/logo-rsud.webp";
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${HOSPITAL.fullName} home`}
        >
          <img
            src={logoRsud}
            alt="Logo RSUD"
            className="w-10 h-10 lg:h-11 lg:w-11 object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-foreground">
              {HOSPITAL.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-secondary">
              {HOSPITAL.fullName}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href="#book">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-card xl:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 mb-2 w-full sm:hidden">
              <a href="#book" onClick={() => setOpen(false)}>
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
