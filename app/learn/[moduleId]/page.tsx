import ModuleContent from "@/components/learn/module-content";

interface ModulePageProps {
  params: Promise<{
    moduleId: string;
  }>;
}

export default async function ModulePage({
  params,
}: ModulePageProps) {
  const { moduleId } = await params;

  return (
    <main className="p-8 text-white">
      <h1 className="mb-8 text-3xl font-bold">
        Lessons
      </h1>

      <ModuleContent
        moduleId={moduleId}
      />
    </main>
  );
}