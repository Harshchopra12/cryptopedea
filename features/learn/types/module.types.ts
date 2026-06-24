export interface LearningModule {
  id?: string;
  title: string;
  description: string;
  pathId: string;
  estimatedMinutes: number;
  xpReward: number;
  isLocked: boolean;
  order: number;
}