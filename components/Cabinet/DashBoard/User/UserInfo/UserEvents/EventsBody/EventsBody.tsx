import styles from './EventsBody.module.scss';
import EventsList from './EventsList/EventsList';
import Info from './Info/Info';

const EventsBody = () => {
  return (
    <main className={styles.main}>
      <Info />
      <EventsList />
    </main>
  );
};

export default EventsBody;
