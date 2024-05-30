import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import Link from 'next/link';

import styles from './MissionAssociation.module.scss';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import Document from './Document';

const MissionAssociation = () => {
  return (
    <Container styledSection={styles.section} styled={styles.container}>
      <div className={styles.spot} />
      <Title styled={styles.title}>Місія ГО та Асоціації</Title>
      <p className={styles.warning}>
        <Document />
        <Link
          href={'https://drive.google.com/drive/folders/1--EQIuMjzA7NDUAAliB9Yi_vAUEcuzU7'}
          target="_blank"
        >
          Установчі документи
        </Link>
      </p>
      <p className={styles.about_psycho}>
        Психологічне благополуччя вже давно у всьому світі визнано не розкішшю, а необхідністю.
         Українці останнім часом, через виклики сьогодення, ще більше стикаються з необхідністю
        підтримки та покращення психологічного здоров&apos;я, то ж  наша місія, як людей, які мають
        необхідні знання, навички, досвід та досягнення – допомагати їм в цьому.
      </p>
      <TitleNoStyles variant="h3" styled={styles.mission_title}>
        Для вас ми можемо бути корисними:
      </TitleNoStyles>
      <ul className={styles.mission_list}>
        <li className={styles.mission_item}>
          <p className={styles.mission_text}>
            <b>У підвищенні психологічного благополуччя.</b> Наші висококваліфіковані фахівці
            постійно працюють над розробкою  освітніх програм, тренінгів та методологічних
            посібників, які стануть інструментами-помічниками для вас, на шляху розвитку та
            підтримки психічного здоров&apos;я та психологічної стабільності.
          </p>
          <Title variant="p" styled={styles.mission_number}>
            1
          </Title>
        </li>
        <li className={styles.mission_item}>
          <p className={styles.mission_text}>
            <b> У різнобічній підтримці (в залежності від запиту та ситуації).</b> Ми завжди шукаємо
            шляхи допомоги персоналізовано – це може бути психологічна або матеріальна допомога не
            залежно від віку та соціального статусу, головний критерій якої — потреба людей, які за
            різних обставин, опинились в складних життєвих ситуаціях.
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
