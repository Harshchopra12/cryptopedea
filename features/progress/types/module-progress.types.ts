import type { LearningModule } from "@/features/learn/types/module.types";

export interface ModuleProgress {
  module: LearningModule;

  completed: boolean;

  unlocked: boolean;
}