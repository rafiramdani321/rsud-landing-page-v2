import { cn } from "../../libs/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center"
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-extrabold lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}