interface QuizHeaderProps {
  title: string;
  description: string;
  passingScore: number;
  xpReward: number;
}

export default function QuizHeader({
  title,
  description,
  passingScore,
  xpReward,
}: QuizHeaderProps) {
  return (
    <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="mt-3 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex gap-4">
        <div className="rounded-lg bg-zinc-800 px-4 py-2">
          Passing Score: {passingScore}%
        </div>

        <div className="rounded-lg bg-yellow-500/20 px-4 py-2 text-yellow-300">
          ⭐ {xpReward} XP
        </div>
      </div>
    </div>
  );
}