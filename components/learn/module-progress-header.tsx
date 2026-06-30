interface ModuleProgressHeaderProps {
  title: string;
  description: string;
  xpReward: number;
  completedLessons: number;
  totalLessons: number;
  progressPercentage: number;
}

export default function ModuleProgressHeader({
  title,
  description,
  xpReward,
  completedLessons,
  totalLessons,
  progressPercentage,
}: ModuleProgressHeaderProps) {
  return (
    <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-500"
          style={{
            width: `${progressPercentage}%`,
          }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span>
          {completedLessons} / {totalLessons} Lessons Completed
        </span>

        <span>
          {progressPercentage}%
        </span>
      </div>

      <div className="mt-5 rounded-lg border border-yellow-600/30 bg-yellow-500/10 p-3 text-sm text-yellow-300">
        ⭐ Complete this module to earn{" "}
        <strong>{xpReward} XP</strong>
      </div>
    </div>
  );
}