import type { ReactNode } from "react";

interface SocialButtonProps {
  background: string;
  icon: ReactNode;
}

export default function SocialButton({
  background,
  icon,
}: SocialButtonProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        border-[3px]
        border-[#000926]
        text-white
      "
      style={{
        width: "74px",
        height: "74px",
        background,
        boxShadow: "4px 4px 0 #000926",
        fontSize: "24px",
      }}
    >
      {icon}
    </div>
  );
}