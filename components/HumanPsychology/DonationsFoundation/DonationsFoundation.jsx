import Container from '@components/Common/Container/Container';
import Image from 'next/image';
import React from 'react';

import styles from './DonationsFoundation.module.scss';
import Title from '@components/Common/Title/Title';

function DonationsFoundation() {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <Title styled={styles.title} variant="h2">
        Мої стосунки з грошима та благодійністю
      </Title>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <article className={styles.article}>
            <p className={styles.text}>
              До речі, мої стосунки з грошима також проходили трансформації і я не завжди знав про
              ці кармічні закони.
            </p>
            <p className={styles.text}>
              У  21 рік на керівній посаді з зарплатнею в тисячі доларів на місяць, я був абсолютно
              бідною людиною й тільки з моменту, коли я змінив своє ставлення до грошей, я став
              багатим.
            </p>
            <p className={styles.text}>
              Після однієї з подорожей до Непалу я стовідсотково переконався, що гроші — то енергія
              й важливо відстежувати свої переконання щодо них. Так, наприклад, там місцеві монахи
              готові покладати тисячні купюри до всіх вівтарів на своєму шляху, тому що у них
              абсолютно інші переконання про гроші. Інколи навіть складалось враження, що в них
              нескінченний банк з купюрами.
            </p>
          </article>
          <picture className={styles.img}>
            <source
              srcSet={'/assets/images/humanPsychology/donations_foundation_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/donations_foundation.webp'}
              width={736}
              height={360}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
        </div>
        <div className={styles.section}>
          <article className={styles.article}>
            <p className={styles.text}>
              Вже багато років я допомагаю людям, адже маю постійні запити, й не тільки
              консультаціями, а й матеріально, бо розумію наскільки важливим це є для власного
              розвитку та місії, але головним є завжди один критерій – це поклик моєї душі.
            </p>
            <p className={styles.text}>
              І ще, ми живемо в буремні часи, тому всі збори, які я підтримую особисто та закликаю
              підтримувати мою аудиторію, мають використовуватися за цільовим призначенням, а тому
              проходять ретельну перевірку, щоб дійсно сприяти розв&apos;язанню питань нужденного, а
              не збагаченню шахрая.
            </p>
            <p className={styles.text}>
              Безмежно радію за кожного, хто дарує добро іншим та дякую вам за донати у благодійний
              фонд ГО “Психологія людської долі” – разом творити дива легше!
            </p>
          </article>
          <picture className={`${styles.img} ${styles.hide_img}`}>
            <source
              srcSet={'/assets/images/humanPsychology/my_history_foundation_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/my_history_foundation.webp'}
              width={736}
              height={360}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
        </div>
      </div>
      <div className={styles.spot} />
    </Container>
  );
}

export default DonationsFoundation;
