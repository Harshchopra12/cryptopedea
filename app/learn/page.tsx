import ModuleCard from "@/components/learn/module-card";
import {
    getFoundationModules,
    getFoundationPath,
} from "@/features/learn/services/learn.service";

export default async function LearnPage() {
    const path = await getFoundationPath();
    const modules = await getFoundationModules();

    return (
        <main className="p-8 text-white">
            <h1 className="text-4xl font-bold">
                {path.title}
            </h1>

            <p className="mt-2 text-zinc-400">
                {path.description}
            </p>

            <div className="mt-8 grid gap-4">
                {modules.map((module) => (
                    <ModuleCard
                        key={module.id}
                        id={module.id ?? ""}
                        title={module.title}
                        description={module.description}
                        estimatedMinutes={module.estimatedMinutes}
                        xpReward={module.xpReward}
                        isLocked={module.isLocked}
                    />
                ))}
            </div>
        </main>
    );
}