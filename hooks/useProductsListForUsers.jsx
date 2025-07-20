import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { base_url, PUBLISHED } from '../helper/consts';

const fetchProducts = async token => {
  const res = await fetch(
    // `${base_url}/admin/education/course/get-all/${PUBLISHED}?limit=100&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка завантаження курсів';
    throw new Error(message);
  }

  const data = await res.json();

  // Очікується структура: [ { data: [...] } ]
  if (!Array.isArray(data) || !Array.isArray(data[0]?.data)) return [];

  // return data[0].data.map(el => ({
  //   value: el.id,
  //   label: el.name,
  // }));
  return [];
};

export const useProductsListForUsers = () => {
  const { data: session } = useSession();

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['products_list', 'users'],
    queryFn: () => fetchProducts(session?.accessToken),
    enabled: !!session?.accessToken, // чекаємо на токен
  });
  return { productsList: data, isLoading, isError, error };
};
