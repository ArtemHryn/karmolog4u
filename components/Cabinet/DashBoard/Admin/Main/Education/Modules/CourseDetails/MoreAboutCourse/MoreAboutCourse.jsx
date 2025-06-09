'use client';

import { useState } from 'react';

import ModalContainer from '../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalLinks/ModalContainer';
import ModalContent from './ModalContent';

import { open_Sans } from '@/app/[locale]/layout';
import styles from './MoreAboutCourse.module.scss';

const MoreAboutCourse = ({ course }) => {
  const [openMoreDetails, setOpenMoreDetails] = useState(false);
  return (
    <div className={styles.more_about_course_wrapper}>
      <button
        className={`${styles.open_button} ${open_Sans.className}`}
        onClick={() => setOpenMoreDetails(true)}
      >
        Деталі курсу{' '}
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.95133 0.373248L13.7793 6.37325C14.0783 6.74425 14.0733 7.27425 13.7683 7.64025L8.76834 13.6402C8.57034 13.8772 8.28633 14.0002 7.99934 14.0002C7.77433 14.0002 7.54734 13.9242 7.36033 13.7682C6.93534 13.4152 6.87833 12.7842 7.23234 12.3602L11.7083 6.98925L7.39233 1.62725C7.04634 1.19725 7.11434 0.567248 7.54533 0.221248C7.97534 -0.125752 8.60433 -0.0567517 8.95133 0.373248ZM0.545235 0.221248C0.975235 -0.124752 1.60423 -0.0567517 1.95123 0.373248L6.77923 6.37325C7.07723 6.74425 7.07323 7.27425 6.76823 7.64025L1.76823 13.6402C1.57023 13.8772 1.28623 14.0002 0.999235 14.0002C0.774235 14.0002 0.547235 13.9242 0.360235 13.7682C-0.0647651 13.4152 -0.121765 12.7842 0.232235 12.3602L4.70723 6.98925L0.392235 1.62725C0.0462349 1.19725 0.115235 0.567248 0.545235 0.221248Z"
            fill="#2961E0"
          />
        </svg>
      </button>
      {openMoreDetails && (
        <ModalContainer setShowModal={setOpenMoreDetails}>
          <ModalContent course={course} setOpenMoreDetails={setOpenMoreDetails} />
        </ModalContainer>
      )}
    </div>
  );
};

export default MoreAboutCourse;
