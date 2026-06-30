import { getLessonById } from "./learn.service";
import { getMarkdownContent } from "@/lib/markdown/markdown";

export async function getLessonMarkdown(
  lessonId: string,
): Promise<string> {
  const lesson = await getLessonById(
    lessonId,
  );

  if (!lesson) {
    throw new Error(
      "Lesson not found.",
    );
  }

  return getMarkdownContent(
    lesson.markdownFile,
  );
}