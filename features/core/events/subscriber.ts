import { eventBus } from "./event-bus";
import { LULU_EVENTS } from "./event.types";

export function initializeLuluSubscribers() {
  eventBus.subscribe(
    LULU_EVENTS.LESSON_COMPLETED,
    (payload) => {
      console.log(
        "🦉 LULU received LESSON_COMPLETED",
        payload,
      );
    },
  );
}
