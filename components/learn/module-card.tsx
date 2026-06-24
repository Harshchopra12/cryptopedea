import Link from "next/link";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  xpReward: number;
  isLocked: boolean;
}

export default function ModuleCard({
  id,
  title,
  description,
  estimatedMinutes,
  xpReward,
  isLocked,
}: ModuleCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <span>
          {isLocked ? "🔒" : "✅"}
        </span>
      </div>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>

      <div className="mt-4 flex gap-6 text-sm text-zinc-300">
        <span>⏱ {estimatedMinutes} min</span>
        <span>⭐ {xpReward} XP</span>
      </div>

      <Link
        href={`/learn/${id}`}
        className={`mt-5 inline-block rounded-lg px-4 py-2 ${
          isLocked
            ? "pointer-events-none bg-zinc-700 text-zinc-400"
            : "bg-white text-black"
        }`}
      >
        {isLocked ? "Locked" : "Start"}
      </Link>
    </div>
  );
}