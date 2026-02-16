'use client';

import { useState } from 'react';
import EventsHead from './EventsHead/EventsHead';

import styles from './Events.module.scss';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import TableInfo from './TableInfo/TableInfo';

const Events = () => {
  const [search, setSearch] = useState('');
  const [deleteEvents, setDeleteEvents] = useState<string[]>([]);
  return (
    <main className={styles.main}>
      <div className={styles.title_wrapper}>
        <TitleNoStyles variant="h1" styled={styles.title}>
          Події
        </TitleNoStyles>
      </div>
      <EventsHead search={search} setSearch={setSearch} deleteEvents={deleteEvents} />
      <TableInfo />
    </main>
  );
};

export default Events;
