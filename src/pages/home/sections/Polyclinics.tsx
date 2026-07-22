"use client";

import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { POLICLINICS, POLI_CATEGORIES } from "#/libs/hospital-data.ts";
import { SectionHeading } from "./SectionHeading";
import { Button } from "#components/ui/button.tsx";

export function Polyclinics() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? POLICLINICS
      : POLICLINICS.filter((p) => p.category === active);

  return (
    <section id="polyclinics" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Daftar Poli"
          title="Our Polyclinics"
          description="Comprehensive specialist clinics staffed by experienced doctors, organized for easy access."
        />

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter polyclinics"
        >
          {POLI_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((poli) => (
            <div
              key={poli.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <poli.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {poli.name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {poli.description}
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-secondary">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {poli.hours}
              </p>
              <Button
                asChild
                variant="ghost"
                className="mt-3 justify-start px-0 text-primary hover:bg-transparent"
              >
                <a href="#doctors">
                  View Doctors
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
