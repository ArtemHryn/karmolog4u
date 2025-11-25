import CourseInfo from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/CourseInfo';

interface SSKPageProps {
  params: { course_id: string };
}

const SSKPage = ({ params }: SSKPageProps) => {
  return (
    <>
      <CourseInfo id={params.course_id} />
    </>
  );
};

export default SSKPage;
