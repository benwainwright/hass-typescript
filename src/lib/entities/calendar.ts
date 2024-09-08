import { Client, BaseEntity, assertIdMatchesDomain } from "@core";
import { CalendarState, CalendarEvent } from "@types";

type StartEventCallback = (eventDetails: CalendarEvent) => void;
type FinishEventCallback = () => void;

export const ENTITY_DOMAIN_STRING = "calendar";

/**
 * represents a set of events with a start and end date and/or time. See {@link https://developers.home-assistant.io/docs/core/entity/calendar}
 */
export class Calendar<I extends `${typeof ENTITY_DOMAIN_STRING}.${string}`> {
  private entity: BaseEntity<I, CalendarState>;

  constructor(
    public id: I,
    client: Client
  ) {
    this.entity = new BaseEntity(this.id, client);
  }

  get currentEvent() {
    if (this.entity.state.entity_id !== this.id) {
      throw new Error("State id did not match id. Something has gone wrong");
    }
    return this.parseAttributes(this.entity.state.attributes);
  }

  public static make<I extends string>(
    id: I,
    client: Client
  ): Calendar<`calendar.${string}`> {
    assertIdMatchesDomain(id, "calendar");
    return new Calendar(id, client);
  }

  isEventCurrentlyHappening() {
    return this.entity.state.state === "on";
  }

  public onStartEvent(callback: StartEventCallback) {
    this.entity.onStateChanged((oldState, newState) => {
      if (oldState.state === "off" && newState.state === "on") {
        if (newState.entity_id === this.id) {
          callback(this.parseAttributes(newState.attributes));
        }
      }
    });
  }

  public onFinishEvent(callback: FinishEventCallback) {
    this.entity.onStateChanged((oldState, newState) => {
      if (oldState.state === "on" && newState.state === "off") {
        callback();
      }
    });
  }

  private parseAttributes(
    attributes: CalendarState["attributes"]
  ): CalendarEvent {
    return {
      ...attributes,
      message: attributes?.message ?? "",
      description: attributes?.description ?? "",
      location: attributes?.location ?? "",
      start: new Date(attributes?.start_time ?? 0),
      end: new Date(attributes?.end_time ?? 0),
    };
  }
}
export interface ICalendar {}
