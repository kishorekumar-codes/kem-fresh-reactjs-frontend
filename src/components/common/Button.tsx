import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}

export default function Button({ children, href, external = false, className = "" }: ButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={`btn ${className}`.trim()} {...externalProps}>
      {children}
    </a>
  );
}
