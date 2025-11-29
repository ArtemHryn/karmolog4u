import { getServerSession } from 'next-auth';
import EditCourse from '@/components/Cabinet/DashBoard/Admin/Main/Education/EditCourse/EditCourse';
import { authOptions } from '@/lib/authOptions.js';
import { base_url } from '@/helper/consts';
import { notFound } from 'next/navigation';

export const revalidate = 0;

const editCourse = async (id, token) => {
  const res = await fetch(`${base_url}/admin/education/course/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження курсу');
  }
  return res.json();
};

const EditCoursePage = async ({ params }) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;
    if (!accessToken || session.user.role !== 'ADMIN') {
      console.error('Access token not found in session');
      return <div>Немає доступу</div>;
    }

    const course = await editCourse(params.id, accessToken);

    if (!course) notFound();
    return <EditCourse course={course} />;
  } catch (err) {
    console.error('error in EditCoursePage:', err);
    return <div>Не вдалося завантажити курс</div>;
  }
};

export default EditCoursePage;
