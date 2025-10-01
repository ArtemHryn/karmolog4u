'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import SectionsTemplate from '../SectionsTemplate/SectionsTemplate';
import { base_url } from '@/helper/consts';
import useUserInfo from '@/hooks/useUserInfo';

import styles from './CompletedCourses.module.scss';

const course = [
  {
    name: 'Курс 1 з довгою назвою на два рядки і ще додамо третій',
    numberOfLessons: 22,
    img: '/assets/images/therapySessions/session-insight-mob.webp',
  },
  {
    name: 'Курс 2',
    numberOfLessons: 22,
    img: '/assets/images/therapySessions/session-insight-mob.webp',
  },
];

const getCompletedCourses = async token => {
  const res = fetch(`${base_url}/coursePurchase/get-achievement`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody?.message || 'Помилка');
  }
  return res.json();
};

const CompletedCourses = () => {
  const { data: token } = useSession();

  const {
    data: courses,
    isLoading,
    isError,
  } = useUserInfo({
    token: token?.accessToken,
    action: 'achievement',
    queryKey: ['user-achievement'],
  });

  return (
    <SectionsTemplate title={'Пройдені курси'}>
      <ul className={styles.list}>
        {[0, 1, 2].map(i => (
          <li key={i} className={styles.item}>
            {course[i] ? (
              <div className={styles.item_wrapper}>
                <Image
                  src={course[i].img}
                  width={138}
                  alt={course[i].name}
                  height={83}
                  className={styles.img}
                />
                <div className={styles.desc_wrapper}>
                  <p className={styles.name}>{course[i].name}</p>
                  <p className={styles.lessons}>
                    {course[i].numberOfLessons}/{course[i].numberOfLessons} уроків
                  </p>
                </div>
              </div>
            ) : (
              <div className={styles.empty}></div>
            )}
          </li>
        ))}
      </ul>
    </SectionsTemplate>
  );
};

export default CompletedCourses;
