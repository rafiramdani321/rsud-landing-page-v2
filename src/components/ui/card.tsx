import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../libs/utils";

const cardVariants = cva(
  [
    "rounded-3xl",
    "border",
    "transition-all",
    "duration-300",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-card border-border shadow-sm",

        elevated:
          "bg-card border-border shadow-lg hover:-translate-y-1 hover:shadow-xl",

        outline:
          "bg-card border-2 border-border",

        soft:
          "bg-primary-50 border-primary-100",

        glass:
          "glass border-white/20",

        feature:
          "bg-card border-border shadow-lg hover:-translate-y-2 hover:shadow-xl overflow-hidden",
      },

      padding: {
        none: "p-0",

        sm: "p-4",

        default: "p-6",

        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({
  className,
  variant,
  padding,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          padding,
        }),
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-6 pb-0",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-6",
        className
      )}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center p-6 pt-0",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};