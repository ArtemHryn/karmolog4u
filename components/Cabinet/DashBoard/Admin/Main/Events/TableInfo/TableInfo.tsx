import { useState } from 'react';
import Filters from '../../Education/TablesInfo/Filters/Filters';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { base_url } from '@/helper/consts';

import styles from './TablesInfo.module.scss';
import Table from './Table/Table';
import { EventRow } from '@/types/events';

interface TableInfoProps {
  setDeleteEvents: React.Dispatch<React.SetStateAction<EventRow[]>>;
  deleteEvents: EventRow[];
  token: string;
  activeBtn: string;
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
}

interface EventsQueries {
  status: string;
  limit: number;
  page: number;
  search?: string;
}

const fetchEvents = async (queries: EventsQueries, token: string) => {
  const { status, limit, page, search } = queries;
  const query = new URLSearchParams({
    status,
    limit: limit.toString(),
    page: page.toString(),
    search: search || '',
  });
  const res = await fetch(`${base_url}/admin/events/all?${query.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Помилка завантаження подій');
  }
  return res.json();
};

const TableInfo = ({
  setDeleteEvents,
  deleteEvents,
  token,
  activeBtn,
  setActiveBtn,
}: TableInfoProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: events,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['events', activeBtn],
    queryFn: () => fetchEvents({ status: activeBtn, limit: 20, page: 1 }, token),
    placeholderData: keepPreviousData,
  });

  if (!events) return null;

  return (
    <div className={styles.wrapper}>
      <Filters
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        numberOfCourses={events.count}
        setDeleteEvents={setDeleteEvents}
      />
      <Table
        setDeleteEvents={setDeleteEvents}
        deleteEvents={deleteEvents}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        events={events.data}
        totalPages={Math.ceil(events.count[activeBtn] / 20)}
        emptyMessage={
          isLoading
            ? 'Завантаження...'
            : isError
              ? 'Помилка завантаження подій'
              : 'Зараз немає подій'
        }
      />
    </div>
  );
};

export default TableInfo;
