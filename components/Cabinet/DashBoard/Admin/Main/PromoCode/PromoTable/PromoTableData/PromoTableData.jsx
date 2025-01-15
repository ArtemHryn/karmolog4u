import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { format } from 'date-fns';
import EmptyTable from '../../../Deleted/Table/TableData/EmptyTable/EmptyTable';
import Footer from '../../../Deleted/Table/TableData/Footer/Footer';
import ActionsColumn from './ActionsColumn/ActionsColumn';
import ConfirmDialog from '../../../Products/ConfirmDialogSet/ConfirmDialog/ConfirmDialog';

import { base_url } from '@helper/consts';
import styles from './PromoTableData.module.scss';
import './table.scss';
import SelectedProductsInfo from './SelectedProductsInfo/SelectedProductsInfo';

const fetchPromoCodes = async (token, search, page) => {
  const response = await fetch(
    `${base_url}/admin/promo-code/get?searchQuery=${search}&page=${page}&limit=20`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Помилка завантаження промокодів');
  }
  return response.json();
};

const deletePromoById = async (token, id) => {
  const res = await fetch(`${base_url}/admin/promo-code/delete/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify([id]),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Щось пішло не так');
  }

  return res.json();
};

const PromoTableData = ({ search }) => {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleDialogToDelete, setVisibleDialogToDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { data: token } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: promocodes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['promocodes', search, currentPage],
    queryFn: () => fetchPromoCodes(token.accessToken, search, currentPage),
    placeholderData: prevD => prevD,
  });

  const mutation = useMutation({
    mutationFn: () => deletePromoById(token.accessToken, selectedId),
    onSuccess: () => {
      queryClient.invalidateQueries(['promocodes']);
    },
  });

  const onDelete = () => {
    mutation.mutate();
    setVisibleDialogToDelete(false);
    document.body.style.overflow = 'auto';
  };

  const onReject = callback => {
    callback(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', currentPage);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [currentPage, router, searchParams]);

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

  const proceedData = promocodes?.data?.map(item => {
    const { promoDiscount, start, end, usedCounter } = item;
    return {
      ...item,
      promoDiscount: `${promoDiscount}%`,
      validTo: `${format(new Date(start), 'dd.MM.yy')} - ${format(new Date(end), 'dd.MM.yy')}`,
      used: `${usedCounter} шт.`,
    };
  });

  return (
    <div>
      <div className={`${styles.overlay} ${!visibleDialogToDelete ? styles.hide_overlay : ''}`}>
        <ConfirmDialog
          header={`Видалити промокод`}
          message={
            'Цей промокод буде видалений і стане недійсним. Ви впевнені, що хочете продовжити?'
          }
          accept={onDelete}
          reject={() => onReject(setVisibleDialogToDelete)}
          acceptContext={`Видалити`}
        />
      </div>
      {selectedProducts && selectedProducts.length > 1 && (
        <SelectedProductsInfo selectedProducts={selectedProducts} />
      )}
      {promocodes.data.length === 0 ? (
        <EmptyTable search={search} noRecords={'У вас немає промокодів'} />
      ) : (
        <DataTable
          value={proceedData}
          selection={selectedProducts}
          onSelectionChange={e => setSelectedProducts(e.value)}
          dataKey="_id"
          tableClassName={`${styles.table}`}
          resizableColumns
          showGridlines
          footer={
            <Footer
              totalPage={Math.ceil(promocodes.totalPromo / 20)}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              total={promocodes.totalPromo}
            />
          }
        >
          <Column selectionMode="multiple" className={styles.column} />
          <Column field="name" header="Назва" className={styles.column} />
          <Column field="promoDiscount" header="Знижка" className={styles.column} />
          <Column field="validTo" header="Срок дії" className={styles.column} />
          <Column field="used" header="Використано" className={styles.column} />
          <Column field="productName" header="Продукт для знижки" className={styles.column} />
          <Column
            body={rowData => (
              <ActionsColumn
                rowData={rowData}
                search={search}
                currentPage={currentPage}
                setSelectedId={setSelectedId}
                setVisibleDialogToDelete={setVisibleDialogToDelete}
              />
            )}
            header=""
          />
        </DataTable>
      )}
    </div>
  );
};

export default PromoTableData;
