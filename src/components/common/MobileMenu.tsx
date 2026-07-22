import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { Phone } from "lucide-react";

import { Button } from "#components/ui/button.tsx";
import { usePublicNavItems } from "../../hooks/usePublicNavItems";
import { useActiveNav } from "../../hooks/useActiveNav";
import { cn } from "../../libs/utils";

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M3 7H11M8 4L11 7L8 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuSection = ({
  title,
  items,
  onClose,
}: {
  title: string;
  items: { title: string; href: string }[];
  onClose: () => void;
}) => {
  const { isLinkActive } = useActiveNav();

  return (
    <div>
      <p
        className={cn(
          "px-4 pt-4 pb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70",
          isGroupActive(items ?? []) && "text-primary",
        )}
      >
        {title}
      </p>
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClose}
          className={cn(
            "flex items-center gap-3 px-4 py-3 text-[13px] font-medium text-foreground border-b border-border/70 hover:bg-primary/10 hover:text-primary transition-colors",
            isLinkActive(item.href) && "bg-primary/10 text-primary",
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
          {item.title}
        </Link>
      ))}
    </div>
  );
};

const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  navHeight = 72,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  navHeight?: number;
}) => {
  const { data: tree } = usePublicNavItems();
  const { isLinkActive } = useActiveNav();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (!menuOpen) return null;

  const nodes: PublicNavNode[] = tree ?? [];

  return createPortal(
    <div
      style={{ top: navHeight }}
      className="fixed inset-x-0 bottom-0 z-9999 flex flex-col lg:hidden bg-background"
    >
      <div className="flex-1 overflow-y-auto">
        {/* "Beranda" tetap hardcoded — konsisten sama Navbar desktop */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className={cn(
            "flex items-center justify-between px-4 py-4 font-semibold text-[14px] hover:bg-primary/10 transition-colors",
            isLinkActive("/", true) ? "bg-primary/10 text-primary" : "text-foreground",
          )}
        >
          Beranda
        </Link>

        {nodes.map((node) => {
          const isDropdown = node.children.length > 0;

          if (!isDropdown) {
            if (!node.href) return null; // nav item misconfigured, gak ada tujuan

            if (isExternal(node.href)) {
              return (
                <a
                  key={node.id}
                  href={node.href}
                  target={node.target === "_blank" ? "_blank" : undefined}
                  rel={node.target === "_blank" ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-4 font-semibold text-[14px] text-foreground hover:bg-primary/10 transition-colors"
                >
                  {node.label}
                  <ChevronIcon />
                </a>
              );
            }

            return (
              <Link
                key={node.id}
                to={node.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-4 font-semibold text-[14px] hover:bg-primary/10 transition-colors",
                  isLinkActive(node.href) ? "bg-primary/10 text-primary" : "text-foreground",
                )}
              >
                {node.label}
                <ChevronIcon />
              </Link>
            );
          }

          const items = node.children
            .filter((child) => Boolean(child.href))
            .map((child) => ({ title: child.label, href: child.href! }));

          if (items.length === 0) return null; // dropdown kosong (semua anak misconfigured), skip

          return (
            <MenuSection
              key={node.id}
              title={node.label}
              items={items}
              onClose={() => setMenuOpen(false)}
            />
          );
        })}

        <div className="p-4 pb-8">
          <Button
            variant="secondary"
            className="w-full bg-primary/10 text-primary border border-primary/20 rounded-full py-3 font-semibold uppercase text-sm"
            size="sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            (0267) 640444, 640555
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MobileMenu;