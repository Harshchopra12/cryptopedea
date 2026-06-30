import {
  foundationLessons,
  foundationModules,
  foundationPaths,
  foundationQuizzes,
} from "@/content/seed";

import { seedCollection } from "./utils/seed-collection";

async function seed() {
  console.log("🌱 Starting CryptoPedea Seeder...\n");

  await seedCollection(
    "paths",
    foundationPaths,
  );

  await seedCollection(
    "modules",
    foundationModules,
  );

  await seedCollection(
    "lessons",
    foundationLessons,
  );

  await seedCollection(
    "quizzes",
    foundationQuizzes,
  );

  console.log(
    "\n🎉 Seeding completed successfully.",
  );
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});