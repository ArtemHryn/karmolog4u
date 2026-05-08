import { authOptions } from '@/lib/authOptions';
import Events from '../../../../../../../components/Cabinet/DashBoard/Admin/Main/Events/Events';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const EventsPage = async () => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;
  if (!accessToken) {
    redirect('/login');
  }
  return <Events token={accessToken || ''} />;
};

export default EventsPage;
