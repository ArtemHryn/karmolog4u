import { useQuery } from '@tanstack/react-query';
import { base_url } from '../helper/consts';

const endpoints = {
  courses: { path: 'get-all-course', mainPath: 'coursePurchase' },
  achievement: { path: 'get-achievement', mainPath: 'coursePurchase' },
  products: { path: 'get-all-products', mainPath: 'productPurchase' },
};

const getUserInfo = async (token, action, type) => {
  const endpoint = endpoints[action];
  const res = await fetch(
    `${base_url}/${endpoint.mainPath}/${type ? `${endpoint.path}/${type}` : `${endpoint.path}`}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody?.message || 'Помилка');
  }

  return await res.json();
};

const useUserInfo = ({ action, token, queryKey, activePart }) => {
  return useQuery({
    queryKey,
    queryFn: () => getUserInfo(token, action, activePart),
    enabled: !!token,
  });
};

export default useUserInfo;
