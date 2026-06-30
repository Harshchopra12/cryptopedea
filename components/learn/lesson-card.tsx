import Link from "next/link";

interface LessonCardProps {
  id: string;

  title: string;

  duration: number;

  order: number;

  completed: boolean;

  unlocked: boolean;
}

export default function LessonCard({
  id,
  title,
  duration,
  order,
  completed,
  unlocked,
}: LessonCardProps) {
  const icon = completed
    ? "✅"
    : unlocked
    ? "🟢"
    : "🔒";

  if (!unlocked) {
    return (
      <div className="cursor-not-allowed rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 opacity-60">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            {icon} {order}. {title}
          </h3>

          <span className="text-sm text-zinc-500">
            {duration} min
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/lesson/${id}`}
      className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-yellow-400 hover:bg-zinc-800"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {icon} {order}. {title}
        </h3>

        <span className="text-sm text-zinc-400">
          {duration} min
        </span>
      </div>
    </Link>
  );
}