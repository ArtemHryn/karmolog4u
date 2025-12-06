import EventsCalendar from '@/components/Cabinet/DashBoard/User/UserInfo/EventPanel/Calendar/Calendar';

import styles from './DateInfo.module.scss';

const events = {
  '2025-12-18': 'Конференція з ІТ',
  '2025-07-23': 'Зустріч команди',
  '2025-08-18': 'Конференція з ІТ',
  '2025-09-23': 'Зустріч команди',
};

const DateInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.next_lesson_wrapper}>
        <p className={styles.next_lesson_text}>Наступне заняття - 01.04.2025 у 19:30</p>
      </div>
      <EventsCalendar events={events} />
    </div>
  );
};

export default DateInfo;
