"use client";

import { useState } from "react";

import { completeLesson } from "@/features/progress/services/progress.service";
import { useAuth } from "@/providers/auth-provider";

interface CompleteLessonButtonProps {
  lessonId: string;
}

export default function CompleteLessonButton({
  lessonId,
}: CompleteLessonButtonProps) {
  const { user, loading, isAuthenticated } = useAuth();

  console.log("AUTH DEBUG", {
    user,
    loading,
    isAuthenticated,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] =
    useState(false);

  async function handleComplete() {
    try {
      if (!user) {
        throw new Error(
          "User not found.",
        );
      }

      setIsLoading(true);

      await completeLesson(
        user.uid,
        lessonId,
      );

      setIsCompleted(true);
    } catch (error) {
      console.error(
        "COMPLETE LESSON ERROR:",
        error,
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      onClick={handleComplete}
      disabled={
        isLoading || isCompleted
      }
      className="mt-8 rounded-lg bg-white px-5 py-3 text-black disabled:opacity-50"
    >
      {isCompleted
        ? "Lesson Completed ✓"
        : isLoading
          ? "Completing..."
          : "Complete Lesson"}
    </button>
  );
}