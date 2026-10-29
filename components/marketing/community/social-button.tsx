import type { ReactNode } from "react";

interface SocialButtonProps {
  icon: ReactNode;
  href: string;
  ariaLabel: string;
}

export default function SocialButton({
  icon,
  href,
  ariaLabel,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="relative shrink-0"
      style={{
        width: "116.5px",
        height: "116.5px",
      }}
    >
      {icon}
    </a>
  );
}
