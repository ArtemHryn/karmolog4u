import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
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
import { ADVANCED, CONSULTING, FULL } from '@/helper/consts';
import Calculator from './Icons/Calculator';
import { useCertDownloading } from '@/hooks/useCertDownloading';
import PaymentButton from './PaymentButton';

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
  const params = useParams();
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

  const { downloadCert, isPending } = useCertDownloading({
    token: token?.accessToken || '',
    user: `${token?.user.name || 'unknown'}_${token?.user.lastName || 'unknown'}`,
    id: params.course_id as string,
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

  const mainPathname = () => {
    if (pathName.split('/').pop() !== course.id) {
      const p = pathName.split('/').slice(0, -1).join('/');
      return `${p}/`;
    }
    return `${pathName}/`;
  };

  return (
    <ul className={styles.list}>
      <li className={`${styles.item} ${pathName.includes('agreement') ? styles.active_item : ''}`}>
        <Link
          href={`${mainPathname()}agreement`}
          className={`${styles.redirect_el} ${
            pathName.includes('agreement') ? styles.active_link : ''
          }`}
        >
          <div
            className={`${styles.icon_wrapper} ${
              pathName.includes('agreement') ? styles.active_link : ''
            }`}
          >
            <AgreementIcon />
          </div>
          Договір учасника
        </Link>
      </li>
      <li className={`${styles.item}`}>
        <PaymentButton
          type={'course'}
          disabled={course.purchaseInfo.paymentPlan === FULL}
          buttonName={course.type === CONSULTING ? 'Оплата теорії' : 'Внести платіж'}
          icon={PaymentIcon}
          course={course}
        />
      </li>
      {course.type === CONSULTING && (
        <li className={`${styles.item}`}>
          <PaymentButton
            type={'practice'}
            disabled={
              !course.numberOfPractices ||
              course.numberOfPractices === course.purchaseInfo.practiceAmount
            }
            buttonName={'Оплата практики'}
            icon={PaymentIcon}
            course={course}
          />
        </li>
      )}
      {linkToSSK && course.type === CONSULTING && (
        <li className={`${styles.item}`}>
          <Link
            href={`/cabinet/dashboard/user/course/ssk/${linkToSSK}`}
            className={`${styles.redirect_el}`}
          >
            <div className={styles.icon_wrapper}>
              <ToSSKIcon />
            </div>
            Інтенсив по матриці
          </Link>
        </li>
      )}
      <li className={`${styles.item} ${pathName.includes('literature') ? styles.active_item : ''}`}>
        <Link
          href={`${mainPathname()}literature`}
          className={`${styles.redirect_el} ${
            pathName.includes('literature') ? styles.active_link : ''
          }`}
        >
          <div
            className={`${styles.icon_wrapper} ${
              pathName.includes('literature') ? styles.active_link : ''
            }`}
          >
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
        <Link href={'/cabinet/dashboard/user/support'} className={`${styles.redirect_el}`}>
          <div className={styles.icon_wrapper}>
            <SupDepIcon />
          </div>
          Відділ турботи
        </Link>
      </li>
      {course.type === CONSULTING && (
        <li className={`${styles.item}`}>
          <button
            onClick={downloadCert}
            className={`${styles.redirect_el} ${open_Sans_Client.className}`}
            disabled={isPending || !course.purchaseInfo.completed}
          >
            <div className={styles.icon_wrapper}>
              <Certificate />
            </div>
            Отримати сертифікат
          </button>
        </li>
      )}
      {course.type === ADVANCED && (
        <li className={`${styles.item}`}>
          {' '}
          <Link href={'/calculator'} className={`${styles.redirect_el}`}>
            <div className={styles.icon_wrapper}>
              <Calculator />
            </div>
            Калькулятор
          </Link>
        </li>
      )}
    </ul>
  );
};

export default CourseNavigation;
