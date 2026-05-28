'use client';
import { DataTable } from 'primereact/datatable';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Column } from 'primereact/column';
import EmptyTable from '../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';

import styles from './UserPaymentTable.module.scss';
import './table.scss';
import { useSession } from 'next-auth/react';
import { base_url } from '@/helper/consts';
import { format } from 'date-fns';
import StatusColumn from './StatusColumn/StatusColumn';
import ActionsColumn from './ActionsColumn/ActionsColumn';
import { fetchedDataTypes, ProductType } from '@/types/admin_user_details';

const getUserPayment = async (token: string, id: string) => {
  const res = await fetch(`${base_url}/admin/payments/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Помилка завантаження списку платежів користувача');
  }
  return res.json();
};

const UserPaymentTable = () => {
  const { id } = useParams();
  const { data: session } = useSession();

  const token = session?.accessToken;

  const {
    data: payments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user_payments', id],
    queryFn: () => getUserPayment(token || '', id as string),
    placeholderData: prevD => prevD,
    enabled: !!token && !!id,
  });

  const productTypes: Record<ProductType, string> = {
    course: 'Курс',
    practice: 'Практика',
    Meditations: 'Медитації',
    Webinars: 'Вебінари',
    GuidesAndBooks: 'Гайди та книги',
  };

  const filteredPayment = () => {
    if (!payments || payments.length === 0) return [];
    return payments.map((p: fetchedDataTypes) => {
      const date = p?.rawResponse?.processingDate
        ? format(new Date(p.rawResponse.processingDate * 1000), 'yy-MM-dd HH:mm:ss')
        : format(new Date(p.createdAt), 'yy-MM-dd HH:ss:mm:ss');
      return {
        ...p,
        productType: productTypes[p.productType] ?? 'Продукт',
        date,
        amount: `${p.amount}€`,
      };
    });
  };

  const emptyMessage = isLoading
    ? 'Платежі завантажуються...'
    : isError
      ? 'Помилка Завантаження'
      : 'Зараз немає платежів';

  return (
    <div className={styles.info_part_wrapper}>
      <p>Платежі</p>
      <DataTable
        emptyMessage={<EmptyTable message={emptyMessage} styledWrapper={styles.empty_wrapper} />}
        value={filteredPayment()}
        tableClassName={`${styles.table}`}
        dataKey={'id'}
      >
        <Column field="productName" header="Назва продукту" className={styles.column} />
        <Column field="productType" header="Тип" className={styles.column} />
        <Column field="date" header="Дата" className={styles.column} />
        <Column field="amount" header="Сума" className={styles.column} />
        <Column
          body={body => <StatusColumn rowData={body} />}
          header="Статус"
          className={styles.column}
        />
        <Column header="" body={rowData => <ActionsColumn rowData={rowData} id={id as string} />} />
      </DataTable>
    </div>
  );
};

export default UserPaymentTable;
