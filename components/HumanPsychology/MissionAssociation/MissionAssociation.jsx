import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";
import Link from "next/link";

import styles from "./MissionAssociation.module.scss";

const MissionAssociation = () => {
  return (
    <Container styledSection={styles.section} styled={styles.container}>
      <div className={styles.spot} />
      <Title styled={styles.title}>Місія ГО та Асоціації</Title>
      <p className={styles.warning}>
        *з установчими документами можете ознайомитись{" "}
        <Link
          href={
            "https://drive.google.com/drive/folders/1--EQIuMjzA7NDUAAliB9Yi_vAUEcuzU7"
          }
          target="_blank"
        >
          тут
        </Link>
      </p>
      <p className={styles.about_psycho}>
        Психічне здоров’я – це основа якісного життя кожної людини. В Україні,
        як і у всьому світі, велика кількість людей стикаються зі складними
        психологічними викликами. Наша Місія полягає в підтримці їх
        благополуччя.
        <b>На що ми будемо опиратися?</b>
      </p>
      <ul className={styles.mission_list}>
        <li className={styles.mission_item}>
          <p className={styles.mission_text}>
            Підвищення психологічного благополуччя. Ми розробляємо інформаційні,
            а також освітні тренінги та програми, що допомагають покращити
            якість життя. Наша мета – надати вам інструменти для розвитку та
            підтримки вашого психічного здоров’я
          </p>
          <Title variant="p" styled={styles.mission_number}>
            1
          </Title>
        </li>
        <li className={styles.mission_item}>
          <p className={styles.mission_text}>
            Підтримка тих, хто цього потребує. Ми надаємо кваліфіковану
            психологічну та матеріальну підтримку дітям, підліткам, військовим
            та іншим силовим структурам, а також вразливим громадянам, які
            опинилися в складній ситуації через хворобу або надзвичайні
            обставини
          </p>
          <Title variant="p" styled={styles.mission_number}>
            2
          </Title>
        </li>
      </ul>
    </Container>
  );
};

export default MissionAssociation;
