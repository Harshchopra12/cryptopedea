import SocialButton from "./social-button";

export default function SocialLinks() {
  return (
    <div
      className="flex w-full items-center justify-center"
      style={{
        height: "56px",
        marginTop: "50px",
        gap: "20px",
      }}
    >
      <SocialButton
        background="#1A1D20"
        icon="𝕏"
      />

      <SocialButton
        background="#0581E9"
        icon="◉"
      />

      <SocialButton
        background="#FF5A5F"
        icon="◎"
      />

      <SocialButton
        background="#421AD3"
        icon="➤"
      />
    </div>
  );
}