'use client';
import { useState } from 'react';
import { Nullable } from 'primereact/ts-helpers';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Filter from './Filter/Filter';
import { unbounded_client } from '@/app/[locale]/clients-fonts';
import List from './List/List';
import ProductsLoading from '@/components/Products/ProductsLoading/ProductsLoading';
import useEventRange from '@/hooks/useEventRange';
import { fetchEvents } from '@/helper/platform/getEvents';

import styles from './EventsList.module.scss';

const EventsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState('month');
  const [dates, setDates] = useState<Nullable<Date[]>>([]);
  const { data: session } = useSession();

  const { from, to } = useEventRange(checked, dates);

  const isValidRange = !!from && !!to;

  const {
    data: events,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: isValidRange
      ? ['events', 'user', from.toISOString(), to.toISOString()]
      : ['events', 'user', 'empty'],
    queryFn: () =>
      fetchEvents({
        from: from?.toISOString(),
        to: to?.toISOString(),
        token: session?.accessToken || '',
      }),
    enabled: isValidRange && !!session?.accessToken,
    placeholderData: prevD => prevD,
  });

  if (isError) {
    toast.error(error?.message || 'Помилка завантаження');
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} ${unbounded_client.className}`}>Програма заходів</h1>
      <div>
        <Filter
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dates={dates}
          setDates={setDates}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      {isLoading ? <ProductsLoading /> : <List events={events} />}
    </div>
  );
};

export default EventsList;
