import ConsultingCourseInfo from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/Consultation/ConsultingCourseInfo';

interface DetailedConsultingPageProps {
  params: Promise<{ course_id: string }>;
}

const DetailedConsultingPage = async ({ params }: DetailedConsultingPageProps) => {
  const { course_id } = await params;

  return <ConsultingCourseInfo id={course_id} />;
};

export default DetailedConsultingPage;
