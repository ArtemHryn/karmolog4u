import Link from 'next/link';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import { open_Sans } from '@app/layout';
//icons
import GraduationCap from '@components/Common/Icons/PshychoIcons/GraduationCap';
import ChatArrowGrow from '@components/Common/Icons/PshychoIcons/ChatArrowGrow';
import Document from '@components/Common/Icons/PshychoIcons/Document';
import VenusMars from '@components/Common/Icons/PshychoIcons/VenusMars';
import HandHoldingHeart from '@components/Common/Icons/PshychoIcons/HandHoldingHeart';
import Stethoscope from '@components/Common/Icons/PshychoIcons/Stethoscope';

import styles from './TasksAssociation.module.scss';

const TasksAssociation = () => {
  return (
    <Container styledSection={styles.section} styled={styles.container}>
      <div className={styles.spot} />
      <Title styled={styles.title}>Завдання нашої Громадської організації та Асоціації</Title>
      <ul className={styles.main_list}>
        <li className={styles.main_list_item}>
          <ul className={styles.inner_list}>
            <li className={styles.inner_list_item}>
              <p className={styles.text}>
                Задоволення гуманітарних потреб дітей, зокрема доступу до освіти, психосоціальної
                допомоги та кураторства
              </p>
              <GraduationCap styled={styles.icon} />
            </li>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_gold}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>
                Розвиток та поглиблення співробітництва з міжнародними організаціями задля
                поставленої мети
              </p>
              <ChatArrowGrow styled={styles.icon} />
            </li>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_light}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>
                Покращення безпеки здоров&apos;я
              </p>
              <Stethoscope styled={`${styles.icon}`} />
            </li>
          </ul>
        </li>
        <li className={styles.main_list_item}>
          <ul className={styles.inner_list}>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_light}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>
                Впровадження високих соціальних стандартів життя для кожного
              </p>
              <Document styled={styles.icon} />
            </li>
            <li className={`${styles.inner_list_item} ${styles.inner_list_item_gold}`}>
              <p className={`${styles.text} ${styles.text_dark}`}>
                Популяризація та дотримання принципів гендерної рівності
              </p>
              <VenusMars styled={styles.icon} />
            </li>
            <li className={styles.inner_list_item}>
              <p className={styles.text}>
                Гуманітарна та інша допомога дітям, які позбавлені батьківського піклування,
                підліткам, особам з інвалідністю, хворим, а також дитячим будинкам та закладам
                знаходження зазначених груп людей тощо
              </p>
              <HandHoldingHeart styled={styles.icon} />
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.write_us_wrapper}>
        <p className={styles.write_us_text}>
          Звісно перелік наших завдань набагато ширший, але важливо інше – ви завжди можете написати
          нам про свою проблему й ми спробуємо допомогти, зарадити чи підтримати
        </p>
        <Link
          href={'https://t.me/karmologforyou'}
          className={`${styles.write_us_btn} ${open_Sans.className}`}
        >
          Написати
        </Link>
      </div>
    </Container>
  );
};

export default TasksAssociation;
