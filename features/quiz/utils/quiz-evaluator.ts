import type { Quiz } from "../types/quiz.types";

export interface QuizResult {
  score: number;

  correctAnswers: number;

  totalQuestions: number;

  passed: boolean;
}

export function evaluateQuiz(
  quiz: Quiz,
  answers: Record<number, number>,
): QuizResult {
  let correctAnswers = 0;

  quiz.questions.forEach(
    (question, index) => {
      if (
        answers[index] ===
        question.correctAnswer
      ) {
        correctAnswers++;
      }
    },
  );

  const totalQuestions =
    quiz.questions.length;

  const score = Math.round(
    (correctAnswers /
      totalQuestions) *
      100,
  );

  return {
    score,
    correctAnswers,
    totalQuestions,
    passed:
      score >= quiz.passingScore,
  };
}