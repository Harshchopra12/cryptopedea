"use client";

import { auth, db } from "@/lib/firebase/firebase";
import type { User } from "@/types/user.types";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  onSnapshot,
  Timestamp,
  type DocumentData,
  type Unsubscribe,
} from "firebase/firestore";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

type UserProfileDocument = Omit<User, "createdAt" | "lastActiveAt"> & {
  createdAt: Timestamp;
  lastActiveAt: Timestamp;
};

export const AuthContext = createContext<
  AuthContextValue | undefined
>(undefined);

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

function toUser(
  profile: UserProfileDocument,
): User {
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

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let unsubscribeProfile:
      | Unsubscribe
      | undefined;

    let authRevision = 0;

    const unsubscribeAuth =
      onAuthStateChanged(
        auth,
        (firebaseUser) => {
          const revision =
            ++authRevision;

          unsubscribeProfile?.();
          unsubscribeProfile =
            undefined;

          setUser(null);

          if (!firebaseUser) {
            setLoading(false);
            return;
          }

          setLoading(true);

          unsubscribeProfile =
            onSnapshot(
              doc(
                db,
                "users",
                firebaseUser.uid,
              ),
              (snapshot) => {
                if (
                  revision !==
                  authRevision
                ) {
                  return;
                }

                if (
                  !snapshot.exists()
                ) {
                  setUser(null);
                  setLoading(
                    false,
                  );
                  return;
                }

                const profile =
                  snapshot.data({
                    serverTimestamps:
                      "estimate",
                  });

                if (
                  !isUserProfileDocument(
                    profile,
                  ) ||
                  profile.uid !==
                    firebaseUser.uid
                ) {
                  console.error(
                    "AUTH PROFILE ERROR: Invalid user profile data.",
                  );

                  setUser(null);

                  setLoading(
                    false,
                  );

                  return;
                }

                setUser(
                  toUser(profile),
                );

                setLoading(
                  false,
                );
              },
              (error) => {
                if (
                  revision !==
                  authRevision
                ) {
                  return;
                }

                console.error(
                  "AUTH PROFILE ERROR:",
                  error,
                );

                setUser(null);

                setLoading(
                  false,
                );
              },
            );
        },
        (error) => {
          console.error(
            "AUTH STATE ERROR:",
            error,
          );

          setUser(null);

          setLoading(false);
        },
      );

    return () => {
      authRevision += 1;

      unsubscribeProfile?.();

      unsubscribeAuth();
    };
  }, []);

  const value =
    useMemo<AuthContextValue>(
      () => ({
        user,
        loading,
        isAuthenticated:
          user !== null,
      }),
      [loading, user],
    );

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider.",
    );
  }

  return context;
}