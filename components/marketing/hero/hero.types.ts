export type HeroDecorationName =
  | "ethereum"
  | "solana"
  | "bitcoin"
  | "dollar"
  | "arcadeMachine"
  | "chain"
  | "doubleArrowTop"
  | "doubleArrowBottom";

export interface HeroDecoration {
  asset: HeroDecorationName;

  src: string;
  alt: string;

  top: number;
  left: number;

  width: number;
  height: number;

  rotation?: number;

  zIndex: number;
}

export interface HeroAnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}