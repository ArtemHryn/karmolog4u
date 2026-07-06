import EventsCalendar from '../../../EventPanel/Calendar/Calendar';
import Events from '../../../EventPanel/Events/Events';
import styles from './EventDetailsModal.module.scss';

const EventDetailsModal = ({ events, setShowModal }) => {
  const calendarEvents = events.reduce((acc, { dateStart, name }) => {
    acc[dateStart.slice(0, 10)] = name;
    return acc;
  }, {});

  return (
    <>
      <div className={styles.modal}>
        <EventsCalendar events={calendarEvents} />
        <Events events={events} />
      </div>
      <div className={styles.overlay} onClick={() => setShowModal(false)}></div>
    </>
  );
};

export default EventDetailsModal;
