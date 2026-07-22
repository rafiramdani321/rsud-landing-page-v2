// components/AppBreadcrumb.tsx
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "#components/ui/breadcrumb.tsx";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { cn } from "../../libs/utils";

const AppBreadcrumb = ({ className }: { className?: string }) => {
  const crumbs = useBreadcrumbs();

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <BreadcrumbItem key={crumb.href}>
              {isLast || !crumb.clickable ? (
                <BreadcrumbPage
                  className={cn(
                    "text-[13px] text-foreground",
                    !crumb.clickable && !isLast ? "text-muted-foreground/40" : "font-semibold text-primary"
                  )}
                >
                  {crumb.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild className="text-[13px] hover:text-primary">
                  <Link to={crumb.href}>{crumb.label}</Link>
                </BreadcrumbLink>
              )}
              {!isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;