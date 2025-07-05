import { getServerSession } from 'next-auth';
import { authOptions } from '@app/api/auth/[...nextauth]/route';
import { base_url } from '@/helper/consts';
import { notFound } from 'next/navigation';
import EditModule from '@/components/Cabinet/DashBoard/Admin/Main/Education/Modules/EditModule/EditModule';

export const revalidate = 0;

const editModule = async (id, token, course_id) => {
  const moduleRes = await fetch(`${base_url}/admin/education/modules/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!moduleRes.ok) {
    const errorMessage = await moduleRes.json();
    throw new Error(errorMessage.message || 'Помилка завантаження модуля');
  }

  const moduleData = await moduleRes.json();

  const courseRes = await fetch(`${base_url}/admin/education/course/get/${course_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!courseRes.ok) {
    const errorMessage = await courseRes.json();
    throw new Error(errorMessage.message || 'Помилка завантаження курсу');
  }

  const courseData = await courseRes.json();

  return { module: moduleData, course: courseData };
};

const EditModulePage = async ({ params }) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;

    if (!accessToken || session.user.role !== 'ADMIN') {
      console.error('Немає доступу до токена або роль не ADMIN');
      return <div>Немає доступу</div>;
    }

    const moduleAndCourseInfo = await editModule(params.module_id, accessToken, params.course_id);

    if (!moduleAndCourseInfo.module) notFound();
    return (
      <EditModule moduleInfo={moduleAndCourseInfo.module} courseInfo={moduleAndCourseInfo.course} />
    );
  } catch (err) {
    console.error('error:', err);
    return <div>Не вдалося завантажити курс</div>;
  }
};

export default EditModulePage;
