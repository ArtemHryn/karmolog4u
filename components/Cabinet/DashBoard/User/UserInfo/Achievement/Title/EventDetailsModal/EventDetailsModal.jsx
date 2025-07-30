import EventsCalendar from '../../../EventPanel/Calendar/Calendar';
import Events from '../../../EventPanel/Events/Events';
import styles from './EventDetailsModal.module.scss';

const EventDetailsModal = ({ events, setShowModal }) => {
  return (
    <>
      <div className={styles.modal}>
        <EventsCalendar events={events} />
        <Events events={events} />
      </div>
      <div className={styles.overlay} onClick={() => setShowModal(false)}></div>
    </>
  );
};

export default EventDetailsModal;
