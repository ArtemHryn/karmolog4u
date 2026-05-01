export interface EventRow {
  id: string;
  name: string;
  dateEnd: string;
  dateStart: string;
  status: string;
}

export interface EditEventType extends EventRow {
  cover: string;
  eventLink: string;
}
