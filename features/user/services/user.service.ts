import { db } from "@/lib/firebase/firebase";
import type { UserProfile } from "@/features/user/types/user-profile.types";
import {
  doc,
  getDoc,
  Timestamp,
  type DocumentData,
} from "firebase/firestore";

type UserProfileDocument = Omit<
  UserProfile,
  "createdAt" | "lastActiveAt"
> & {
  createdAt: Timestamp;
  lastActiveAt: Timestamp;
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isUserProfileDocument(
  data: DocumentData,
): data is UserProfileDocument {
  return (
    typeof data.uid === "string" &&
    typeof data.email === "string" &&
    typeof data.firstName === "string" &&
    typeof data.lastName === "string" &&
    typeof data.xp === "number" &&
    typeof data.level === "number" &&
    typeof data.streak === "number" &&
    typeof data.activePath === "string" &&
    typeof data.activeModule === "string" &&
    isStringArray(data.badges) &&
    isStringArray(data.certificates) &&
    isStringArray(data.completedLessons) &&
    data.createdAt instanceof Timestamp &&
    data.lastActiveAt instanceof Timestamp
  );
}

export async function getUserProfile(uid: string): Promise<UserProfile> {
  let profileSnapshot;

  try {
    profileSnapshot = await getDoc(doc(db, "users", uid));
  } catch (error) {
    throw new Error(`Failed to retrieve user profile for uid "${uid}".`, {
      cause: error,
    });
  }

  if (!profileSnapshot.exists()) {
    throw new Error(`User profile not found for uid "${uid}".`);
  }

  const profile = profileSnapshot.data();

  if (!isUserProfileDocument(profile)) {
    throw new Error(`User profile data is invalid for uid "${uid}".`);
  }

  return {
    uid: profile.uid,
    email: profile.email,
    firstName: profile.firstName,
    lastName: profile.lastName,
    xp: profile.xp,
    level: profile.level,
    streak: profile.streak,
    activePath: profile.activePath,
    activeModule: profile.activeModule,
    badges: profile.badges,
    certificates: profile.certificates,
    completedLessons: profile.completedLessons,
    createdAt: profile.createdAt.toDate().toISOString(),
    lastActiveAt: profile.lastActiveAt.toDate().toISOString(),
  };
}
