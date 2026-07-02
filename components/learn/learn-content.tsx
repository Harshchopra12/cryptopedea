"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/providers/auth-provider";

import { getFoundationPath } from "@/features/learn/services/learn.service";
import { getFoundationModuleProgress } from "@/features/progress/services/progress.service";

import ModuleCard from "@/components/learn/module-card";

import type { LearningPath } from "@/features/learn/types/path.types";
import type { ModuleProgress } from "@/features/progress/types/module-progress.types";

export default function LearnContent() {
  const { user, loading } = useAuth();

  const [path, setPath] =
    useState<LearningPath | null>(null);

  const [modules, setModules] =
    useState<ModuleProgress[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    async function loadData() {
      if (!user) {
        setIsLoading(false);
        return;
      }

      const foundationPath =
        await getFoundationPath();

      const moduleProgress =
        await getFoundationModuleProgress(
          user.uid,
        );

      setPath(foundationPath);
      setModules(moduleProgress);
      setIsLoading(false);
    }

    if (!loading) {
      loadData();
    }
  }, [loading, user]);

  if (loading || isLoading) {
    return (
      <main className="p-8 text-white">
        Loading...
      </main>
    );
  }

  if (!path) {
    return (
      <main className="p-8 text-white">
        Unable to load path.
      </main>
    );
  }

  return (
    <main className="p-8 text-white">
      <h1 className="text-4xl font-bold">
        {path.title}
      </h1>

      <p className="mt-2 text-zinc-400">
        {path.description}
      </p>

      <div className="mt-8 grid gap-4">
        {modules.map(
          ({
            module,
            completed,
            unlocked,
          }) => (
            <ModuleCard
              key={module.id}
              id={module.id ?? ""}
              title={module.title}
              description={
                module.description
              }
              estimatedMinutes={
                module.estimatedMinutes
              }
              xpReward={
                module.xpReward
              }
              isLocked={
                !unlocked
              }
              completed={
                completed
              }
            />
          ),
        )}
      </div>
    </main>
  );
}