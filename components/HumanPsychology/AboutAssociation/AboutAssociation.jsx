import Image from "next/image";
import Link from "next/link";
import Container from "@components/Common/Container/Container";

import styles from "./AboutAssociation.module.scss";

const AboutAssociation = () => {
  return (
    <Container styled={styles.container}>
      <h1 className="visually-hidden">
        АСОЦІАЦІЯ “КАРМОТЕРАПІЇ ТА ПСИХОЛОГІЇ”
      </h1>
      <div className={styles.card_wrapper}>
        <picture className={styles.img}>
          <source
            srcSet={
              "/assets/images/humanPsychology/about_association_desc.webp"
            }
            media="(min-width: 1280px)"
          />
          <Image
            src={"/assets/images/humanPsychology/about_association.webp"}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Кожен день я роблю впевнені кроки до своєї заповітної мрії, яка
            стала для мене справжнім стилем життя – глобальна трансформація
            людства. Це та мрія, яка надихає мене до дій, яка мотивує мене і дає
            наснаги на нові звершення.
          </p>
          <p className={styles.text}>
            Саме тому я вирішив створити організацію та асоціацію, які
            об’єднають справжніх професіоналів своєї справи. Члени Асоціації
            згуртовані єдиною ціллю та бажанням: допомогти і підтримати тих,
            кому це справді потрібно.
          </p>
          <p className={styles.text}>
            Діяльність членів Асоціації спрямована на те, щоб проводити
            благодійну професійну діяльність задля глобальної трансформації
            людства в форматі особистої психологічної підтримки, організації
            колективних семінарів, тренінгів та інших науково-практичних
            заходів, благодійних зборів
          </p>
        </div>
      </div>
      <div className={styles.card_wrapper}>
        <picture className={styles.img}>
          <source
            srcSet={
              "/assets/images/humanPsychology/about_association_2_desc.webp"
            }
            media="(min-width: 1280px)"
          />
          <Image
            src={"/assets/images/humanPsychology/about_association_2.webp"}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Асоціація &#34;Кармотерапії та психології&#34; - це об&apos;єднання
            експертів галузі психології та суміжних напрямків.
          </p>
          <p className={styles.text}>
            А це означає, що кожен член Асоціації приймає та підтримує методичні
            посібники та підходи методу &#34;Кармотерапія&#34; та має на меті
            головну ціль - бути двигуном глобальної трансформації людства.
          </p>
          <p className={styles.text}>
            * ознайомитись з положенням про асоціацію і ГО можливо{" "}
            <Link
              href={
                "https://drive.google.com/drive/folders/1--EQIuMjzA7NDUAAliB9Yi_vAUEcuzU7"
              }
              target="_blank"
            >
              тут
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutAssociation;
