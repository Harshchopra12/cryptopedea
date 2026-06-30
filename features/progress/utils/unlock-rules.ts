export function isLessonUnlocked(
  lessonOrder: number,
  completedLessonOrders: number[],
): boolean {
  // First lesson is always unlocked
  if (lessonOrder === 1) {
    return true;
  }

  // Previous lesson must be completed
  return completedLessonOrders.includes(
    lessonOrder - 1,
  );
}

export function isQuizUnlocked(
  totalLessons: number,
  completedLessons: number,
): boolean {
  return completedLessons === totalLessons;
}

export function isModuleUnlocked(
  previousModuleCompleted: boolean,
  moduleOrder: number,
): boolean {
  // First module is always unlocked
  if (moduleOrder === 1) {
    return true;
  }

  return previousModuleCompleted;
}