import type {
  LULU_EVENTS,
} from "./event.types";

export interface LuluEventPayloads {
  [LULU_EVENTS.APP_OPENED]: undefined;

  [LULU_EVENTS.GUEST_VISITED]: undefined;

  [LULU_EVENTS.USER_SIGNED_UP]: {
    userId: string;
  };

  [LULU_EVENTS.USER_LOGGED_IN]: {
    userId: string;
  };

  [LULU_EVENTS.USER_RETURNED]: {
    userId: string;
    daysAway: number;
  };

  [LULU_EVENTS.DASHBOARD_OPENED]: {
    userId: string;
  };

  [LULU_EVENTS.PATH_OPENED]: {
    pathId: string;
  };

  [LULU_EVENTS.MODULE_OPENED]: {
    moduleId: string;
  };

  [LULU_EVENTS.LESSON_STARTED]: {
    lessonId: string;
    moduleId: string;
  };

  [LULU_EVENTS.LESSON_COMPLETED]: {
    lessonId: string;
    moduleId: string;
    xpAwarded: number;
  };

  [LULU_EVENTS.QUIZ_STARTED]: {
    moduleId: string;
  };

  [LULU_EVENTS.QUIZ_PASSED]: {
    moduleId: string;
    score: number;
    xpAwarded: number;
  };

  [LULU_EVENTS.QUIZ_FAILED]: {
    moduleId: string;
    score: number;
  };

  [LULU_EVENTS.MODULE_COMPLETED]: {
    moduleId: string;
    xpAwarded: number;
  };

  [LULU_EVENTS.LEVEL_UP]: {
    previousLevel: number;
    newLevel: number;
  };

  [LULU_EVENTS.STREAK_UPDATED]: {
    streak: number;
  };

  [LULU_EVENTS.BADGE_UNLOCKED]: {
    badgeId: string;
  };

  [LULU_EVENTS.CERTIFICATE_UNLOCKED]: {
    certificateId: string;
  };
}
