import CourseHeader from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseHeader/CourseHeader';
import UserFooter from '@/components/Cabinet/DashBoard/User/Footer/Footer';
import { authOptions } from '../../../../../../../lib/authOptions';
import { getServerSession } from 'next-auth';

const CourseLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;
  return (
    <>
      <CourseHeader token={accessToken} />
      {children}
      <UserFooter />
    </>
  );
};

export default CourseLayout;
