import { SSK_INDEPENDENT } from '@/helper/consts';
import CourseInfoHeaderTextIndependent from './CourseInfoHeaderTextIndependent';
import CourseInfoHeaderWithChat from './CourseInfoHeaderWithChat';
import { CourseInfoHeaderWithChatProps } from '@/types/ssk_course';

const CourseInfoHeaderText = ({ type }: CourseInfoHeaderWithChatProps) => {
  if (type === SSK_INDEPENDENT) {
    return <CourseInfoHeaderTextIndependent />;
  }

  return <CourseInfoHeaderWithChat type={type} />;
};

export default CourseInfoHeaderText;
