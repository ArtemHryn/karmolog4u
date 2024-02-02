'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import CompatibilityMatrix from '@components/Calculator/CompatibilityMatrix/CompatibilityMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import CompatibilityHero from '@components/Calculator/CompatibilityMatrix/CompatibilityHero/CompatibilityHero';

const social = [
  'Ну що, цікаво дізнатися наскільки ви ідеальна пара для стосунків чи партнерства — записуйтесь на особисту консультацію — відповіді поруч!',
  '1 година – замість цілого життя, щоб дізнатися це "ваша" людина чи ні.',
];

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
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </>
  );
}

export default CompatibilityMatrixPage;
