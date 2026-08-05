import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`
        w-full
        px-8
        xl:px-10
        2xl:px-14
        ${className}
      `}
    >
      {children}
    </div>
  );
}