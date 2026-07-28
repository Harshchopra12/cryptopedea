import type { LuluEvent } from "@/features/core/events/event.types";

export type LuluSituation =
  | "NEW_LEARNER"
  | "RETURNING_LEARNER"
  | "LEARNING_PROGRESS"
  | "LESSON_BEGINNING"
  | "QUIZ_TIME"
  | "QUIZ_SUCCESS"
  | "QUIZ_FAILURE"
  | "MODULE_SUCCESS"
  | "GENERAL";

export function interpretEvent(
  event: LuluEvent,
): LuluSituation {
  switch (event) {
    case "USER_SIGNED_UP":
      return "NEW_LEARNER";

    case "USER_RETURNED":
      return "RETURNING_LEARNER";

    case "LESSON_STARTED":
      return "LESSON_BEGINNING";

    case "LESSON_COMPLETED":
      return "LEARNING_PROGRESS";

    case "QUIZ_STARTED":
      return "QUIZ_TIME";

    case "QUIZ_PASSED":
      return "QUIZ_SUCCESS";

    case "QUIZ_FAILED":
      return "QUIZ_FAILURE";

    case "MODULE_COMPLETED":
      return "MODULE_SUCCESS";

    default:
      return "GENERAL";
  }
}