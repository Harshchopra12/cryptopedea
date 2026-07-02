import { auth, db } from "@/lib/firebase/firebase";
import type { User } from "@/types/user.types";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
  type DocumentData,
  type FieldValue,
} from "firebase/firestore";
import type {
  LoginData,
  SignUpData,
} from "../types/auth.types";

export interface AuthService {
  signUp(data: SignUpData): Promise<User>;
  login(data: LoginData): Promise<User>;
  logout(): Promise<void>;
  googleSignIn(): Promise<User>;
}

type UserDocument = Omit<
  User,
  "createdAt" | "lastActiveAt"
> & {
  createdAt: FieldValue;
  lastActiveAt: FieldValue;
};

type UserProfileDocument = Omit<
  User,
  "createdAt" | "lastActiveAt"
> & {
  createdAt: Timestamp;
  lastActiveAt: Timestamp;
};

function isStringArray(
  value: unknown,
): value is string[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "string",
    )
  );
}

function isUserProfileDocument(
  data: DocumentData,
): data is UserProfileDocument {
  return (
    typeof data.uid === "string" &&
    typeof data.email === "string" &&
    typeof data.firstName ===
      "string" &&
    typeof data.lastName ===
      "string" &&
    typeof data.xp === "number" &&
    typeof data.level ===
      "number" &&
    typeof data.streak ===
      "number" &&
    typeof data.activePath ===
      "string" &&
    typeof data.activeModule ===
      "string" &&
    isStringArray(data.badges) &&
    isStringArray(
      data.certificates,
    ) &&
    isStringArray(
      data.completedLessons,
    ) &&
    isStringArray(
      data.completedModules,
    ) &&
    data.createdAt instanceof
      Timestamp &&
    data.lastActiveAt instanceof
      Timestamp
  );
}

export async function signUp(
  data: SignUpData,
): Promise<User> {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

  const { user: firebaseUser } =
    userCredential;

  const timestamp =
    new Date().toISOString();

  const user: User = {
    uid: firebaseUser.uid,
    email:
      firebaseUser.email ??
      data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    xp: 0,
    level: 1,
    streak: 0,
    activePath: "foundation",
    activeModule:
      "foundation-module-1",
    badges: [],
    certificates: [],
    completedLessons: [],
    completedModules: [],
    createdAt: timestamp,
    lastActiveAt: timestamp,
  };

  const userDocument: UserDocument =
    {
      ...user,
      createdAt:
        serverTimestamp(),
      lastActiveAt:
        serverTimestamp(),
    };

  try {
    await setDoc(
      doc(
        db,
        "users",
        firebaseUser.uid,
      ),
      userDocument,
    );
  } catch (error) {
    await deleteUser(
      firebaseUser,
    ).catch(() => undefined);

    throw error;
  }

  return user;
}

export async function login(
  data: LoginData,
): Promise<User> {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

  const { user: firebaseUser } =
    userCredential;

  const snapshot =
    await getDoc(
      doc(
        db,
        "users",
        firebaseUser.uid,
      ),
    );

  if (!snapshot.exists()) {
    throw new Error(
      "User profile does not exist.",
    );
  }

  const profile =
    snapshot.data();

  if (
    !isUserProfileDocument(
      profile,
    )
  ) {
    throw new Error(
      "The authenticated user's profile data is invalid.",
    );
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
    activeModule:
      profile.activeModule,
    badges: profile.badges,
    certificates:
      profile.certificates,
    completedLessons:
      profile.completedLessons,
    completedModules:
      profile.completedModules,
    createdAt:
      profile.createdAt
        .toDate()
        .toISOString(),
    lastActiveAt:
      profile.lastActiveAt
        .toDate()
        .toISOString(),
  };
}

export const authService: Pick<
  AuthService,
  "signUp" | "login"
> = {
  signUp,
  login,
};