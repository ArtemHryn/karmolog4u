import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';

import { useCoursesList } from '@/hooks/useCoursesListForUsers';
import { FULL, INSTALLMENTS, PARTIAL } from '@/helper/consts';
import useUserPurchaseActions from '@/hooks/useUserPurchaseActions';

import styles from './UserCourseInfoAddCourse.module.scss';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

const UserCourseInfoAddCourse = ({ availableCourses, isLoadingCourses }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { id } = useParams();
  const { data: token } = useSession();

  const { coursesOptions, isError, isLoading } = useCoursesList();

  const coursesMutation = useUserPurchaseActions({
    token: token?.accessToken,
    onSuccessCallback: () => setSelectedOption(null),
  });

  const filteredCourses = () => {
    if (!availableCourses || availableCourses.length === 0) return coursesOptions;
    return coursesOptions.filter(c => !availableCourses.includes(c.value));
  };

  const onAddingInstallment = () => {
    const coursesWithPaymentPlan = selectedOption.map(({ value, type }) => ({
      courseId: value,
      paymentPlan: type.includes('SSK_') ? PARTIAL : INSTALLMENTS,
    }));
    coursesMutation.mutate({ action: 'add', data: { courses: coursesWithPaymentPlan }, id });
  };

  if (isLoadingCourses) return null;

  return (
    <>
      <div className={styles.save_courses_button_wrapper}>
        <p>Додати до курсу</p>
        {selectedOption?.length > 0 && (
          <>
            <button
              className={styles.save_courses_button}
              onClick={() =>
                coursesMutation.mutate({
                  action: 'add',
                  data: {
                    courses: selectedOption.map(o => ({ courseId: o.value, paymentPlan: FULL })),
                  },
                  id,
                })
              }
            >
              <svg viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.6163 0.212835C13.1823 -0.129165 12.5543 -0.0511646 12.2133 0.383835L5.15833 9.39184L1.77933 5.19484C1.43133 4.76584 0.80333 4.69584 0.37333 5.04284C-0.0576697 5.38984 -0.12467 6.01984 0.22033 6.44884L4.38933 11.6268C4.58033 11.8628 4.86633 11.9998 5.16933 11.9998H5.17633C5.48033 11.9978 5.76833 11.8568 5.95633 11.6158L13.7873 1.61584C14.1283 1.18184 14.0523 0.552835 13.6163 0.212835ZM18.6163 0.212835C18.1813 -0.129165 17.5543 -0.0511646 17.2133 0.383835L10.1583 9.39184L9.55433 8.64284L8.28933 10.2598L9.38933 11.6268C9.58033 11.8628 9.86633 11.9998 10.1693 11.9998H10.1763C10.4803 11.9978 10.7683 11.8568 10.9563 11.6158L18.7873 1.61584C19.1283 1.18184 19.0523 0.552835 18.6163 0.212835ZM6.98003 5.44444L5.71303 7.06044L5.22103 6.44944C4.87503 6.01944 4.94203 5.38944 5.37303 5.04244C5.80403 4.69644 6.43303 4.76544 6.77903 5.19544L6.98003 5.44444Z"
                  fill="#1D2023"
                />
              </svg>
            </button>
            <button className={styles.save_courses_button} onClick={() => onAddingInstallment()}>
              <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z"
                  fill="#1D2023"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      <SelectNoSSR
        isMulti
        isLoading={isLoading}
        options={isError ? [] : filteredCourses()}
        value={selectedOption}
        onChange={opt => setSelectedOption(opt)}
        styles={{
          menu: base => ({
            ...base,
            zIndex: 3,
            maxWidth: '600px',
          }),
          control: base => ({
            ...base,
            minHeight: '44px',
            maxWidth: '600px',
          }),
        }}
      />
    </>
  );
};

export default UserCourseInfoAddCourse;
