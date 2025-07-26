import { getServerSession } from 'next-auth';
import UserDetails from '@/components/Cabinet/DashBoard/Admin/Main/Users/UserDetails/UserDetails';
import { authOptions } from '@app/api/auth/[...nextauth]/route';
import { base_url } from '@/helper/consts';
import { notFound } from 'next/navigation';

import styles from './page.module.scss';

const fetchUserDetails = async (id, token) => {
  const res = await fetch(`${base_url}/admin/user/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження користувача');
  }
  return res.json();
};

export const revalidate = 0;

const UserProfilePage = async ({ params }) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;
    if (!accessToken || session.user.role !== 'ADMIN') {
      console.error('Access token not found in session');
      return <div>Немає доступу</div>;
    }
    const userDetails = await fetchUserDetails(params.id, accessToken);
    if (!userDetails) notFound();

    return (
      <main className={styles.main}>
        <UserDetails userDetails={userDetails} />
      </main>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
};

export default UserProfilePage;
