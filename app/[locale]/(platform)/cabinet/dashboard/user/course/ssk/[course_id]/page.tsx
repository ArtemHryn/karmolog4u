import CourseInfo from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/CourseInfo';

interface SSKPageProps {
  params: Promise<{ course_id: string }>;
}

const SSKPage = async ({ params }: SSKPageProps) => {
  const { course_id } = await params;

  return (
    <>
      <CourseInfo id={course_id} />
    </>
  );
};

export default SSKPage;
