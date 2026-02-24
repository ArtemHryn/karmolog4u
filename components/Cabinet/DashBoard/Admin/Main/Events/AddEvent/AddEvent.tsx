import EventsForm from './EventsForm/EventsForm';
import styles from './AddEvent.module.scss';
import EventsHeader from './EventsHeader/EventsHeader';

const AddEvent = () => {
  return (
    <main className={styles.main}>
      <EventsHeader />
      <div className={styles.form_wrapper}>
        <EventsForm />
      </div>
    </main>
  );
};

export default AddEvent;
