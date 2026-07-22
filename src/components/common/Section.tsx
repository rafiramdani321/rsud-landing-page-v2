import { cn } from "../../libs/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "default" | "muted" | "primary";
}

export function Section({
  className,
  children,
  background = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "section-padding relative",

        background === "default" && "bg-background",

        background === "muted" && "bg-muted",

        background === "primary" &&
          "bg-primary text-primary-foreground",

        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}