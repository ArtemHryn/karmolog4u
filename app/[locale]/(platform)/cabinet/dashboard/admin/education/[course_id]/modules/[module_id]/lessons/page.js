import { getServerSession } from 'next-auth';
import { authOptions } from '@app/api/auth/[...nextauth]/route';
import { base_url } from '@/helper/consts';
import { notFound } from 'next/navigation';
import Lessons from '@/components/Cabinet/DashBoard/Admin/Main/Education/Lessons/Lessons';

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

const LessonsPage = async ({ params }) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;
    if (!accessToken) {
      console.error('Access token not found in session');
      return <div>Немає доступу</div>;
    }

    const course = await editCourse(params.course_id, accessToken);

    if (!course) notFound();
    return <Lessons course={course} />;
  } catch (err) {
    console.error('Помилка завантаження курсу:', err);
    return notFound();
  }
};

export default LessonsPage;
