import { EventRow } from '@/types/events';
import EventCard from './EventCard/EventCard';

import styles from './List.module.scss';

interface ListProps {
  events: EventRow[];
}

const List = ({ events }: ListProps) => {
  if (!events) return null;
  return (
    <ul className={styles.list}>
      {events.map(card => (
        <EventCard key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default List;
