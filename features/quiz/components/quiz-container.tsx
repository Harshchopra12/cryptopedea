"use client";

import { useState } from "react";

import type { Quiz } from "../types/quiz.types";

import QuizHeader from "./quiz-header";
import QuizNavigation from "./quiz-navigation";
import QuizProgress from "./quiz-progress";
import QuestionCard from "./question-card";

interface QuizContainerProps {
  quiz: Quiz;
}

export default function QuizContainer({
  quiz,
}: QuizContainerProps) {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const totalQuestions =
    quiz.questions.length;

  const question =
    quiz.questions[currentQuestion];

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
      />

      <QuizNavigation
        canGoBack={
          currentQuestion > 0
        }
        canGoNext={
          currentQuestion <
          totalQuestions - 1
        }
        onPrevious={
          handlePrevious
        }
        onNext={handleNext}
      />
    </main>
  );
}