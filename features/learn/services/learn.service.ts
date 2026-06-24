import { db } from "@/lib/firebase/firebase";
import type { Lesson } from "../types/lesson.types";
import {
    collection,
    doc,
    getDoc,
    getDocs,
} from "firebase/firestore";

import type { LearningPath } from "../types/path.types";
import type { LearningModule } from "../types/module.types";

export async function getFoundationPath() {
    const snapshot = await getDoc(
        doc(db, "paths", "foundation")
    );

    return snapshot.data() as LearningPath;
}

export async function getFoundationModule() {
    const snapshot = await getDoc(
        doc(db, "modules", "foundation-module-1")
    );

    return snapshot.data() as LearningModule;
}

export async function getFoundationModules(): Promise<LearningModule[]> {
    const snapshot = await getDocs(
        collection(db, "modules")
    );

    const modules: LearningModule[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<LearningModule, "id">),
    }));

    return modules
        .filter((module) => module.pathId === "foundation")
        .sort((a, b) => a.order - b.order);
}
export async function getLessonsByModule(
    moduleId: string,
): Promise<Lesson[]> {
    const snapshot = await getDocs(
        collection(db, "lessons")
    );

    const lessons: Lesson[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Lesson, "id">),
    }));

    return lessons
        .filter((lesson) => lesson.moduleId === moduleId)
        .sort((a, b) => a.order - b.order);
}
export async function getLessonById(
    lessonId: string,
): Promise<Lesson | null> {
    const snapshot = await getDoc(
        doc(db, "lessons", lessonId),
    );

    if (!snapshot.exists()) {
        return null;
    }

    return {
        id: snapshot.id,
        ...(snapshot.data() as Omit<Lesson, "id">),
    };
}