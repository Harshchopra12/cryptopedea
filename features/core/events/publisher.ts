import { eventBus } from "./event-bus";
import type {
  LuluEventPayloads,
} from "./event-payloads.types";
import type {
  LuluEvent,
} from "./event.types";

export function publishEvent<
  T extends LuluEvent,
>(
  event: T,
  payload: LuluEventPayloads[T],
): void {
  eventBus.emit(
    event,
    payload,
  );
}
