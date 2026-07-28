import type {
  LuluEvent,
} from "../types/lulu-event.types";

type EventPayload = Record<
  string,
  unknown
>;

type EventHandler = (
  payload?: EventPayload,
) => void;

class EventBus {
  private listeners = new Map<
    LuluEvent,
    Set<EventHandler>
  >();

  subscribe(
    event: LuluEvent,
    handler: EventHandler,
  ): () => void {
    if (
      !this.listeners.has(event)
    ) {
      this.listeners.set(
        event,
        new Set(),
      );
    }

    this.listeners
      .get(event)!
      .add(handler);

    return () => {
      this.listeners
        .get(event)
        ?.delete(handler);
    };
  }

  emit(
    event: LuluEvent,
    payload?: EventPayload,
  ) {
    this.listeners
      .get(event)
      ?.forEach((handler) =>
        handler(payload),
      );
  }

  clear() {
    this.listeners.clear();
  }
}

export const eventBus =
  new EventBus();
  