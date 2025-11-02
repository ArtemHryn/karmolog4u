'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import AccountLabel from './AccountLabel/AccountLabel';
import Logo from '../../../../Authentication/FormHeader/Logo';

import { unbounded } from '@/app/[locale]/layout';
import { fetchCourseDetailsForUser } from '@/helper/platform/fetchCourseDetailsForUser';

import styles from './CourseHeader.module.scss';

const CourseHeader = () => {
  const pathName = usePathname();
  const { course_id } = useParams();
  const { data } = useSession();

  const { data: course } = useQuery({
    queryKey: ['course', course_id],
    queryFn: () => fetchCourseDetailsForUser(data?.accessToken, course_id),
    enabled: !!data?.accessToken,
  });

  const sections = {
    ssk: { style: styles.ssk, title: 'САМ СОБІ КАРМОЛОГ' },
    advanced: { style: styles.advanced, title: 'Поглиблений курс' },
    consulting: { style: styles.consulting, title: 'КОНСУЛЬТАНТСЬКИЙ КУРС ' },
  };

  const activeSection = Object.keys(sections).find(key => pathName.includes(key));

  const header = [styles.header, activeSection ? sections[activeSection].style : null]
    .filter(Boolean)
    .join(' ');

  const greeting = activeSection ? sections[activeSection].title : 'Курс';
  const availableTo = course?.purchaseInfo?.availableTo
    ? new Date(course?.purchaseInfo?.availableTo).toLocaleString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : null;

  return (
    <header className={header}>
      <div className={styles.logo_wrapper}>
        <Link href={'/cabinet/dashboard/user/achievement'} className={styles.logo_link}>
          <Logo />
        </Link>
        <AccountLabel />
      </div>
      <div className={styles.greeting_wrapper}>
        <p className={`${styles.greeting} ${unbounded.className}`}>{greeting}</p>
        <p className={`${styles.date} ${unbounded.className}`}>
          Курс дійсний до {availableTo && availableTo}
        </p>
      </div>
    </header>
  );
};

export default CourseHeader;
