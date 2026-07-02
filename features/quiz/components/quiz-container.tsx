"use client";

import { useState } from "react";

import { useAuth } from "@/providers/auth-provider";
import { completeModule } from "@/features/progress/services/progress.actions";

import type { Quiz } from "../types/quiz.types";
import {
  evaluateQuiz,
  type QuizResult as QuizResultType,
} from "../utils/quiz-evaluator";

import QuizHeader from "./quiz-header";
import QuizNavigation from "./quiz-navigation";
import QuizProgress from "./quiz-progress";
import QuestionCard from "./question-card";
import QuizResult from "./quiz-result";

interface QuizContainerProps {
  quiz: Quiz;
}

export default function QuizContainer({
  quiz,
}: QuizContainerProps) {
  const { user } = useAuth();

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] =
    useState<Record<number, number>>(
      {},
    );

  const [quizResult, setQuizResult] =
    useState<QuizResultType | null>(
      null,
    );

  const totalQuestions =
    quiz.questions.length;

  const question =
    quiz.questions[currentQuestion];

  function handleAnswerSelect(
    answer: number,
  ) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion]: answer,
    }));
  }

  function handleNext() {
    if (
      currentQuestion <
      totalQuestions - 1
    ) {
      setCurrentQuestion(
        (current) => current + 1,
      );
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        (current) => current - 1,
      );
    }
  }

  async function handleSubmit() {
    const result =
      evaluateQuiz(
        quiz,
        answers,
      );

    if (
      result.passed &&
      user
    ) {
      try {
        await completeModule(
          user.uid,
          quiz.moduleId,
          quiz.xpReward,
        );
      } catch (error) {
        console.error(
          "MODULE COMPLETION ERROR:",
          error,
        );
      }
    }

    setQuizResult(result);
  }

  function handleRetry() {
    setQuizResult(null);
    setCurrentQuestion(0);
    setAnswers({});
  }

  function handleContinue() {
    console.log(
      "Continue to next module",
    );
  }

  if (quizResult) {
    return (
      <QuizResult
        score={quizResult.score}
        correctAnswers={
          quizResult.correctAnswers
        }
        totalQuestions={
          quizResult.totalQuestions
        }
        passed={quizResult.passed}
        onRetry={handleRetry}
        onContinue={handleContinue}
      />
    );
  }

  return (
    <main className="mx-auto max-w-4xl p-8 text-white">
      <QuizHeader
        title={quiz.title}
        description={quiz.description}
        passingScore={quiz.passingScore}
        xpReward={quiz.xpReward}
      />

      <QuizProgress
        currentQuestion={
          currentQuestion + 1
        }
        totalQuestions={
          totalQuestions
        }
      />

      <QuestionCard
        question={question}
        questionNumber={
          currentQuestion + 1
        }
        selectedAnswer={
          answers[currentQuestion] ??
          null
        }
        onAnswerSelect={
          handleAnswerSelect
        }
      />

      <QuizNavigation
        canGoBack={
          currentQuestion > 0
        }
        canGoNext={
          currentQuestion <
          totalQuestions - 1
        }
        isLastQuestion={
          currentQuestion ===
          totalQuestions - 1
        }
        onPrevious={
          handlePrevious
        }
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </main>
  );
}