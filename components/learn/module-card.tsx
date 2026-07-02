import Link from "next/link";

interface ModuleCardProps {
  id: string;

  title: string;

  description: string;

  estimatedMinutes: number;

  xpReward: number;

  isLocked: boolean;

  completed?: boolean;
}

export default function ModuleCard({
  id,
  title,
  description,
  estimatedMinutes,
  xpReward,
  isLocked,
  completed = false,
}: ModuleCardProps) {
  const icon = completed
    ? "✅"
    : isLocked
    ? "🔒"
    : "🟢";

  if (isLocked) {
    return (
      <div className="cursor-not-allowed rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 opacity-60">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {icon} {title}
          </h2>

          <span className="text-sm text-zinc-500">
            {xpReward} XP
          </span>
        </div>

        <p className="mt-2 text-zinc-400">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
          <span>
            ⏱ {estimatedMinutes} min
          </span>

          <span>Locked</span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/${id}`}
      className="block rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-yellow-400 hover:bg-zinc-800"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {icon} {title}
        </h2>

        <span className="text-sm text-yellow-400">
          {xpReward} XP
        </span>
      </div>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>

      <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
        <span>
          ⏱ {estimatedMinutes} min
        </span>

        <span>
          {completed
            ? "Completed"
            : "Start"}
        </span>
      </div>
    </Link>
  );
}