import CalculatorHero from "@components/Calculator/CalculatorHero/CalculatorHero";
import Container from "@components/Common/Container/Container";
import React from "react";

const heroData = {
  links: [
    {
      href: "/calculator",
      name: "Калькулятор",
    },
    {
      href: "/compatibility-matrix",
      name: "Розрахувати матрицю сумісності",
    },
  ],
  about: "Онлайн-розрахунок",
  title: "МАТРИЦІ \n СУМІСНОСТІ",
  desc: [
    "Будувати стосунки, будь то любов, партнерство, сім’я, бізнес, підлеглі — завжди кропітка та витратна за часом й силами робота. ",
    "А якщо ми скажемо вам, що є «інструкція» для порозуміння з будь-ким?",
    "«Матриця Сумісності» допоможе зрозуміти ваш взаємозв’язок з партнером, покаже, які задачі проявлені перед вами обома в соціальному та духовному світах. Підкаже, як саме взаємодіяти з іншою стороною, для вибудовування гармонійних, не токсичних та ефективних робочих чи особистих стосунків.",
    "У кожного тандему — є власний ресурс, важливо тільки знайти його та підсилювати — тоді успіх та взаєморозуміння вам гарантовані!",
  ],
};

function CompatibilityMatrix() {
  return (
    <main>
      <Container>
        <CalculatorHero heroData={heroData} />
      </Container>
    </main>
  );
}

export default CompatibilityMatrix;
