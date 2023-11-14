import Container from "@components/Common/Container/Container";
import Image from "next/image";
import React from "react";

import styles from "./AboutFoundation.module.scss";

function AboutFoundation() {
  return (
    <Container styled={styles.container}>
      <h1 className="visually-hidden">БЛАГОДІЙНИЙ ФОНД</h1>
      <section className={styles.section}>
        <picture className={styles.img}>
          <source
            srcSet={"/assets/images/humanPsychology/about_foundation_desc.webp"}
            media="(min-width: 1280px)"
          />
          <Image
            src={"/assets/images/humanPsychology/about_foundation.webp"}
            width={736}
            height={430}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <article className={styles.article}>
          <p className={styles.text}>
            Після подорожі в Непал я на 100% переконався, що гроші - то є
            енергія
          </p>
          <p className={styles.text}>
            В старому розумінні, яке нам закладалось соціумом, ми звикли
            сприймати купюри, як єдиний інструмент для виживання в цьому світі.
            А тому намагалися побільше сховати їх під подушкою
          </p>
          <p className={styles.text}>
            Але поки вами керують саме такі переконання про гроші, далі
            виживання в цьому житті ви дійти не зможете. Навіть якщо суми на
            карті будуть збільшуватися, цих коштів буде вистачати рівно на
            виживання
          </p>
          <p className={styles.text}>
            Я сам пережив цей досвід, коли в 21 рік на керівній посаді
            держструктури з зарплатнею в тисячі доларів на місяць, я був
            абсолютно бідною людиною. Тільки з моменту, коли я змінив своє
            ставлення до грошей, я став багатим
          </p>
        </article>
      </section>
      <section className={styles.section}>
        <picture className={styles.img}>
          <source
            srcSet={
              "/assets/images/humanPsychology/about_foundation_2_desc.webp"
            }
            media="(min-width: 1280px)"
          />
          <Image
            src={"/assets/images/humanPsychology/about_foundation_2.webp"}
            width={736}
            height={420}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <article className={styles.article}>
          <p className={styles.text}>
            Наприклад, в Непалі місцеві монахи готові покладати тисячні купюри
            до всіх вівтарів на своєму шляху, тому що у них абсолютно інші
            переконання про гроші. Інколи навіть складалось враження, що в них
            безкінечний банк з купюрами. Як гадаєте, чому?
          </p>
          <p className={styles.text}>
            Благодійний донат від щирого серця має надзвичайно велику силу, адже
            слугує кармічним відкупом. Кармічний відкуп - це енрегія, яку ви
            виражаєте в грошовому еквіваленті, щоб трансформувати той чи інший
            аспект в своїй долі. Як вам така перспектива на гроші?
          </p>
          <p className={styles.text}>
            Благодійний фонд ГО &#34;Психологія людської долі&#34; надає вам
            можливість спробувати діяти в стосунках з грошима по-іншому
          </p>
        </article>
      </section>
    </Container>
  );
}

export default AboutFoundation;
