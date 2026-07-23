import { Sparkles } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}