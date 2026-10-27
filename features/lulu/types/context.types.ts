export interface LuluContext {
  userId?: string;

  guest: boolean;

  firstVisit: boolean;

  returningUser: boolean;

  currentPage: string;

  currentPath?: string;

  currentModule?: string;

  currentLesson?: string;

  xp: number;

  level: number;

  streak: number;

  completedLessons: number;

  completedModules: number;
}