'use client';

import { Suspense, useState } from 'react';
import Container from '@/components/Common/Container/Container';
import GroupMatrix from '@/components/Calculator/GroupMatrix/GroupMatrix';
import SocialInfoDesc from '@/components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import GroupHero from '@/components/Calculator/GroupMatrix/GroupHero/GroupHero';
import MoreCalculators from '@/components/Calculator/MoreCalculators/MoreCalculators';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/calculator/groups-of-people-matrix',
      name: { uk: 'Розрахувати матрицю групи людей', ru: 'Рассчитать матрицу группы людей' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлайн-расчет' },
  title: { uk: 'ГРУПОВОЇ МАТРИЦІ', ru: 'ГРУППОВОЙ МАТРИЦЫ' },
  desc: {
    uk: [
      'Вам ніколи не здавалось, що ваше оточення вас не чує? ',
      'В житті кожної людини є спільноти, до яких вона входить, проте комусь це вдається, а хтось \n "пасе задніх" і ніби розмовляє сам з собою.',
      'Розрахунок "Групової Матриці" допоможе зрозуміти ваші взаємозв’язки в колективі, з друзями, великою кількістю людей. Ви навчитеся оцінювати загальні енергії людей, які доповнюються одна одною і поєднуються в єдине колективне поле.',
      'Ви точно знатимете: що і як необхідно робити з вашим оточенням для ефективної та приємної взаємодії, які задачі та ресурси містить ваша комунікація та на що можна, чи не треба, звернути увагу в ній. Саме цей варіант матриці відповідатиме розрахунку у колективному полі — тієї кількості людей, яку ви бажаєте переглянути.',
      'Лідерами думок не тільки народжуються – ними стають!',
    ],
    ru: [
      'Вам никогда не казалось, что ваше окружение вас не слышит?',
      'В жизни каждого человека есть общество, частью которого он является, однако кому-то это дается легко, а кто-то остается "за бортом" и будто разговаривает сам с собой.',
      'Расчет "Групповой Матрицы" поможет понять вашу взаимосвязь в коллективе, с друзьями, большим количеством людей. Вы научитесь оценивать общие энергии людей, которые дополняют друг друга и объединяются в единое коллективное поле.',
      'Вы точно будете знать: что и как необходимо делать с вашим окружением для эффективного и приятного взаимодействия, какие задачи и ресурсы содержит ваша коммуникация и на что можно, или не нужно, обратить внимание в ней. Именно этот вариант матрицы будет соответствовать расчету в коллективном поле — того количества людей, которое вы хотите просмотреть.',
      'Лидерами мнений не только рождаются — ими становятся!',
    ],
  },
};

const social = {
  uk: [
    'Вирішили — вам точно в лідери?',
    'Тоді на особистій консультації, всього за годину, ви з’ясуєте, чого вам не вистачає і які "родзинки" допоможуть саме ВАМ вести за собою та тримати натовп.',
    'Не чекайте досвіду — ставайте кращим вже сьогодні!',
  ],
  ru: [
    'Решили — вы точно  лидер?',
    'Тогда на личной консультации, всего за час, вы проясните, чего вам не хватает и какие "изюминки"  помогут именно ВАМ вести за собой и "качать" толпу.',
    'Не ждите опыта — становитесь лучше уже сегодня!',
  ],
};

function GroupsOfPeopleMatrix() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [usersInfo, setUsersInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
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
          <MoreCalculators />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </>
  );
}

export default GroupsOfPeopleMatrix;
