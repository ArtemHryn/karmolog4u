'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CourseInfoHeaderWithChatProps } from '@/types/ssk_course';
import LiteratureList from './Icons/LiteratureList';
import Support from './Icons/Support';
import Certificate from './Icons/Certificate';
import { SSK_INDEPENDENT, SSK_WITH_CURATOR } from '@/helper/consts';
import { open_Sans } from '@/app/[locale]/layout';

import styles from './CourseInfoHeaderButtons.module.scss';

const CourseInfoHeaderButtons = ({ type, completed, chat }: CourseInfoHeaderWithChatProps) => {
  const pathName = usePathname();

  const getLiteratureLink = () => {
    const splittedPathName = pathName.split('/');
    if (splittedPathName.pop() === 'literature') return pathName;
    return `${pathName}/literature`;
  };

  console.log(chat);

  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <Link
          href={getLiteratureLink()}
          className={`${styles.link} ${
            pathName.split('/').pop() === 'literature' ? styles.active : ''
          }`}
        >
          <LiteratureList /> Матеріали
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
          className={`${styles.link} ${open_Sans.className}`}
        >
          <Certificate /> Отримати сертифікат
        </button>
      </li>
      {type !== SSK_INDEPENDENT && (
        <li className={styles.full_width}>
          <Link
            href={chat ? chat : '#'}
            className={`${styles.link}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Чат з {type === SSK_WITH_CURATOR ? 'куратором' : 'Сергієм'}
          </Link>
        </li>
      )}
    </ul>
  );
};

export default CourseInfoHeaderButtons;
