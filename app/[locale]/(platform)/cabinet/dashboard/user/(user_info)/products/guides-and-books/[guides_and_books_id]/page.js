import { base_url } from '@/helper/consts';
import { getServerSession } from 'next-auth';
import DetailedProduct from '@/components/Cabinet/DashBoard/User/UserInfo/Products/DetailedProduct/DetailedProduct';
import { authOptions } from '../../../../../../../../../api/auth/[...nextauth]/route';
import { notFound } from 'next/navigation';

export const revalidate = 0;

const fetchProduct = async (id, token) => {
  const res = await fetch(`${base_url}/product/get-details-product/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження Продукту');
  }
  return res.json();
};

const GuideAndBooksDetails = async ({ params }) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;
    if (!accessToken) {
      console.error('Access token not found in session');
      return <div>Немає доступу</div>;
    }
    const product = await fetchProduct(params.guides_and_books_id, accessToken);

    if (!product) notFound();
    return <DetailedProduct product={product} token={accessToken} />;
  } catch (err) {
    console.error('Помилка завантаження продукту:', err);
    return notFound();
  }
};

export default GuideAndBooksDetails;
