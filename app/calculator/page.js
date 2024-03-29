import Container from '@components/Common/Container/Container';
import HeroNav from '@components/Common/HeroNav/HeroNav';
import Link from 'next/link';
import React from 'react';
import styles from '/components/Calculator/MainPage.module.scss';
import CalculatorLogo from '@components/Calculator/CalculatorLogo/CalculatorLogo';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import { matrixLinks } from '@helper/calculator/buttonsList';

const links = [
  {
    href: '/calculator',
    name: 'Калькулятор',
  },
];

function Calculator() {
  return (
    <>
      <Container styledSection={styles.container}>
        <HeroNav linkNames={links} />
        <section className={styles.section}>
          <article>
            <TitleNoStyles variant="h5" styled={styles.about}>
              Безкоштовний калькулятор
            </TitleNoStyles>
            <TitleNoStyles variant="h1" styled={styles.title}>
              МАТРИЦІ ДОЛІ
            </TitleNoStyles>
          </article>
          <article>
            <TitleNoStyles variant="h3" styled={styles.links_title}>
              Яку матрицю бажаєте розрахувати?
            </TitleNoStyles>
            <ul className={styles.links_list}>
              {matrixLinks.map((links, index) => (
                <li key={index}>
                  <Link href={links.href} className={styles.links}>
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className={styles.description}>
              ❋ Калькулятор на 100% відповідає класичному обчисленню &quot;Матриці Долі&quot;
              Наталії Ладіні
            </p>
          </article>
          <CalculatorLogo styled={styles.logo_r} />
          <CalculatorLogo styled={styles.logo_l} />
        </section>
      </Container>
    </>
  );
}

export default Calculator;
