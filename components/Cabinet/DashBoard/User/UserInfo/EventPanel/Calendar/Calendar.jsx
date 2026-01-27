import { format } from 'date-fns';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.scss';

export default function EventsCalendar({ events }) {
  const [value, setValue] = useState(new Date());
  if (!events) return null;
  const renderTileContent = ({ date }) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const tooltip = events[dateStr];

    return tooltip ? (
      <div className={styles.tileContent}>
        <div className={styles.dot} title={tooltip} />
      </div>
    ) : null;
  };

  const handleClickDay = date => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const event = events[dateStr];

    if (event) {
      toast.info(`${dateStr}: ${event}`, {
        progressClassName: styles.event_toast_progress_bar,
        className: styles.event_toast,
      });
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
