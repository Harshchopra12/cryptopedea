interface QuizNavigationProps {
  canGoBack: boolean;

  canGoNext: boolean;

  isLastQuestion: boolean;

  onPrevious: () => void;

  onNext: () => void;

  onSubmit: () => void;
}

export default function QuizNavigation({
  canGoBack,
  canGoNext,
  isLastQuestion,
  onPrevious,
  onNext,
  onSubmit,
}: QuizNavigationProps) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        onClick={onPrevious}
        disabled={!canGoBack}
        className="rounded-lg border border-zinc-700 px-5 py-3 disabled:opacity-50"
      >
        ← Previous
      </button>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="rounded-lg bg-green-500 px-5 py-3 font-semibold text-white"
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black disabled:opacity-50"
        >
          Next →
        </button>
      )}
    </div>
  );
}