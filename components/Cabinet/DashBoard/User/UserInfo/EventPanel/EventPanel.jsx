'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { subMonths, addYears } from 'date-fns';
import EventsCalendar from './Calendar/Calendar';
import styles from './EventPanel.module.scss';
import Events from './Events/Events';
import { fetchEvents } from '../../../../../../helper/platform/getEvents';
import Loader from '../../Loader/Loader';

const Error = ({ er }) => {
  return (
    <div className={styles.event_wrapper} role="alert">
      <p className={styles.error_title}>Помилка завантаження подій</p>
      <p className={styles.error_text}>{!!er ? er : 'Зверніться до адміністратора сайта'}</p>
    </div>
  );
};

const EventPanel = () => {
  const { data: session } = useSession();

  const from = subMonths(new Date(), 1).toISOString();
  const to = addYears(new Date(), 1).toISOString();
  const {
    data: events,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['events', 'user'],
    queryFn: () =>
      fetchEvents({
        from: from,
        to: to,
        token: session?.accessToken || '',
      }),
    enabled: !!session?.accessToken,
    placeholderData: prevD => prevD,
  });

  if (isLoading) {
    return (
      <div className={styles.event_wrapper}>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <Error er={error?.message} />;
  }

  if (!events) return null;

  const calendarEvents = events.reduce((acc, { dateStart, name }) => {
    acc[dateStart.slice(0, 10)] = name;
    return acc;
  }, {});

  return (
    <div className={styles.event_wrapper}>
      <EventsCalendar events={calendarEvents} />
      <Events events={events} />
    </div>
  );
};

export default EventPanel;
