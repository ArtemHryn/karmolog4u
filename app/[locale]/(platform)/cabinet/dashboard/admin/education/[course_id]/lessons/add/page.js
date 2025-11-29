import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions.js';
import { base_url } from '@/helper/consts';
import { notFound } from 'next/navigation';
import AddLesson from '@/components/Cabinet/DashBoard/Admin/Main/Education/Lessons/AddLesson/AddLesson';

export const revalidate = 0;

const getCourseInfo = async (id, token) => {
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

const AddModulePage = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;
  if (!accessToken) {
    console.error('Access token not found in session');
    return <div>Немає доступу</div>;
  }

  const course = await getCourseInfo(params.course_id, accessToken);

  if (!course) notFound();
  try {
    return <AddLesson course={course} />;
  } catch (error) {
    console.error('Помилка завантаження модулів:', error);
    return notFound();
  }
};

export default AddModulePage;
