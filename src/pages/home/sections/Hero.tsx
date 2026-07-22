"use client";

import { useState } from "react";
import {
  Search,
  Stethoscope,
  CalendarDays,
  Siren,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";
import { POLICLINICS, WEEKDAYS, HOSPITAL } from "#/libs/hospital-data.ts";
import { Button } from "#/components/ui/button.tsx";
import rsudHeroImage from "#/assets/images/rsud_karawang.png";

type Tab = "doctor" | "schedule" | "emergency";

const TABS: { id: Tab; label: string; icon: typeof Search }[] = [
  { id: "doctor", label: "Find Doctor", icon: Stethoscope },
  { id: "schedule", label: "Check Schedule", icon: CalendarDays },
  { id: "emergency", label: "Emergency", icon: Siren },
];

const fieldClass =
  "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring";

export function Hero() {
  const [tab, setTab] = useState<Tab>("doctor");

  return (
    <section id="top" className="relative overflow-hidden bg-card">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            KARS Accredited &middot; Trusted since 1998
          </span>
          <h1 className="mt-5 text-pretty text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Memberikan Pelayanan Kesehatan Terbaik Untuk Semua
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Memberikan layanan kesehatan terbaik, profesional, dan terpercaya
            untuk masyarakat Kabupaten Karawang.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#book">Book Appointment</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#doctors">Find a Doctor</a>
            </Button>
          </div>
          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4">
            {[
              { icon: Clock, value: "24/7", label: "Emergency Care" },
              { icon: Stethoscope, value: "120+", label: "Specialists" },
              { icon: Award, value: "25+", label: "Years of Service" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-background p-3"
              >
                <stat.icon
                  className="h-5 w-5 text-secondary"
                  aria-hidden="true"
                />
                <dt className="mt-1.5 text-2xl font-bold text-foreground">
                  {stat.value}
                </dt>
                <dd className="text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src={rsudHeroImage}
              alt="Friendly doctors and nurses in a modern hospital lobby"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quick search floating widget */}
      <div className="mx-auto max-w-7xl px-4 pb-12 lg:-mt-10 lg:pb-16">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-lg md:p-6">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Quick search"
          >
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? t.id === "emergency"
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <t.icon className="h-4 w-4" aria-hidden="true" />
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5">
            {tab === "doctor" && (
              <form
                className="grid gap-3 md:grid-cols-[1fr_1fr_auto]"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="doctor-name">
                  Doctor name
                </label>
                <input
                  id="doctor-name"
                  className={fieldClass}
                  placeholder="Search by doctor name"
                />
                <label className="sr-only" htmlFor="doctor-specialty">
                  Specialty
                </label>
                <select
                  id="doctor-specialty"
                  className={fieldClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select specialty
                  </option>
                  {POLICLINICS.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <Button type="submit" className="h-11">
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Search
                </Button>
              </form>
            )}

            {tab === "schedule" && (
              <form
                className="grid gap-3 md:grid-cols-[1fr_1fr_auto]"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="schedule-poli">
                  Polyclinic
                </label>
                <select
                  id="schedule-poli"
                  className={fieldClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select polyclinic
                  </option>
                  {POLICLINICS.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <label className="sr-only" htmlFor="schedule-day">
                  Day
                </label>
                <select
                  id="schedule-day"
                  className={fieldClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select day
                  </option>
                  {WEEKDAYS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <Button type="submit" className="h-11">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Check
                </Button>
              </form>
            )}

            {tab === "emergency" && (
              <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-destructive/10 p-4 md:flex-row md:items-center">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
                    <Siren className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Need urgent help right now?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Our Emergency Department (IGD) is open 24/7 with ambulance
                      dispatch.
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="destructive"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <a href={HOSPITAL.emergencyPhoneHref}>
                    <Siren className="h-4 w-4" aria-hidden="true" />
                    Call {HOSPITAL.emergencyPhone}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
