import { useState } from "react";
import { Phone, MessageCircle, Globe } from "lucide-react";
import { HOSPITAL } from "#/libs/hospital-data.ts";

export function TopBar() {
  const [lang, setLang] = useState<"ID" | "EN">("EN");

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
        <a
          href={HOSPITAL.emergencyPhoneHref}
          className="group flex items-center gap-2 rounded-full"
          aria-label={`Emergency 24/7 hotline ${HOSPITAL.emergencyPhone}`}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive px-2.5 py-1 text-xs font-bold text-destructive-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive-foreground opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive-foreground" />
            </span>
            EMERGENCY 24/7
          </span>
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="font-semibold tracking-wide group-hover:underline">
            {HOSPITAL.emergencyPhone}
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href={HOSPITAL.whatsappHref}
            className="hidden items-center gap-1.5 hover:underline sm:flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Center
          </a>
          <div
            className="flex items-center gap-1.5"
            role="group"
            aria-label="Language switcher"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {(["ID", "EN"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition-colors ${
                  lang === code
                    ? "bg-primary-foreground text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
