interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgress({
  currentQuestion,
  totalQuestions,
}: QuizProgressProps) {
  const percentage =
    (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-sm text-zinc-400">
        <span>
          Question {currentQuestion} of{" "}
          {totalQuestions}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-yellow-400 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}