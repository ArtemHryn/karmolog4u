import EventsForm from './EventsForm/EventsForm';
import styles from './AddEvent.module.scss';
import EventsHeader from './EventsHeader/EventsHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEvent = () => {
  return (
    <main className={styles.main}>
      <EventsHeader />
      <div className={styles.form_wrapper}>
        <EventsForm />
      </div>
      <ToastContainer />
    </main>
  );
};

export default AddEvent;
