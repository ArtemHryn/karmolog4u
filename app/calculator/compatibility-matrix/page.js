'use client';

import { useState } from 'react';
import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import CompatibilityMatrixForm from '@components/Calculator/CompatibilityMatrix/CompatibilityMatrixForm/CompatibilityMatrixForm';
import Container from '@components/Common/Container/Container';
import CompatibilityMatrix from '@components/Calculator/CompatibilityMatrix/CompatibilityMatrix';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/compatibility-matrix',
      name: 'Розрахувати матрицю сумісності',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ \n СУМІСНОСТІ',
  desc: [
    'Будувати стосунки, будь то любов, партнерство, сім’я, бізнес, підлеглі — завжди кропітка та витратна за часом й силами робота.',
    'А якщо ми скажемо вам, що є «інструкція» для порозуміння з будь-ким?',
    '«Матриця Сумісності» допоможе зрозуміти ваш взаємозв’язок з партнером, покаже, які задачі проявлені перед вами обома в соціальному та духовному світах. Підкаже, як саме взаємодіяти з іншою стороною, для вибудовування гармонійних, не токсичних та ефективних робочих чи особистих стосунків.',
    'У кожного тандему — є власний ресурс, важливо тільки знайти його та підсилювати — тоді успіх та взаєморозуміння вам гарантовані!',
  ],
};

function CompatibilityMatrixPage() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [usersInfo, setUsersInfo] = useState([]);

  return (
    <main>
      <Container>
        <CalculatorHero heroData={heroData} />
        <CompatibilityMatrixForm setUsersInfo={setUsersInfo} setIsShowMatrix={setIsShowMatrix} />
      </Container>
      {isShowMatrix && (
        <Container>
          <CompatibilityMatrix partners={usersInfo} />
        </Container>
      )}
    </main>
  );
}

export default CompatibilityMatrixPage;
