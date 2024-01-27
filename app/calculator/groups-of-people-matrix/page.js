'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import Container from '@components/Common/Container/Container';
import GroupMatrixForm from '@components/Calculator/GroupMatrix/GroupMatrixForm/GroupMatrixForm';
import GroupMatrix from '@components/Calculator/GroupMatrix/GroupMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/groups-of-people-matrix',
      name: 'Розрахувати матрицю групи людей',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'ГРУПОВОЇ МАТРИЦІ',
  desc: [
    'Вам ніколи не здавалось, що ваше оточення вас не чує? ',
    'В житті кожної людини є спільноти, до яких вона входить, проте комусь це вдається, а хтось «пасе задніх» і ніби розмовляє сам з собою.',
    'Розрахунок «Групової Матриці» допоможе зрозуміти ваші взаємозв’язки в колективі, з друзями, великою кількістю людей. Ви навчитеся оцінювати загальні енергії людей, які доповнюються одна одною і поєднуються в єдине колективне поле.',
    'Ви точно знатимете: що і як необхідно робити з вашим оточенням для ефективної та приємної взаємодії, які задачі та ресурси містить ваша комунікація та на що можна чи не треба звернути увагу у ній. Саме цей варіант матриці відповідатиме розрахунку у колективному полі — тієї кількості людей, яку ви бажаєте переглянути.',
    'Лідерами думок не тільки народжуються – ними стають!',
  ],
};

const social = [
  'Вирішили — вам точно в лідери?',
  'Тоді на особистій консультації, всього за годину, ви з’ясуєте, чого вам не вистачає і які «родзинки» допоможуть саме ВАМ вести за собою та тримати натовп.',
  'Не чекайте досвіду — ставайте кращим вже сьогодні!',
];

function GroupsOfPeopleMatrix() {
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
        <GroupMatrixForm
          usersInfo={usersInfo}
          setUsersInfo={setUsersInfo}
          setIsShowMatrix={setIsShowMatrix}
        />
      </Container>
      {isShowMatrix && (
        <>
          <GroupMatrix partners={usersInfo} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
}

export default GroupsOfPeopleMatrix;
