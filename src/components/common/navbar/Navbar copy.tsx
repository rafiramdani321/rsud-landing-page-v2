import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePublicNavItems } from "../../../hooks/usePublicNavItems";
import { Container } from "../Container";
import logoRsud from "#/assets/logo-rsud.webp";
import { cn } from "../../../libs/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "#components/ui/navigation-menu.tsx";
import { useActiveNav } from "../../../hooks/useActiveNav";
import type { NavTreeNode } from "../../../types/publicNav.types";

function NavSkeleton() {
  return (
    <div className="flex items-center gap-10">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-4 w-24 rounded bg-muted/50 animate-pulse" />
      ))}
    </div>
  );
}

function DropDownLink({
  node,
  isActive,
}: {
  node: NavTreeNode;
  isActive: boolean;
}) {
  const targetUrl = node.url ? node.url : `/${node.page?.slug}`;
  const className = cn(
    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium",
    isActive ? "text-primary-600 bg-primary-50/50" : "text-slate-600",
  );

  if (node.url) {
    return (
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {node.label}
      </a>
    );
  }

  return (
    <Link to={targetUrl} className={className}>
      {node.label}
    </Link>
  );
}

export const Navbar = ({
  scrolled,
  menuOpen,
  setMenuOpen,
  isTransparent,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  isTransparent: boolean;
}) => {
  const { data: tree, isLoading } = usePublicNavItems();
  const { pathname } = useLocation();
  const { isLinkActive } = useActiveNav();
  const [openId, setOpenId] = useState<string | null>(null);

  const isTreeItemActive = (node: NavTreeNode): boolean => {
    if (node.page?.slug && isLinkActive(`/${node.page.slug}`)) {
      return true;
    }
    if (node.url && pathname === node.url) {
      return true;
    }
    if (node.children && node.children.length > 0) {
      return node.children.some((child) => isTreeItemActive(child));
    }
    return false;
  };

  return (
    <nav className="py-4">
      <Container>
        <div
          className={cn(
            "flex h-18 items-center justify-between rounded-2xl transition-all duration-500",
            scrolled
              ? "glass border border-white/30 shadow-2xl px-8 h-20"
              : "px-2",
          )}
        >
          <div className="flex items-center">
            <Link
              to={"/"}
              className="flex items-center gap-3 shrink-0 xl:mr-14"
            >
              {/* Logo section tetap sama */}
              <img
                src={logoRsud}
                alt="Logo RSUD"
                className="w-10 h-10 lg:w-11 lg:h-11 object-contain"
              />
              <div className="leading-tight">
                <h2
                  className={cn(
                    "text-lg font-extrabold tracking-tight transition-colors",
                    isTransparent ? "text-white" : "text-primary-900",
                  )}
                >
                  RSUD Karawang
                </h2>
                <p
                  className={cn(
                    "text-xs transition-colors",
                    isTransparent ? "text-white/70" : "text-muted-foreground",
                  )}
                >
                  Rumah Sakit Umum Daerah
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-10">
              {isLoading ? (
                <NavSkeleton />
              ) : (
                <NavigationMenu className="relative" viewport={false}>
                  <NavigationMenuList className="gap-8">
                    <NavigationMenuItem>
                      <Link
                        to="/"
                        className={cn(
                          "nav-link text-[15px] font-semibold transition-colors",
                          isTransparent
                            ? "text-white hover:text-white"
                            : "text-slate-700 hover:text-primary-500",
                          pathname === "/" && "active",
                        )}
                      >
                        Beranda
                      </Link>
                    </NavigationMenuItem>

                    {tree?.map((node) => {
                      const isDropdown =
                        node.children && node.children.length > 0;

                      if (!isDropdown) {
                        return (
                          <NavigationMenuItem key={node.id}>
                            {node.url ? (
                              <a
                                href={node.url}
                                className={cn(
                                  "nav-link text-[15px] font-semibold transition-colors",
                                  isTransparent
                                    ? "text-white"
                                    : "text-slate-700",
                                  pathname === node.url && "active", // Menambahkan status aktif pada link external biasa
                                )}
                              >
                                {node.label}
                              </a>
                            ) : (
                              <Link
                                to={`/${node.page?.slug}`}
                                className={cn(
                                  "nav-link text-[15px] font-semibold transition-colors",
                                  isTransparent
                                    ? "text-white hover:text-white"
                                    : "text-slate-700 hover:text-primary-500",
                                  isLinkActive(`/${node.page?.slug}`) &&
                                    "active",
                                )}
                              >
                                {node.label}
                              </Link>
                            )}
                          </NavigationMenuItem>
                        );
                      }

                      const hasActiveChild = isTreeItemActive(node);

                      return (
                        <NavigationMenuItem key={node.id}>
                          <NavigationMenuTrigger
                            className={cn(
                              "nav-link h-auto bg-transparent p-0 text-[15px] font-semibold shadow-none hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors",
                              isTransparent ? "text-white" : "text-slate-700",
                              // JIKA ada child yang aktif, sematkan class 'active'
                              hasActiveChild && "active text-primary-500",
                            )}
                          >
                            {node.label}
                          </NavigationMenuTrigger>

                          <NavigationMenuContent>
                            <ul className="grid w-[240px] gap-1 p-2 bg-white rounded-xl border border-slate-100 shadow-xl">
                              {node.children.map((child) => {
                                const hasSubChildren =
                                  child.children && child.children.length > 0;
                                const isChildActive = child.url
                                  ? pathname === child.url
                                  : isLinkActive(`/${child.page?.slug}`);

                                return (
                                  <li
                                    key={child.id}
                                    className="relative group/sub"
                                  >
                                    <DropDownLink
                                      node={child}
                                      isActive={
                                        isChildActive || isTreeItemActive(child)
                                      }
                                    />

                                    {hasSubChildren && (
                                      <ul className="absolute left-full top-0 ml-1 min-w-[200px] hidden group-hover/sub:block bg-white border border-slate-100 rounded-xl shadow-xl p-2 z-50">
                                        {child.children.map((grandChild) => (
                                          <li key={grandChild.id}>
                                            <DropDownLink
                                              node={grandChild}
                                              isActive={
                                                grandChild.url
                                                  ? pathname === grandChild.url
                                                  : isLinkActive(
                                                      `/${grandChild.page?.slug}`,
                                                    )
                                              }
                                            />
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>

          <div>
            <h1>Button</h1>
          </div>
        </div>
      </Container>
    </nav>
  );
};
