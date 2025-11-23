import { CourseInfoHeaderProps } from '@/types/ssk_course';
import CourseInfoBodyWrapper from '../../CourseInfoBodyWrapper/CourseInfoBodyWrapper';
import ModulesList from './ModulesList/ModulesList';

const CourseInfoBody = ({ token, id }: CourseInfoHeaderProps) => {
  return (
    <CourseInfoBodyWrapper>
      <ModulesList token={token} id={id} />
    </CourseInfoBodyWrapper>
  );
};

export default CourseInfoBody;
