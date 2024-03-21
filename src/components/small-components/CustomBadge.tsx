import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CustomBadgeProps {
  children?: ReactNode;
  icon?: JSX.Element;
  className?: string;
}

const CustomBadge = ({
  children = "Custom Badge",
  icon,
  className,
}: CustomBadgeProps) => {
  return (
    <div
      className={cn(
        "flex max-w-[10rem]  gap-x-2 bg-gradient-to-t from-[#EFFE93] rounded-lg from-80% to-[#fff] items-center justify-center  px-4 py-2 font-semibold text-[#7BB20A]",
        className
      )}
    >
      {icon}
      {children}
    </div>
  );
};

export default CustomBadge;
