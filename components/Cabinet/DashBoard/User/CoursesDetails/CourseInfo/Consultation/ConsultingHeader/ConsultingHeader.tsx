'use client';

import { fetchCourseDetailsForUser } from '@helper/platform/fetchCourseDetailsForUser';
import { useSuspenseQuery } from '@tanstack/react-query';
import AgreementInfo from './AgreementInfo/AgreementInfo';

interface ConsultingHeaderProps {
  token: string;
  id: string;
}

const ConsultingHeader = ({ token, id }: ConsultingHeaderProps) => {
  const { data: course, isError } = useSuspenseQuery({
    queryKey: ['course', id],
    queryFn: () => fetchCourseDetailsForUser(token, id),
  });
  console.log(course);
  return (
    <div>
      <AgreementInfo isSign={course?.purchaseInfo?.agreement} />
    </div>
  );
};

export default ConsultingHeader;
