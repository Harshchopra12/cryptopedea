import { db } from "@/lib/firebase/firebase";

import {
  arrayUnion,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";

export async function completeLesson(
  uid: string,
  lessonId: string,
) {
  console.log("UID:", uid);
  console.log("LESSON:", lessonId);

  await updateDoc(
    doc(db, "users", uid),
    {
      completedLessons: arrayUnion(
        lessonId,
      ),
      xp: increment(20),
    },
  );

  console.log("FIRESTORE UPDATED");
}