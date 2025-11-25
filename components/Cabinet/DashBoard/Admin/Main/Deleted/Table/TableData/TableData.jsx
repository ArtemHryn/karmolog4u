'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import { ProgressSpinner } from 'primereact/progressspinner';
import SelectedProductsInfo from './SelectedProductsInfo/SelectedProductsInfo';
import Footer from './Footer/Footer';
import { base_url } from '@/helper/consts';

import styles from './TableData.module.scss';
import './table.scss';
import EmptyTable from './EmptyTable/EmptyTable';

const fetchDeletedProducts = async (token, search, page = 1) => {
  const response = await fetch(
    `${base_url}/admin/products/deleted/get-all?searchQuery=${search}&page=${page}&limit=20`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Помилка завантаження видалених продуктів');
  }
  return response.json();
};

const categoryNames = {
  ARCANES: 'Медитації по 22 енергіях',
  CLOSED: 'Медитації у закритому доступі',
  OPENED: 'Медитації у відкритому доступі',
  WEBINARS: 'Вебінари',
  ETHERS: 'Терапевтичні ефіри',
  GUIDES: 'Гайди по 22 енергіям',
  OTHER_GUIDES: 'Інші гайди',
  BOOKS: 'Друковані видання',
};

const TableData = ({ search }) => {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: token } = useSession();

  const {
    data: deletedProducts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['deleted_products', search, currentPage],
    queryFn: () => fetchDeletedProducts(token.accessToken, search, currentPage),
    placeholderData: prevD => prevD,
  });

  if (isLoading) {
    return (
      <div className={styles.loader_wrapper}>
        <ProgressSpinner />
      </div>
    );
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const proceedData = deletedProducts?.[0]?.data?.map(item => {
    const { category, expiredAt } = item;
    const categoryTableName = categoryNames[category] || '-';
    return {
      ...item,
      categoryTableName,
      expiredAt: format(new Date(expiredAt), 'dd.MM.yy HH:mm:ss'),
    };
  });
  return (
    <div className={styles.info_wrapper}>
      {selectedProducts && selectedProducts.length > 0 && (
        <SelectedProductsInfo
          selectedProducts={selectedProducts}
          search={search}
          currentPage={currentPage}
          toast={toast}
          setCurrentPage={setCurrentPage}
          setSelectedProducts={setSelectedProducts}
        />
      )}
      {deletedProducts[0].data.length === 0 ? (
        <EmptyTable search={search} noRecords={'У вас немає видалених продуктів'} />
      ) : (
        <DataTable
          value={proceedData}
          selection={selectedProducts}
          onSelectionChange={e => setSelectedProducts(e.value)}
          dataKey="id"
          tableClassName={`${styles.table}`}
          resizableColumns
          showGridlines
          footer={
            <Footer
              totalPage={Math.ceil(deletedProducts[0].totalProducts / 20)}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              total={deletedProducts[0].totalProducts}
            />
          }
        >
          <Column selectionMode="multiple" className={styles.column} />
          <Column field="name.uk" header="Назва" className={styles.column} />
          <Column field="section" header="Розділ" className={styles.column} />
          <Column field="categoryTableName" header="Категорія" className={styles.column} />
          <Column field="expiredAt" header="Дата видалення" className={styles.column} />
        </DataTable>
      )}
      <ToastContainer />
    </div>
  );
};

export default TableData;
