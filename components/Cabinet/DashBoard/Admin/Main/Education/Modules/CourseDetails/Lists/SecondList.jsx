'use client';

import { accessTypeList, completenessList } from '@/helper/platform/coursesList';
import { inter, open_Sans } from '@/app/[locale]/layout';
import styles from '../CourseDetails.module.scss';
import { toast } from 'react-toastify';

const SecondList = ({ course }) => {
  return (
    <ul className={`${styles.details_list} ${styles.second_list}`}>
      <li className={styles.details_list_item}>
        <p className={`${styles.list_text} ${inter.className}`}>Комплектність:</p>
        <p className={`${styles.list_text}`}>
          {completenessList.find(item => item.value === course.completeness).name || 'Не вказано'}
        </p>
      </li>
      <li className={styles.details_list_item}>
        <p className={`${styles.list_text} ${inter.className}`}>Посилання:</p>
        <button
          className={`${styles.list_text} ${open_Sans.className} ${styles.list_button}`}
          onClick={() => {
            try {
              navigator.clipboard.writeText(course.chat);
              toast.success('Посилання скопійовано');
            } catch (error) {
              toast.error('Не вдалося скопіювати посилання');
            }
          }}
        >
          {course.chat}
        </button>
      </li>
      <li className={styles.details_list_item}>
        <p className={`${styles.list_text} ${inter.className}`}>Тип доступу:</p>
        <p className={`${styles.list_text}`}>
          {(() => {
            const access = course.access;
            const typeData = accessTypeList.find(item => item.value === access?.type);
            if (!typeData) return 'Не вказано';

            if (access.type === 'PERMANENT') {
              return typeData.name;
            }

            if (access.type === 'TO_DATE') {
              const start = new Date(access.start_date).toLocaleDateString('uk-UA');
              const end = new Date(access.end_date).toLocaleDateString('uk-UA');
              return `${typeData.name} з ${start} до ${end}`;
            }

            if (access.type === 'FOR_PERIOD') {
              const months = access.months;
              const suffix =
                months === 1 ? 'місяць' : months >= 2 && months <= 4 ? 'місяці' : 'місяців';
              return `${typeData.name} (${months} ${suffix})`;
            }

            return 'Не вказано';
          })()}
        </p>
      </li>
    </ul>
  );
};

export default SecondList;
