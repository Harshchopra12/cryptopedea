import type { QuizQuestion } from "../types/question.types";

import OptionButton from "./option-button";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
}

export default function QuestionCard({
  question,
  questionNumber,
}: QuestionCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        {questionNumber}.{" "}
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map(
          (option, index) => (
            <OptionButton
              key={index}
              option={option}
            />
          ),
        )}
      </div>
    </div>
  );
}