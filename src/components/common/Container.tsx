import { cn } from "../../libs/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("container-app px-4 lg:px-20 xl:px-36", className)}
      {...props}
    >
      {children}
    </div>
  );
}
