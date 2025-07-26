import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { base_url } from '../helper/consts';

const fetchProducts = async token => {
  const res = await fetch(`${base_url}/admin/products/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка завантаження продуктів';
    throw new Error(message);
  }

  const data = await res.json();

  if (!data.list || !Array.isArray(data.list)) return [];

  return data.list.map(el => ({
    value: el.id,
    label: el.name,
  }));
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
