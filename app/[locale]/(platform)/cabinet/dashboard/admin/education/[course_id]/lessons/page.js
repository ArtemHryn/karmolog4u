import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions.js';
import { base_url } from '@/helper/consts';
import { notFound } from 'next/navigation';
import Lessons from '@/components/Cabinet/DashBoard/Admin/Main/Education/Lessons/Lessons';

export const revalidate = 0;

const courseDetails = async (id, token) => {
  const res = await fetch(`${base_url}/admin/education/course/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження курсу');
  }
  return res.json();
};

const LessonsPage = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;
  if (!accessToken) {
    console.error('Access token not found in session');
    notFound();
  }

  const course = await courseDetails(params.course_id, accessToken);

  if (!course) notFound();
  console.log(course);

  return <Lessons course={course} />;
};

export default LessonsPage;
