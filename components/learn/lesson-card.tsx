import Link from "next/link";

interface LessonCardProps {
  id: string;
  title: string;
  duration: number;
  order: number;
}

export default function LessonCard({
  id,
  title,
  duration,
  order,
}: LessonCardProps) {
  return (
    <Link
      href={`/lesson/${id}`}
      className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {order}. {title}
        </h3>

        <span className="text-sm text-zinc-400">
          {duration} min
        </span>
      </div>
    </Link>
  );
}