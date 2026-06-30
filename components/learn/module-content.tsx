"use client";

import { useEffect, useState } from "react";

import ModuleProgressHeader from "@/components/learn/module-progress-header";
import LessonCard from "@/components/learn/lesson-card";

import { useAuth } from "@/providers/auth-provider";

import {
  getModuleById,
} from "@/features/learn/services/learn.service";

import type { LearningModule } from "@/features/learn/types/module.types";

import { getModuleProgress } from "@/features/progress/services/progress.service";

import type { ModuleProgress } from "@/features/progress/types/progress.types";

interface ModuleContentProps {
  moduleId: string;
}

export default function ModuleContent({
  moduleId,
}: ModuleContentProps) {
  const { user, loading } = useAuth();

  const [module, setModule] =
    useState<LearningModule | null>(
      null,
    );

  const [progress, setProgress] =
    useState<ModuleProgress | null>(
      null,
    );

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    async function loadProgress() {
      if (!user) {
        setIsLoading(false);
        return;
      }

      const moduleData =
        await getModuleById(
          moduleId,
        );

      setModule(moduleData);

      const moduleProgress =
        await getModuleProgress(
          user.uid,
          moduleId,
        );

      setProgress(moduleProgress);

      setIsLoading(false);
    }

    if (!loading) {
      loadProgress();
    }
  }, [
    user,
    loading,
    moduleId,
  ]);

  if (loading || isLoading) {
    return (
      <p className="text-zinc-400">
        Loading...
      </p>
    );
  }

  if (!progress || !module) {
    return (
      <p className="text-red-400">
        Unable to load module.
      </p>
    );
  }

  return (
    <>
      <ModuleProgressHeader
        title={module.title}
        description={module.description}
        xpReward={module.xpReward}
        completedLessons={
          progress.completedLessons
        }
        totalLessons={
          progress.totalLessons
        }
        progressPercentage={
          progress.progressPercentage
        }
      />

      <div className="grid gap-4">
        {progress.lessons.map(
          ({
            lesson,
            completed,
            unlocked,
          }) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id ?? ""}
              title={lesson.title}
              duration={lesson.duration}
              order={lesson.order}
              completed={completed}
              unlocked={unlocked}
            />
          ),
        )}
      </div>
    </>
  );
}