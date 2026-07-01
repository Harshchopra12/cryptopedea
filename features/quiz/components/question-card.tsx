import type { QuizQuestion } from "../types/question.types";

import OptionButton from "./option-button";

interface QuestionCardProps {
  question: QuizQuestion;

  questionNumber: number;

  selectedAnswer: number | null;

  onAnswerSelect: (
    answer: number,
  ) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        {questionNumber}. {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map(
          (option, index) => (
            <OptionButton
              key={index}
              option={option}
              selected={
                selectedAnswer === index
              }
              onSelect={() =>
                onAnswerSelect(index)
              }
            />
          ),
        )}
      </div>
    </div>
  );
}