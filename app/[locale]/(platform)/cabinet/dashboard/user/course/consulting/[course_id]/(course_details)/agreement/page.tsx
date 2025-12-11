import Agreement from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/Agreement/Agreement';

import { Suspense } from 'react';

const AgreementPage = async () => {
  return (
    <Suspense fallback={<div></div>}>
      <Agreement />
    </Suspense>
  );
};

export default AgreementPage;
