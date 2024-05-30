import Image from 'next/image';
import Link from 'next/link';
import Container from '@components/Common/Container/Container';

import styles from './AboutAssociation.module.scss';

const AboutAssociation = () => {
  return (
    <Container styled={styles.container}>
      <h1 className="visually-hidden">АСОЦІАЦІЯ “КАРМОТЕРАПІЇ ТА ПСИХОЛОГІЇ”</h1>
      <div className={styles.card_wrapper}>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/about_association_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/about_association.webp'}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Кожна успішна й обізнана людина має прагнути не тільки змінити своє життя, а ще й
             зробити щось соціально важливе для інших. Отже моя місія, а відповідно й мета —
            глобальна трансформація людства.
          </p>
          <p className={styles.text}>
            Задача не з легких, й так, достатньо амбітна, але ж  не під силу ми й не отримуємо —
            тому, своєю щоденною роботою я, разом  з моїми однодумцями, друзями, колегами, наближаю
            досягнення цієї мети.
          </p>
          <p className={styles.text}>
            Для кожного, хто цього потребує, щоб прискорити процеси й допомогти ще більшій кількості
            людей, я власне й  ініціював та створив громадську організацію та Асоціацію, які
            об&apos;єднують однодумців та фахівців найвищого класу.  Члени Асоціації  мають одну
            спільну ціль — надати потрібну допомогу та вчасно підтримати.
          </p>
        </div>
      </div>
      <div className={styles.card_wrapper}>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/about_association_2_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/about_association_2.webp'}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Діяльність учасників Асоціації направлена на здійснення благодійної професійної
            допомоги, спрямованої на глобальну трансформацію людства.
          </p>
          <p className={styles.text}>
            Ми реалізуємо це шляхом особистої психологічної підтримки, організації колективних
            семінарів, тренінгів та інших науково-практичних заходів, а також благодійних зборів.
          </p>
          <p className={styles.text}>
            Асоціація “Кармотерапії та психології” - це об&apos;єднання експертів у галузі
            психології та суміжних галузей.
          </p>
          <p className={styles.text}>
            До того, кожен учасник нашої Асоціації приймає та підтримує метод “Кармотерапія” та має
            за мету стати “провідником” глобальної трансформації людства.
          </p>
          <p className={styles.text}>Зміни відбуваються з нашою допомогою, але всередині Вас!</p>
          <p className={styles.text}>
            <Link
              href={'https://drive.google.com/drive/folders/1--EQIuMjzA7NDUAAliB9Yi_vAUEcuzU7'}
              target="_blank"
            >
              * Ознайомитись з положенням про Асоціацію та ГО детальніше
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutAssociation;
