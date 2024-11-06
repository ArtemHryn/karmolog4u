'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import CompatibilityMatrix from '@components/Calculator/CompatibilityMatrix/CompatibilityMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import CompatibilityHero from '@components/Calculator/CompatibilityMatrix/CompatibilityHero/CompatibilityHero';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';

const social = {
  uk: [
    'Ну що, цікаво дізнатися наскільки ви ідеальна пара для стосунків чи партнерства — записуйтесь на особисту консультацію — відповіді поруч!',
    '1 година – замість цілого життя, щоб дізнатися це "ваша" людина чи ні.',
  ],
  ru: [
    'Ну что, интересно узнать насколько вы идеальная пара для отношений или партнерства — записывайтесь на персональную консультацию — ответы совсем рядом!',
    '1 час — вместо целой жизни, чтобы узнать это "ваш" человек или нет.',
  ],
};

function CompatibilityMatrixPage() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [usersInfo, setUsersInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Container>
        <Suspense fallback={<div></div>}>
          <CompatibilityHero
            setUsersInfo={setUsersInfo}
            setIsShowMatrix={setIsShowMatrix}
            usersInfo={usersInfo}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        </Suspense>
      </Container>
      {isShowMatrix && (
        <>
          <CompatibilityMatrix partners={usersInfo} />
          <MoreCalculators />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </>
  );
}

export default CompatibilityMatrixPage;
