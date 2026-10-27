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
        border-2
        border-[#FBFBFB]
        text-white
      "
      style={{
        width: "116.5px",
        height: "116.5px",
        background,
        boxShadow: "5px 5px 0 #000000",
        fontSize: "24px",
      }}
    >
      {icon}
    </div>
  );
}