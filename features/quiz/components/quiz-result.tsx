interface QuizResultProps {
  score: number;

  correctAnswers: number;

  totalQuestions: number;

  passed: boolean;

  onContinue: () => void;

  onRetry: () => void;
}

export default function QuizResult({
  score,
  correctAnswers,
  totalQuestions,
  passed,
  onContinue,
  onRetry,
}: QuizResultProps) {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center text-white">
      <h1 className="text-4xl font-bold">
        {passed
          ? "🎉 Quiz Passed!"
          : "😔 Quiz Failed"}
      </h1>

      <p className="mt-8 text-6xl font-bold text-yellow-400">
        {score}%
      </p>

      <p className="mt-4 text-xl text-zinc-300">
        {correctAnswers} / {totalQuestions} Correct
      </p>

      <div className="mt-10">
        {passed ? (
          <button
            onClick={onContinue}
            className="rounded-lg bg-green-500 px-6 py-3 font-semibold"
          >
            Continue Learning →
          </button>
        ) : (
          <button
            onClick={onRetry}
            className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black"
          >
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
}