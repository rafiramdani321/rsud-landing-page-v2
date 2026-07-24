export interface NavItem {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
}

export interface NavList {
  id: string;
  label: string;
  url: string | null;
  page: NavItem | null;
  children: NavList[];
}
