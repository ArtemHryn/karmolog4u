import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.scss';

export default function EventsCalendar({ events }) {
  const [value, setValue] = useState(new Date());
  const renderTileContent = ({ date }) => {
    const dateStr = date.toISOString().split('T')[0];
    const tooltip = events[dateStr];

    return tooltip ? (
      <div className={styles.tileContent}>
        <div className={styles.dot} title={tooltip} />
      </div>
    ) : null;
  };

  const handleClickDay = date => {
    const dateStr = date.toISOString().split('T')[0];
    const event = events[dateStr];

    if (event) {
      console.log(`${dateStr}: ${event}`);
    }
    setValue(date); // оновлює вибраний день
  };

  return (
    <div className={styles.wrapper}>
      <Calendar
        locale="uk-UA"
        onChange={setValue}
        value={value}
        tileContent={renderTileContent}
        showNavigation={true}
        next2Label={null} // прибирає кнопку ">>" (наступний рік)
        prev2Label={null}
        onClickDay={handleClickDay}
      />
    </div>
  );
}
