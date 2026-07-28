import type { LuluContext } from "../types/context.types";
import type { LuluEvent } from "@/features/core/events/event.types";

export interface LuluDecision {
  shouldSpeak: boolean;
  reason: string;
}

export function decide(
  event: LuluEvent,
  context: LuluContext,
): LuluDecision {
  if (context.guest) {
    return {
      shouldSpeak: true,
      reason: "Guest onboarding",
    };
  }

  switch (event) {
    case "USER_LOGGED_IN":
      return {
        shouldSpeak: true,
        reason: "Welcome user",
      };

    case "LESSON_STARTED":
      return {
        shouldSpeak: true,
        reason: "Introduce lesson",
      };

    case "LESSON_COMPLETED":
      return {
        shouldSpeak: true,
        reason: "Celebrate progress",
      };

    case "QUIZ_STARTED":
      return {
        shouldSpeak: true,
        reason: "Prepare learner",
      };

    case "QUIZ_PASSED":
      return {
        shouldSpeak: true,
        reason: "Celebrate success",
      };

    case "QUIZ_FAILED":
      return {
        shouldSpeak: true,
        reason: "Encourage learner",
      };

    case "MODULE_COMPLETED":
      return {
        shouldSpeak: true,
        reason: "Celebrate module completion",
      };

    default:
      return {
        shouldSpeak: false,
        reason: "No interaction needed",
      };
  }
}