import { ArrowUpRight } from "lucide-react";

import { cn } from "../../libs/utils";
import { Button } from "#components/ui/button.tsx";
import { Link } from "react-router-dom";

export const ColHeader = ({
  eyebrow,
  title,
  eyebrowClass,
  href,
}: {
  eyebrow: string;
  title: string;
  eyebrowClass: string;
  href?: string;
}) => (
  <div className="flex items-center justify-between mb-5">
    <div className="flex flex-col gap-1">
      <span
        className={cn(
          eyebrowClass
        )}
      >
        {eyebrow}
      </span>
      <h3 className="font-bold text-foreground text-base sm:text-2xl leading-snug">{title}</h3>
    </div>
    {href && (
      <Button variant="primary" size="xs" className="mt-1 rounded-full text-[10px]" asChild>
        <Link to={href}>
          Lihat Semua
          <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </Link>
      </Button>
    )}
  </div>
);
