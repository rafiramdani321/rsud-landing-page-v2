export type SectionVisibility = "visible" | "hidden";

export interface PublicSectionSetting {
  key: string;
  value: unknown;
}

export interface PublicPageSection {
  id: string;
  title?: string | null;
  sortOrder: number;
  visibility: SectionVisibility;
  component: {
    code: string;
    name: string;
  };
  settings: PublicSectionSetting[]
}

export interface PublicPageBreadcrumb {
  id: string;
  title: string;
  slug: string;
}

export interface PublicPageDetail {
  id: string;
  title: string;
  slug: string;
  summary?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  sections: PublicPageSection[]
  breadcrumb: PublicPageBreadcrumb[]
}