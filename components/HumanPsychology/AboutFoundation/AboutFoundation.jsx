import Container from '@components/Common/Container/Container';
import Image from 'next/image';

import styles from './AboutFoundation.module.scss';
import Title from '@components/Common/Title/Title';

function AboutFoundation() {
  return (
    <>
      <Container>
        <h1 className="visually-hidden">БЛАГОДІЙНИЙ ФОНД</h1>
        <div className={styles.section}>
          <picture className={styles.img}>
            <source
              srcSet={'/assets/images/humanPsychology/about_foundation_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/about_foundation.webp'}
              width={736}
              height={430}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
          <article className={styles.article}>
            <p className={styles.text}>
              Кармологи часто кажуть, що без щедрості багатства не буває. Ні, це зовсім не означає,
              що ви взагалі не матимете грошей, проте, вище певного рівня “виживання” не пригнете.
            </p>
            <p className={styles.text}>
              Досвід наших пращурів навчив накопичувати, ховати під матрац та економити, але час
              змінювати свою свідомість, а відповідно, й світ навколо.
            </p>
            <p className={styles.text}>
              Спробуйте інший підхід до грошей, зробіть благодійний внесок і відчуйте силу
              кармічного відкупу.
            </p>
            <p className={styles.text}>
              Кожен донат від щирого серця сприяє глобальній трансформації та на додаток, допомагає
              реалізації ваших власних бажань.
            </p>
          </article>
        </div>
      </Container>
      <Container>
        <Title styled={styles.title}>Донати, які реалізують мрії!</Title>
        <div className={styles.section}>
          <picture className={styles.img}>
            <source
              srcSet={'/assets/images/humanPsychology/about_foundation_2_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/about_foundation_2.webp'}
              width={736}
              height={420}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
          <article className={styles.article}>
            <p className={styles.text}>
              Благодійний фонд “Психологія людської долі” пропонує вам можливість зробити внесок для
              реалізації вашого наміру та підтримки тих, хто цього дійсно потребує.
            </p>
            <p className={styles.text}>
              Поєднати корисне та приємне – не питання, адже ваші донати – це енергія, яку ви зі
              своїм конкретним наміром відправляєте, і яка примноженою, повертається до вас й
              пришвидшує отримання бажаного.
            </p>
          </article>
        </div>
      </Container>
    </>
  );
}

export default AboutFoundation;
