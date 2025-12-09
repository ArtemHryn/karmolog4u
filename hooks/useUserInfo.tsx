import { useQuery } from '@tanstack/react-query';
import { base_url } from '../helper/consts';

const endpoints = {
  courses: { path: 'get-all-course', mainPath: 'coursePurchase' },
  achievement: { path: 'get-achievement', mainPath: 'coursePurchase' },
  products: { path: 'get-all-products', mainPath: 'productPurchase' },
};

interface UseUserInfoProps {
  action: 'courses' | 'achievement' | 'products';
  token?: string;
  queryKey: string[];
  activePart?: string;
}

const getUserInfo = async (token: string, action: keyof typeof endpoints, type: string) => {
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
    throw errorBody;
  }

  return await res.json();
};

const useUserInfo = ({ action, token = '', queryKey, activePart = '' }: UseUserInfoProps) => {
  return useQuery({
    queryKey,
    queryFn: () => getUserInfo(token, action, activePart),
    enabled: !!token,
  });
};

export default useUserInfo;
