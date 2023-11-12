import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";
import Link from "next/link";
import Image from "next/image";

import styles from "./SendAppToAssociation.module.scss";

const SendAppToAssociation = () => {
  return (
    <Container>
      <Title styled={styles.title}>
        Вступ до Асоціації “Кармотерапії та психології”
      </Title>
      <div className={styles.main_wrapper}>
        <div className={styles.inner_wrapper}>
          <p className={styles.text}>
            Особи, які пройшли навчання в Школі трансформації Сергія Скляренка,
            досягли 18 років, мають експертність в галузі психології та суміжних
            напрямків, виявили бажання бути членами Асоціації, мають право
            подати заяву про зарахування до Асоціації.
          </p>
          <p className={styles.text}>
            Членство в Асоціації є платним, порядок та розмір членських внесків
            встановлюється Асоціацією.
          </p>
          <p className={styles.text}>
            Для отримання заяви на вступ до Асоціації “Кармотерапії та
            психології” заповніть свої дані, натиснувши на кнопку нижче
          </p>
          <Link href={"send-application"} className={styles.link}>
            Подати заявку
          </Link>
        </div>
        <picture className={styles.img}>
          <source
            srcSet={"/assets/images/humanPsychology/association_desc.webp"}
            media="(min-width: 1280px)"
          />
          <Image
            src={"/assets/images/humanPsychology/association.webp"}
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
