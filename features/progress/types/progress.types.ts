import type { Lesson } from "@/features/learn/types/lesson.types";

export interface LessonProgress {
  lesson: Lesson;

  completed: boolean;

  unlocked: boolean;
}

export interface ModuleProgress {
  totalLessons: number;

  completedLessons: number;

  progressPercentage: number;

  lessons: LessonProgress[];
}