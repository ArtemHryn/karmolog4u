import CourseHeader from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseHeader/CourseHeader';
import UserFooter from '@/components/Cabinet/DashBoard/User/Footer/Footer';

const CourseLayout = ({ children }) => {
  return (
    <>
      <CourseHeader />
      {children}
      <UserFooter />
    </>
  );
};

export default CourseLayout;
