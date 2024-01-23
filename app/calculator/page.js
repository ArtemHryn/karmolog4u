import Container from "@components/Common/Container/Container";
import HeroNav from "@components/Common/HeroNav/HeroNav";
import Title from "@components/Common/Title/Title";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import CalculatorLogo from "@components/Calculator/CalculatorLogo/CalculatorLogo";

const links = [
  {
    href: "/calculator",
    name: "Калькулятор",
  },
];

const matrixLinks = [
  {
    href: "/calculator/personal-matrix-of-fade",
    name: "Особисту матрицю",
  },
  {
    href: "/calculator/compatibility-matrix",
    name: "Матрицю сумісності",
  },
  {
    href: "/calculator/nine-tribes-of-the-family-matrix",
    name: "Матрицю “9 колін роду” ",
  },
  {
    href: "/calculator/groups-of-people-matrix",
    name: "Матрицю групи людей",
  },
  {
    href: "/calculator/matrix-of-the-year",
    name: "Матрицю року",
  },
  {
    href: "/calculator/demon-victim-matrix",
    name: "Матрицю “Демон жертва”",
  },
  {
    href: "/calculator/matrix-of-holistic-power",
    name: "Матрицю цілісної сили",
  },
  {
    href: "/calculator/parents-and-children-matrix",
    name: "Матрицю “Батьки та діти”",
  },
  {
    href: "/calculator/matrix-sixteen-laws-of-karma",
    name: "Матрицю “16 законів карми”",
  },
  {
    href: "/calculator/matrix-of-inner-karma",
    name: "Матрицю внутрішньої карми",
  },
  {
    href: "/calculator/matrix-of-consciousness",
    name: "Матрицю свідомості",
  },
];

function Calculator() {
  return (
    <main>
      <Container styledSection={styles.container}>
        <HeroNav linkNames={links} />
        <section className={styles.section}>
          <article>
            <Title variant="h5" styled={styles.about}>
              Безкоштовний калькулятор
            </Title>
            <Title variant="h1" styled={styles.title}>
              МАТРИЦІ ДОЛІ
            </Title>
          </article>
          <article>
            <Title variant="h3" styled={styles.links_title}>
              Яку матрицю бажаєте розрахувати?
            </Title>
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
              ❋ Калькулятор на 100% відповідає класичному обчисленню «Матриці
              Долі» Наталії Ладіні
            </p>
          </article>
          <CalculatorLogo styled={styles.logo_r} />
          <CalculatorLogo styled={styles.logo_l} />
        </section>
      </Container>
    </main>
  );
}

export default Calculator;