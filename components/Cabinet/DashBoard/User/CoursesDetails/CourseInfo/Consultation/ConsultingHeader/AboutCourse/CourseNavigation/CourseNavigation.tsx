import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { AboutCourse } from '@/types/cons_adv_courses';
import {
  AgreementIcon,
  PaymentIcon,
  LiteratureIcon,
  ChatIcon,
  SupDepIcon,
  Certificate,
  ToSSKIcon,
} from './Icons';
import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import useUserInfo from '@/hooks/useUserInfo';

import styles from './CourseNavigation.module.scss';

interface CourseNavigationProps {
  course: AboutCourse;
}

interface CourseItem {
  id: string;
  type: string;
  accessEndDate: string;
}

const CourseNavigation = ({ course }: CourseNavigationProps) => {
  const pathName = usePathname();
  const { data: token } = useSession();

  const {
    data: coursesList,
    isLoading,
    isError,
  } = useUserInfo({
    token: token?.accessToken,
    action: 'courses',
    queryKey: ['user-courses'],
  });

  const getLinkToSSK = (): string | false => {
    if (isLoading || isError || !coursesList?.length) return false;

    const latest = coursesList.reduce((acc: CourseItem | null, el: CourseItem) => {
      if (!el.type.includes('SSK')) return acc;
      if (!acc) return el;

      return new Date(el.accessEndDate).getTime() > new Date(acc.accessEndDate).getTime()
        ? el
        : acc;
    }, null);

    return latest ? latest.id : false;
  };

  const linkToSSK = getLinkToSSK();

  return (
    <ul className={styles.list}>
      <li className={`${styles.item}`}>
        <Link href={`${pathName}/agreement`} className={`${styles.redirect_el}`}>
          <div className={styles.icon_wrapper}>
            <AgreementIcon />
          </div>
          Договір учасника
        </Link>
      </li>
      <li className={`${styles.item}`}>
        <button
          onClick={() => {}}
          className={`${styles.redirect_el} ${open_Sans_Client.className}`}
        >
          <div className={styles.icon_wrapper}>
            <PaymentIcon />
          </div>
          Оплата теорії
        </button>
      </li>
      <li className={`${styles.item}`}>
        <button
          onClick={() => {}}
          className={`${styles.redirect_el} ${open_Sans_Client.className}`}
        >
          <div className={styles.icon_wrapper}>
            <PaymentIcon />
          </div>
          Оплата практики
        </button>
      </li>
      {linkToSSK && (
        <li className={`${styles.item}`}>
          <Link
            href={`/cabinet/dashboard/user/course/ssk/${linkToSSK}`}
            className={`${styles.redirect_el}`}
          >
            <div className={styles.icon_wrapper}>
              <ToSSKIcon />
            </div>
            Вступний курс по методу
          </Link>
        </li>
      )}
      <li className={`${styles.item}`}>
        <Link href={`${pathName}/literature`} className={`${styles.redirect_el}`}>
          <div className={styles.icon_wrapper}>
            <LiteratureIcon />
          </div>
          Список літератури
        </Link>
      </li>
      <li className={`${styles.item}`}>
        <Link
          href={course.chat}
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.redirect_el}`}
        >
          <div className={styles.icon_wrapper}>
            <ChatIcon />
          </div>
          Чат учасників
        </Link>
      </li>
      <li className={`${styles.item}`}>
        {' '}
        <Link href={'cabinet/dashboard/user/support'} className={`${styles.redirect_el}`}>
          <div className={styles.icon_wrapper}>
            <SupDepIcon />
          </div>
          Відділ турботи
        </Link>
      </li>
      <li className={`${styles.item}`}>
        <button
          onClick={() => {}}
          className={`${styles.redirect_el} ${open_Sans_Client.className}`}
        >
          <div className={styles.icon_wrapper}>
            <Certificate />
          </div>
          Отримати сертифікат
        </button>
      </li>
    </ul>
  );
};

export default CourseNavigation;
