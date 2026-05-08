import { Nullable } from 'primereact/ts-helpers';

export interface EventRow {
  id: string;
  name: string;
  dateEnd: string;
  dateStart: string;
  status: string;
  cover: string;
}

export interface EditEventType extends EventRow {
  cover: string;
  eventLink: string;
}

export interface EventsFilter {
  dates: Nullable<Date[]>;
  setDates: (dates: Nullable<Date[]>) => void;
  checked: string;
  setChecked: (e: string) => void;
}
