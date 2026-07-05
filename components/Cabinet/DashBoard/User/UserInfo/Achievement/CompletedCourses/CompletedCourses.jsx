'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import SectionsTemplate from '../SectionsTemplate/SectionsTemplate';
import useUserInfo from '@/hooks/useUserInfo';

import styles from './CompletedCourses.module.scss';
import Loader from '../../../Loader/Loader';

const CompletedCourses = () => {
  const { data: token } = useSession();

  const {
    data: achi,
    isLoading,
    isError,
  } = useUserInfo({
    token: token?.accessToken,
    action: 'achievement',
    queryKey: ['user-achievement'],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className={styles.error_wrapper}>
        <p className={styles.error_text}>Помилка завантаження списку пройденних курсів</p>
        <p className={styles.error_text}>
          Будь ласка, спробуйте ще або зверніться до адміністратора
        </p>
      </div>
    );
  }

  if (!achi) return null;
  const achievements = [...(achi ?? []), ...Array(Math.max(0, 3 - (achi?.length ?? 0))).fill(null)];

  return (
    <SectionsTemplate title={'Пройдені курси'}>
      <ul className={styles.list}>
        {achievements.map((c, i) => (
          <li key={i} className={styles.item}>
            {c !== null ? (
              <div className={styles.item_wrapper}>
                <Image src={c.cover} width={138} alt={c.name} height={83} className={styles.img} />
                <div className={styles.desc_wrapper}>
                  <p className={styles.name}>{c.name}</p>
                  <p className={styles.lessons}>
                    {c.numberOfLessons}/{c.numberOfLessons} уроків
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
