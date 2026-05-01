import EditEvent from '@/components/Cabinet/DashBoard/Admin/Main/Events/EditEvent/EditEvent';
import { base_url } from '@/helper/consts';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

const getEventById = async (id: string, token: string) => {
  try {
    const res = await fetch(`${base_url}/admin/events/get/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
};

const EditEventPage = async ({ params }: { params: { id: string } }) => {
  try {
    // @ts-expect-error: JS authOptions is untyped
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;
    if (!accessToken || session.user.role !== 'ADMIN') {
      console.error('Access token not found in session');
      return <div>Немає доступу</div>;
    }

    const event = await getEventById(params.id, accessToken);

    if (!event) notFound();
    return <EditEvent event={event} />;
  } catch (err) {
    console.error('error in EditCoursePage:', err);
    return <div>Не вдалося завантажити подію</div>;
  }
};

export default EditEventPage;
