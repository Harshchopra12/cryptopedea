import { notFound } from "next/navigation";

import QuizContainer from "@/features/quiz/components/quiz-container";
import { getQuizByModule } from "@/features/quiz/services/quiz.service";

interface QuizPageProps {
  params: Promise<{
    moduleId: string;
  }>;
}

export default async function QuizPage({
  params,
}: QuizPageProps) {
  const { moduleId } = await params;

  const quiz =
    await getQuizByModule(
      moduleId,
    );

  if (!quiz) {
    notFound();
  }

  return (
    <QuizContainer
      quiz={quiz}
    />
  );
}