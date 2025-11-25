import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { base_url } from '@/helper/consts';
import { notFound } from 'next/navigation';
import EditLesson from '@/components/Cabinet/DashBoard/Admin/Main/Education/Lessons/EditLesson/EditLesson';

export const revalidate = 0;

const fetchPageInfo = async (id, token, course_id) => {
  const resCourseInfo = await fetch(`${base_url}/admin/education/course/get/${course_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!resCourseInfo.ok) {
    const errorMessage = await resCourseInfo.json();
    throw new Error(errorMessage.message || 'Помилка завантаження курсу');
  }

  const courseData = await resCourseInfo.json();

  const lessonRes = await fetch(`${base_url}/admin/education/lessons/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!lessonRes.ok) {
    const errorMessage = await lessonRes.json();
    throw new Error(errorMessage.message || 'Помилка завантаження модуля');
  }

  const lessonData = await lessonRes.json();
  return { lesson: lessonData, course: courseData };
};

const EditLessonPage = async ({ params }) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;

    if (!accessToken || session.user.role !== 'ADMIN') {
      console.error('Немає доступу до токена або роль не ADMIN');
      return <div>Немає доступу</div>;
    }

    const { lesson, course } = await fetchPageInfo(params.lesson_id, accessToken, params.course_id);
    return <EditLesson course={course} editLesson={lesson} />;
  } catch (error) {
    console.error('Помилка завантаження модулів:', error);
    return notFound();
  }
};

export default EditLessonPage;
