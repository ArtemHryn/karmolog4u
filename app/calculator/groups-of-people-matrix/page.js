'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import GroupMatrix from '@components/Calculator/GroupMatrix/GroupMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import GroupHero from '@components/Calculator/GroupMatrix/GroupHero/GroupHero';

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
    'В житті кожної людини є спільноти, до яких вона входить, проте комусь це вдається, а хтось \n "пасе задніх" і ніби розмовляє сам з собою.',
    'Розрахунок "Групової Матриці" допоможе зрозуміти ваші взаємозв’язки в колективі, з друзями, великою кількістю людей. Ви навчитеся оцінювати загальні енергії людей, які доповнюються одна одною і поєднуються в єдине колективне поле.',
    'Ви точно знатимете: що і як необхідно робити з вашим оточенням для ефективної та приємної взаємодії, які задачі та ресурси містить ваша комунікація та на що можна чи не треба звернути увагу у ній. Саме цей варіант матриці відповідатиме розрахунку у колективному полі — тієї кількості людей, яку ви бажаєте переглянути.',
    'Лідерами думок не тільки народжуються – ними стають!',
  ],
};

const social = [
  'Вирішили — вам точно в лідери?',
  'Тоді на особистій консультації, всього за годину, ви з’ясуєте, чого вам не вистачає і які "родзинки" допоможуть саме ВАМ вести за собою та тримати натовп.',
  'Не чекайте досвіду — ставайте кращим вже сьогодні!',
];

function GroupsOfPeopleMatrix() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [usersInfo, setUsersInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <GroupHero
            heroData={heroData}
            usersInfo={usersInfo}
            setUsersInfo={setUsersInfo}
            setIsShowMatrix={setIsShowMatrix}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        </Suspense>
      </Container>
      {isShowMatrix && (
        <>
          <GroupMatrix partners={usersInfo} isShowMatrix={isShowMatrix} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
}

export default GroupsOfPeopleMatrix;
