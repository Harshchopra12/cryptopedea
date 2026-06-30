import { db } from "@/lib/firebase/firebase";

import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";

export async function completeLesson(
  uid: string,
  lessonId: string,
): Promise<void> {
  const userRef = doc(
    db,
    "users",
    uid,
  );

  const userSnapshot =
    await getDoc(userRef);

  if (!userSnapshot.exists()) {
    throw new Error(
      "User not found.",
    );
  }

  const userData =
    userSnapshot.data();

  const completedLessons =
    Array.isArray(
      userData.completedLessons,
    )
      ? userData.completedLessons
      : [];

  if (
    completedLessons.includes(
      lessonId,
    )
  ) {
    console.log(
      "Lesson already completed.",
    );
    return;
  }

  await updateDoc(
    userRef,
    {
      completedLessons: arrayUnion(
        lessonId,
      ),
      xp: increment(20),
    },
  );
}