import { getSectionValue } from "../../utils/getSectionValue";
import type { PageSection } from "../../types/public";

export function HeroBanner({ section }: { section: PageSection }) {
  const title = getSectionValue(section, "title");
  const subtitle = getSectionValue(section, "subtitle");
  const ctaLabel = getSectionValue(section, "cta_label");
  const ctaUrl = getSectionValue(section, "cta_url");
  const alignment = getSectionValue(section, "alignment") || "left";
  // background_image: media ID — nanti diupgrade jadi <img> setelah endpoint media publik/URL langsung siap

  const alignClass =
    alignment === "center"
      ? "text-center items-center"
      : alignment === "right"
        ? "text-right items-end"
        : "text-left items-start";

  return (
    <section
      className={`flex flex-col gap-4 py-20 px-6 bg-primary/5 ${alignClass}`}
    >
      {title && (
        <h1 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
          {title}
        </h1>
      )}
      {subtitle && <p className="text-muted-foreground max-w-xl">{subtitle}</p>}
      {ctaLabel && ctaUrl && (
        <a
          href={ctaUrl}
          className="inline-block mt-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {ctaLabel}
        </a>
      )}
    </section>
  );
}
