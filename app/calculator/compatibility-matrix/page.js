'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import CompatibilityMatrixForm from '@components/Calculator/CompatibilityMatrix/CompatibilityMatrixForm/CompatibilityMatrixForm';
import Container from '@components/Common/Container/Container';
import CompatibilityMatrix from '@components/Calculator/CompatibilityMatrix/CompatibilityMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

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

const social = [
  'Ну що, цікаво дізнатися наскільки ви ідеальна пара для стосунків чи партнерства — записуйтесь на особисту консультацію — відповіді поруч!',
  '1 година – замість цілого життя, щоб дізнатися це «ваша» людина чи ні.',
];

function CompatibilityMatrixPage() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [usersInfo, setUsersInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('date1')) {
      setIsChecked(true);
      return;
    }
    const users = [];
    searchParams.forEach((value, key) => {
      const index = key[key.length - 1];
      if (key.includes('date')) {
        users[index - 1] = { date: value };
      }
      if (key.includes('name')) {
        const info = users[index - 1];
        info.name = value;
        users.splice(index - 1, 1, info);
      }
    });
    setUsersInfo(users);
    setIsShowMatrix(true);
    setIsChecked(true);
  }, [searchParams]);

  if (!isChecked) return null;

  return (
    <main>
      <Container>
        <CalculatorHero heroData={heroData} />
        <CompatibilityMatrixForm
          setUsersInfo={setUsersInfo}
          setIsShowMatrix={setIsShowMatrix}
          usersInfo={usersInfo}
        />
      </Container>
      {isShowMatrix && (
        <>
          <CompatibilityMatrix partners={usersInfo} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
}

export default CompatibilityMatrixPage;
