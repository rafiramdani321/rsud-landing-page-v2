import type { PageSection } from "../types/public";
import { HeroBanner } from "./sections/HeroBanner";
import { TextSection } from "./sections/TextSection";

const SECTION_COMPONENTS: Record<
  string,
  React.ComponentType<{ section: PageSection }>
> = {
  hero_banner: HeroBanner,
  text_section: TextSection,
};

export function SectionRenderer({ section }: { section: PageSection }) {
  const Component = SECTION_COMPONENTS[section.component.code];

  if (!Component) {
    // fallback aman kalau ada component baru yang belum dibuatkan tampilan visualnya
    if (import.meta.env.DEV) {
      return (
        <div className="p-6 border border-dashed border-yellow-400 bg-yellow-50 text-xs text-yellow-800">
          Belum ada tampilan untuk component:{" "}
          <strong>{section.component.code}</strong>
        </div>
      );
    }
    return null;
  }

  return <Component section={section} />;
}
