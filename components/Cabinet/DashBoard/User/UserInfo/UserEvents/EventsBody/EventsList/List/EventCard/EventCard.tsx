import { EventRow } from '@/types/events';
import { format } from 'date-fns';
import Image from 'next/image';

import styles from './EventCard.module.scss';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import Button from './Button';

interface EventCardProps {
  card: EventRow;
}

const EventCard = ({ card }: EventCardProps) => {
  const formDate = () => format(new Date(card.dateStart), 'yyyy-MM-dd');
  const formatTime = () => format(new Date(card.dateStart), 'HH:mm');
  const { isDesktop } = useBreakpoint();
  return (
    <li className={styles.element}>
      {isDesktop && (
        <Image src={card.cover} alt={card.name} width={292} height={206} className={styles.img} />
      )}
      <div className={styles.info_wrapper}>
        <div className={styles.date_wrapper}>
          <p className={styles.date}>{formDate()}</p>
          <p className={styles.date}>{formatTime()}</p>
        </div>
        {!isDesktop && (
          <Image src={card.cover} alt={card.name} width={292} height={206} className={styles.img} />
        )}
        <div className={styles.name_wrapper}>
          <p className={styles.type}>Терапевтичний ефір</p>
          <p className={styles.name}>{card.name}</p>
        </div>
        {isDesktop && <Button />}
      </div>
      {!isDesktop && <Button />}
    </li>
  );
};

export default EventCard;
