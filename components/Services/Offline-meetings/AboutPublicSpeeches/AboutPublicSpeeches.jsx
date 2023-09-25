import Image from "next/image";
import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";

import styles from "./AboutPublicSpeeches.module.scss";

const AboutPublicSpeeches = () => {
  return (
    <Container styled={styles.container}>
      <Title styled={styles.title}>Про публічні виступи</Title>
      <picture className={styles.img}>
        <source
          srcSet="/assets/images/public_speech_desc.webp"
          media="(min-width: 1280px)"
        />
        <Image
          src="/assets/images/public_speech.webp"
          alt="Сергій на Публічному виступі"
          width={768}
          height={420}
        />
      </picture>
      <div className={styles.list}>
        <p>
          Публічні виступи – рідкісна можливість запросити мене в будь-яке місце
          (місто, країна) провести лекцію з теми на вибір для вашої аудиторії. У
          вас буде шанс зібратися разом з однодумцями та наставником в моєму
          лиці, щоб отримати шалений енергетичний заряд, перейняти мудрість,
          практичний досвід і знайти відповіді на питання, що хвилюють.
        </p>
        <p>*Публічні виступи можуть надаватися онлайн</p>

        <Image
          src={"/assets/images/sergiy_on_interview.webp"}
          width={628}
          height={193}
          alt="Сергій на інтвер'ю"
          className={styles.img_in_list}
        />
      </div>
    </Container>
  );
};

export default AboutPublicSpeeches;
