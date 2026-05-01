'use client';

import { useState } from 'react';
import EventsHead from './EventsHead/EventsHead';

import styles from './Events.module.scss';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import TableInfo from './TableInfo/TableInfo';
import { EventRow } from '@/types/events';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PUBLISHED } from '@/helper/consts';

const Events = ({ token }: { token: string }) => {
  const [search, setSearch] = useState('');
  const [deleteEvents, setDeleteEvents] = useState<EventRow[]>([]);
  const [activeBtn, setActiveBtn] = useState(PUBLISHED);

  return (
    <main className={styles.main}>
      <div className={styles.title_wrapper}>
        <TitleNoStyles variant="h1" styled={styles.title}>
          Події
        </TitleNoStyles>
      </div>
      <EventsHead
        search={search}
        setSearch={setSearch}
        deleteEvents={deleteEvents}
        status={activeBtn}
      />
      <TableInfo
        setDeleteEvents={setDeleteEvents}
        deleteEvents={deleteEvents}
        token={token}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <ToastContainer />
    </main>
  );
};

export default Events;
