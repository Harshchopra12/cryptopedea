import LessonCard from "@/components/learn/lesson-card";
import { getLessonsByModule } from "@/features/learn/services/learn.service";

interface ModulePageProps {
  params: Promise<{
    moduleId: string;
  }>;
}

export default async function ModulePage({
  params,
}: ModulePageProps) {
  const { moduleId } = await params;

  const lessons = await getLessonsByModule(
    moduleId,
  );

  return (
    <main className="p-8 text-white">
      <h1 className="mb-8 text-3xl font-bold">
        Lessons
      </h1>

      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            id={lesson.id ?? ""}
            title={lesson.title}
            duration={lesson.duration}
            order={lesson.order}
          />
        ))}
      </div>
    </main>
  );
}