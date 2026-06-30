import { notFound } from "next/navigation";

import CompleteLessonButton from "@/components/lesson/complete-lesson-button";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";

import { getLessonById } from "@/features/learn/services/learn.service";
import { getLessonMarkdown } from "@/features/learn/services/lesson-content.service";

interface LessonPageProps {
  params: Promise<{
    lessonId: string;
  }>;
}

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { lessonId } = await params;

  const lesson = await getLessonById(
    lessonId,
  );

  if (!lesson) {
    notFound();
  }

  const markdown =
    await getLessonMarkdown(
      lessonId,
    );

  return (
    <main className="mx-auto max-w-4xl p-8 text-white">
      <h1 className="text-4xl font-bold">
        {lesson.title}
      </h1>

      <p className="mt-3 text-zinc-400">
        Duration: {lesson.duration} minutes
      </p>

      <article className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-8">
        <MarkdownRenderer
          markdown={markdown}
        />
      </article>

      <CompleteLessonButton
        lessonId={lessonId}
      />
    </main>
  );
}