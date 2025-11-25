'use client';

import Link from 'next/link';
import { SSK_INDEPENDENT, SSK_WITH_CURATOR } from '@/helper/consts';
import { CourseInfoHeaderWithChatProps } from '@/types/ssk_course';
import LiteratureList from './Icons/LiteratureList';
import Support from './Icons/Support';
import Certificate from './Icons/Certificate';

import styles from './CourseInfoHeaderButtons.module.scss';
import { open_Sans } from '@/app/[locale]/layout';

const CourseInfoHeaderButtons = ({ type, completed, chat }: CourseInfoHeaderWithChatProps) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <Link href={'#'} className={`${styles.link}`}>
          <LiteratureList /> Список літератури
        </Link>
      </li>
      <li className={styles.list_item}>
        <Link href={'/cabinet/dashboard/user/support'} className={`${styles.link}`}>
          <Support /> Відділ турботи
        </Link>
      </li>
      <li className={styles.full_width}>
        <button
          onClick={() => {}}
          disabled={!completed}
          className={`${styles.certificate} ${open_Sans.className}`}
        >
          <Certificate /> Отримати сертифікат
        </button>
      </li>
      {type !== SSK_INDEPENDENT && (
        <li className={styles.full_width}>
          <Link href={chat ? chat : '#'} className={`${styles.link}`}>
            Чат з {type === SSK_WITH_CURATOR ? 'куратором' : 'Сергієм'}
          </Link>
        </li>
      )}
    </ul>
  );
};

export default CourseInfoHeaderButtons;
