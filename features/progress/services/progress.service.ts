import { db } from "@/lib/firebase/firebase";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import { getLessonsByModule } from "@/features/learn/services/learn.service";

import type {
  LessonProgress,
  ModuleProgress,
} from "../types/progress.types";

import { calculateProgress } from "../utils/progress-calculator";
import { isLessonUnlocked } from "../utils/unlock-rules";

export async function getCompletedLessons(
  uid: string,
): Promise<string[]> {
  const snapshot = await getDoc(
    doc(db, "users", uid),
  );

  if (!snapshot.exists()) {
    throw new Error(
      "User not found.",
    );
  }

  const data = snapshot.data();

  return Array.isArray(
    data.completedLessons,
  )
    ? data.completedLessons
    : [];
}

export async function getModuleProgress(
  uid: string,
  moduleId: string,
): Promise<ModuleProgress> {
  const lessons =
    await getLessonsByModule(
      moduleId,
    );

  const completedLessonIds =
    await getCompletedLessons(uid);

  const completedLessonOrders =
    lessons
      .filter((lesson) =>
        completedLessonIds.includes(
          lesson.id ?? "",
        ),
      )
      .map((lesson) => lesson.order);

  const lessonProgress: LessonProgress[] =
    lessons.map((lesson) => ({
      lesson,

      completed:
        completedLessonIds.includes(
          lesson.id ?? "",
        ),

      unlocked:
        isLessonUnlocked(
          lesson.order,
          completedLessonOrders,
        ),
    }));

  const completedLessons =
    lessonProgress.filter(
      (lesson) => lesson.completed,
    ).length;

  return {
    totalLessons:
      lessons.length,

    completedLessons,

    progressPercentage:
      calculateProgress(
        completedLessons,
        lessons.length,
      ),

    lessons: lessonProgress,
  };
}