import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";

import GraduationCap from "@components/Common/Icons/PshychoIcons/GraduationCap";
import ChatArrowGrow from "@components/Common/Icons/PshychoIcons/ChatArrowGrow";
import Document from "@components/Common/Icons/PshychoIcons/Document";
import VenusMars from "@components/Common/Icons/PshychoIcons/VenusMars";
import HandHoldingHeart from "@components/Common/Icons/PshychoIcons/HandHoldingHeart";
import Stethoscope from "@components/Common/Icons/PshychoIcons/Stethoscope";

import styles from "./TasksAssociation.module.scss";

const TasksAssociation = () => {
  return (
    <Container>
      <Title styled={styles.title}>Завдання ГО та Асоціації</Title>
      <ul className={styles.main_list}>
        <li className={styles.main_list_item}>
          <ul className={styles.inner_list}>
            <li className={styles.inner_list_item}>
              <p className={styles.text}>
                Задоволення гуманітарних потреб дітей, зокрема доступу до
                освіти, психосоціальної допомоги
              </p>
              <GraduationCap styled={styles.icon} />
            </li>
            <li
              className={`${styles.inner_list_item} ${styles.inner_list_item_gold}`}
            >
              <p className={`${styles.text} ${styles.text_dark}`}>
                Розвиток та співробітництво з міжнародними організаціями
              </p>
              <ChatArrowGrow styled={styles.icon} />
            </li>
            <li
              className={`${styles.inner_list_item} ${styles.inner_list_item_light}`}
            >
              <p className={`${styles.text} ${styles.text_dark}`}>
                Безпека здоров&apos;я
              </p>
              <Stethoscope styled={`${styles.icon}`} />
            </li>
          </ul>
        </li>
        <li className={styles.main_list_item}>
          <ul className={styles.inner_list}>
            <li
              className={`${styles.inner_list_item} ${styles.inner_list_item_light}`}
            >
              <p className={`${styles.text} ${styles.text_dark}`}>
                Впровадження високих соціальних стандартів життя
              </p>
              <Document styled={styles.icon} />
            </li>
            <li
              className={`${styles.inner_list_item} ${styles.inner_list_item_gold}`}
            >
              <p className={`${styles.text} ${styles.text_dark}`}>
                Дотримання принципів гендерної рівності
              </p>
              <VenusMars styled={styles.icon} />
            </li>
            <li className={styles.inner_list_item}>
              <p className={styles.text}>
                Гуманітарна та інша допомога дітям, які позбавлені батьківського
                піклування, підліткам, особам з інвалідністю, хворим, а також
                дитячим будинкам та закладам знаходження зазначених груп людей
              </p>
              <HandHoldingHeart styled={styles.icon} />
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  );
};

export default TasksAssociation;
