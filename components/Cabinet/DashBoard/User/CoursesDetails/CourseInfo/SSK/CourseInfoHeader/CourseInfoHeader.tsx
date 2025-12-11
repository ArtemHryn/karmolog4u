'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import CourseInfoHeaderButtons from './CourseInfoHeaderButtons/CourseInfoHeaderButtons';
import CourseInfoHeaderText from './CourseInfoHeaderText/CourseInfoHeaderText';
import { CourseInfoHeaderProps } from '@/types/ssk_course';
import { fetchCourseDetailsForUser } from '@/helper/platform/fetchCourseDetailsForUser';

import styles from './CourseInfoHeader.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CourseInfoHeader = ({ token, id }: CourseInfoHeaderProps) => {
  const pathName = usePathname();

  const { data: course } = useSuspenseQuery({
    queryKey: ['course', id],
    queryFn: () => fetchCourseDetailsForUser(token, id),
    staleTime: 60 * 1000,
  });
  const splittedPath = pathName.split('/');

  const showReturn = splittedPath[splittedPath.length - 2] === id;

  const link = splittedPath.slice(0, -1).join('/');

  return (
    <div>
      {showReturn && (
        <Link href={link} className={styles.link_back}>
          <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7684 1.63982L9.29244 7.01082L13.6074 12.3728C13.9534 12.8028 13.8854 13.4318 13.4554 13.7788C13.2704 13.9278 13.0484 13.9998 12.8284 13.9998C12.5364 13.9998 12.2464 13.8718 12.0484 13.6268L7.22044 7.62682C6.92244 7.25582 6.92644 6.72482 7.23144 6.35982L12.2314 0.359821C12.5854 -0.0651786 13.2154 -0.121179 13.6404 0.231821C14.0644 0.584821 14.1214 1.21582 13.7684 1.63982ZM5.23204 0.359521C5.58504 -0.0644785 6.21504 -0.121479 6.64004 0.231521C7.06404 0.585521 7.12104 1.21552 6.76804 1.63952L2.29204 7.01052L6.60704 12.3725C6.95304 12.8025 6.88504 13.4325 6.45504 13.7785C6.27004 13.9275 6.04904 13.9995 5.82804 13.9995C5.53604 13.9995 5.24604 13.8725 5.04904 13.6265L0.22104 7.62652C-0.0779603 7.25552 -0.0729603 6.72552 0.23204 6.35952L5.23204 0.359521Z"
              fill="#CFB691"
            />
          </svg>
          Повернутись до програми курсу
        </Link>
      )}
      <div className={styles.wrapper}>
        <CourseInfoHeaderText type={course.type} />
        <CourseInfoHeaderButtons type={course.type} completed={true} chat={course.chat} />
      </div>
    </div>
  );
};

export default CourseInfoHeader;
