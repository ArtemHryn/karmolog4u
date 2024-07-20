'use client';

import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SoulMatrix from '@components/Calculator/SoulMatrix/SoulMatrix';
import SoulMatrixHero from '@components/Calculator/SoulMatrix/SoulMatrixHero/SoulMatrixHero';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import Container from '@components/Common/Container/Container';
import { Suspense, useState } from 'react';

import styles from '@components/Calculator/SoulMatrix/SoulMatrixHero.module.scss';

const social = [
  'Оновлення для вашої особистості вже готове — приходьте на персональну консультацію та отримайте  перезавантаження внутрішньої карми.',
  'Вже точно час розкривати свій внутрішній потенціал й ми допоможемо вам це зробити.',
  '1 година вашого часу — й ви виходите на якісно новий рівень. Ідеальне поєднання отриманої користі у співвідношенні до мінімально витраченого часу!',
];

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
