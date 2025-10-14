import { Suspense } from 'react';
import CourseInfoHeader from './CourseInfoHeader/CourseInfoHeader';

const CourseInfo = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CourseInfoHeader />
      </Suspense>
    </div>
  );
};

export default CourseInfo;
