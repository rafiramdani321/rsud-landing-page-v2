import { getSectionValue } from "../../utils/getSectionValue";
import type { PageSection } from "../../types/public";

export function TextSection({ section }: { section: PageSection }) {
  const heading = getSectionValue(section, "heading");
  const content = getSectionValue(section, "content");

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      {heading && (
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {heading}
        </h2>
      )}
      {content && (
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </section>
  );
}
