import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Container from '@/components/Common/Container/Container';
import Title from '@/components/Common/Title/Title';
import { open_Sans } from '@/app/[locale]//layout';
//icons
import GraduationCap from '@/components/Common/Icons/PshychoIcons/GraduationCap';
import ChatArrowGrow from '@/components/Common/Icons/PshychoIcons/ChatArrowGrow';
import Document from '@/components/Common/Icons/PshychoIcons/Document';
import VenusMars from '@/components/Common/Icons/PshychoIcons/VenusMars';
import HandHoldingHeart from '@/components/Common/Icons/PshychoIcons/HandHoldingHeart';
import Stethoscope from '@/components/Common/Icons/PshychoIcons/Stethoscope';

import styles from './TasksAssociation.module.scss';

const TasksAssociation = () => {
  const t = useTranslations('Human_psychology.Association.Tasks');
  return (
    <Container styledSection={styles.section} styled={styles.container}>
      <div className={styles.spot} />
      <Title variant="h2" styled={styles.title}>
        {t('title')}
      </Title>
      <ul className={styles.main_list}>
        <li className={styles.main_list_item}>
          <ul className={styles.inner_list}>
            <li className={styles.inner_list_item}>
              <p className={styles.text}>{t('task1')}</p>
              <GraduationCap styled={styles.icon} />
            </li>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_gold}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>{t('task2')}</p>
              <ChatArrowGrow styled={styles.icon} />
            </li>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_light}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>{t('task3')}</p>
              <Stethoscope styled={`${styles.icon}`} />
            </li>
          </ul>
        </li>
        <li className={styles.main_list_item}>
          <ul className={styles.inner_list}>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_light}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>{t('task4')}</p>
              <Document styled={styles.icon} />
            </li>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_gold}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>{t('task5')}</p>
              <VenusMars styled={styles.icon} />
            </li>
            <li className={styles.inner_list_item}>
              <p className={styles.text}>{t('task6')}</p>
              <HandHoldingHeart styled={styles.icon} />
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.write_us_wrapper}>
        <p className={styles.write_us_text}>{t('you_always_can_write_us')}</p>
        <Link
          href={'https://t.me/karmologforyou'}
          className={`${styles.write_us_btn} ${open_Sans.className}`}
        >
          {t('button')}
        </Link>
      </div>
    </Container>
  );
};

export default TasksAssociation;
