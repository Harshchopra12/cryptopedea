import type { QuizQuestion } from "./question.types";

export interface Quiz {
  id?: string;

  moduleId: string;

  title: string;

  description: string;

  passingScore: number;

  xpReward: number;

  questions: QuizQuestion[];
}