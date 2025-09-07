'use client';

import EventsCalendar from './Calendar/Calendar';
import styles from './EventPanel.module.scss';
import Events from './Events/Events';

const events = {
  '2025-07-18': 'Конференція з ІТ',
  '2025-07-23': 'Зустріч команди',
  '2025-08-18': 'Конференція з ІТ',
  '2025-09-23': 'Зустріч команди',
};

const EventPanel = () => {
  return (
    <div className={styles.event_wrapper}>
      <EventsCalendar events={events} />
      <Events events={events} />
    </div>
  );
};

export default EventPanel;
