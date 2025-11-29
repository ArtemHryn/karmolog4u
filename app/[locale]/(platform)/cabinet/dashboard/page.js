import { authOptions } from '@/lib/authOptions.js';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const CabinetPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/cabinet/login');
  }
  const redirectTo =
    session.user.role === 'ADMIN' ? '/cabinet/dashboard/admin/products' : '/cabinet/dashboard/user';

  redirect(redirectTo);
};

export default CabinetPage;
