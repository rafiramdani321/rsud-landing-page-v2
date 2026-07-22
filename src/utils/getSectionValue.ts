import type { PageSection } from "../types/public";

export function getSectionValue(section: PageSection, key: string): string {
  return section.settings.find((s) => s.key === key)?.value ?? "";
}
