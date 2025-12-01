import CourseHeader from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseHeader/CourseHeader';
import UserFooter from '@/components/Cabinet/DashBoard/User/Footer/Footer';
import { unbounded } from '../../../../../layout';

const CourseLayout = ({ children }) => {
  return (
    <>
      <CourseHeader unbounded={unbounded} />
      {children}
      <UserFooter />
    </>
  );
};

export default CourseLayout;
