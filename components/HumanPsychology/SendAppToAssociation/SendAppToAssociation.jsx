import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import Link from 'next/link';
import Image from 'next/image';

import styles from './SendAppToAssociation.module.scss';

const SendAppToAssociation = () => {
  return (
    <Container styledSection={styles.section} styled={styles.container}>
      <div className={styles.spot} />
      <Title styled={styles.title}>Вступ до Асоціації “Кармотерапії та психології”</Title>
      <div className={styles.main_wrapper}>
        <div className={styles.inner_wrapper}>
          <p className={styles.text_bold}>
            Ви розділяєте наші цінності та хотіли б стати одним з нас – будемо раді вам!
          </p>
          <p className={styles.text}>
            Заповнюйте заявку для отримання заяви на вступ до Асоціації, якщо ви:
          </p>
          <ul>
            <li>
              <p className={styles.text}>➢ досягли 18 років</p>
            </li>
            <li>
              <p className={styles.text}>
                ➢ пройшли навчання в «Школі трансформації Сергія Скляренка»
              </p>
            </li>
            <li>
              <p className={styles.text}>
                ➢ маєте експертність в галузі психології та суміжних напрямків
              </p>
            </li>
            <li>
              <p className={styles.text}>➢ прагнете брати участь у трансформації людства</p>
            </li>
          </ul>
          <p className={styles.text}>
            Членство в Асоціації є платним — порядок та розмір внесків встановлюється Асоціацією.
          </p>
          <p className={styles.text_bold}>Разом змінювати світ легше — приєднуйтесь!</p>
          <Link href={'send-application'} className={styles.link}>
            Вступ до Асоціації
          </Link>
        </div>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/association_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/association.webp'}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            className={styles.img}
          />
        </picture>
      </div>
    </Container>
  );
};

export default SendAppToAssociation;
