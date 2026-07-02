import { db } from "@/lib/firebase/firebase";
import { getFoundationModules } from "@/features/learn/services/learn.service";

import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";

export async function awardXP(
  uid: string,
  amount: number,
): Promise<void> {
  const userRef = doc(
    db,
    "users",
    uid,
  );

  await updateDoc(userRef, {
    xp: increment(amount),
  });
}

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

  await updateDoc(userRef, {
    completedLessons: arrayUnion(
      lessonId,
    ),
  });

  await awardXP(uid, 20);
}

export async function completeModule(
  uid: string,
  moduleId: string,
  xpReward: number,
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

  const completedModules =
    Array.isArray(
      userData.completedModules,
    )
      ? userData.completedModules
      : [];

  if (
    completedModules.includes(
      moduleId,
    )
  ) {
    console.log(
      "Module already completed.",
    );
    return;
  }

  await updateDoc(userRef, {
    completedModules: arrayUnion(
      moduleId,
    ),
  });

  await awardXP(
    uid,
    xpReward,
  );

  await updateActiveModule(
    uid,
    moduleId,
  );
}

export async function updateActiveModule(
  uid: string,
  currentModuleId: string,
): Promise<void> {
  const modules =
    await getFoundationModules();

  const currentIndex =
    modules.findIndex(
      (module) =>
        module.id ===
        currentModuleId,
    );

  if (
    currentIndex === -1 ||
    currentIndex ===
      modules.length - 1
  ) {
    return;
  }

  const nextModule =
    modules[currentIndex + 1];

  await updateDoc(
    doc(db, "users", uid),
    {
      activeModule:
        nextModule.id,
    },
  );
}