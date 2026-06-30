"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { completeLesson } from "@/features/progress/services/progress.actions";
import { useAuth } from "@/providers/auth-provider";

interface CompleteLessonButtonProps {
  lessonId: string;
}

export default function CompleteLessonButton({
  lessonId,
}: CompleteLessonButtonProps) {
  const { user } = useAuth();

  const router = useRouter();

  const [isLoading, setIsLoading] =
    useState(false);

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

      // Refresh all Server Components
      router.refresh();
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
      className="mt-8 rounded-lg bg-white px-5 py-3 text-black transition disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isCompleted
        ? "Lesson Completed ✓"
        : isLoading
          ? "Completing..."
          : "Complete Lesson"}
    </button>
  );
}