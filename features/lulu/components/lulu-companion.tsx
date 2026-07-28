"use client";

import LuluBubble from "./lulu-bubble";
import { useLulu } from "../hooks/use-lulu";

export default function LuluCompanion() {
  const lulu = useLulu();

  return (
    <LuluBubble
      message={lulu.message}
    />
  );
}