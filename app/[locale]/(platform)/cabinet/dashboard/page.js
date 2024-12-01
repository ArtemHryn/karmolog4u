import { auth } from '@auth';
import { redirect } from 'next/navigation';

const CabinetPage = async () => {
  const {user} = await auth();

  const redirectTo =
    user.role === 'ADMIN' ? '/cabinet/dashboard/admin/products' : '/cabinet/dashboard/user';
  redirect(redirectTo);
};

export default CabinetPage;
