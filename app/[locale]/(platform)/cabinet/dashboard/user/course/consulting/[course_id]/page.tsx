import ConsultingCourseInfo from '@components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/Consultation/ConsultingCourseInfo';

interface DetailedConsultingPageProps {
  params: { course_id: string };
}

const DetailedConsultingPage = ({ params }: DetailedConsultingPageProps) => {
  return <ConsultingCourseInfo id={params.course_id} />;
};

export default DetailedConsultingPage;
