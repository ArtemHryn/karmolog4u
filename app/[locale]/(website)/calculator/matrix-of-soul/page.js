'use client';

import MoreCalculators from '@/components/Calculator/MoreCalculators/MoreCalculators';
import SoulMatrix from '@/components/Calculator/SoulMatrix/SoulMatrix';
import SoulMatrixHero from '@/components/Calculator/SoulMatrix/SoulMatrixHero/SoulMatrixHero';
import SocialInfoDesc from '@/components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import Container from '@/components/Common/Container/Container';
import { Suspense, useState } from 'react';

import styles from '@/components/Calculator/SoulMatrix/SoulMatrixHero.module.scss';

const social = {
  uk: [
    'Ну що — як на рахунок діалогу з власною душею? \nІнвестуйте лише годину вашого часу на персональній консультації й ви забезпечите собі життя нового рівня, в якому все омріяне — стає можливим, а все минуле — зрозумілим.',
    'Спробуйте — наступної можливості може не бути.',
  ],
  ru: [
    'Ну что — как насчет диалога с собственной душой? \nИнвестируйте всего час вашего времени на персональной консультации и вы обеспечите себе жизнь нового уровня, в котором все желаемое — становится возможным, а все прошлое — понятным.',
    'Попробуйте — следующей возможности может не быть.',
  ],
};

const SoulMatrixPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <SoulMatrixHero
            setDate={setDate}
            setName={setName}
            setIsShowMatrix={setIsShowMatrix}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        </Suspense>
      </Container>
      {isChecked && isShowMatrix && (
        <>
          <Container styledSection={styles.matrix_wrapper}>
            <SoulMatrix date={date} name={name} />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default SoulMatrixPage;
