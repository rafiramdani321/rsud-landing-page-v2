export interface NavItemPage {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
}

export interface NavTreeNode {
  id: string;
  label: string;
  url: string | null;
  page: NavItemPage | null;
  children: NavTreeNode[];
}
