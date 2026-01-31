'use client';

import { useState } from 'react';
import EventsHead from './EventsHead/EventsHead';

import styles from './Events.module.scss';

const Events = () => {
  const [search, setSearch] = useState('');
  return (
    <main className={styles.main}>
      <EventsHead search={search} setSearch={setSearch} />
    </main>
  );
};

export default Events;
