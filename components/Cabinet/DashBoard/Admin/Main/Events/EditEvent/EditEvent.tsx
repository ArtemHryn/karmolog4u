import { EditEventType } from '@/types/events';
import EventsHeader from '../AddEvent/EventsHeader/EventsHeader';
import styles from './EditEvent.module.scss';
import EventsForm from '../AddEvent/EventsForm/EventsForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EditEventProps {
  event: EditEventType;
}

const EditEvent = ({ event }: EditEventProps) => {
  return (
    <main className={styles.main}>
      <EventsHeader headerTitle="Редагувати подію" />
      <div className={styles.form_wrapper}>
        <EventsForm event={event} />
      </div>
      <ToastContainer />
    </main>
  );
};

export default EditEvent;
