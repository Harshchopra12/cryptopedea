import { db } from "@/lib/firebase/firebase";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import type { Quiz } from "../types/quiz.types";

export async function getQuizByModule(
  moduleId: string,
): Promise<Quiz | null> {
  const snapshot = await getDoc(
    doc(db, "quizzes", moduleId),
  );

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<
      Quiz,
      "id"
    >),
  };
}