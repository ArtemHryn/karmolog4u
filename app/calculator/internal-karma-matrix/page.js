'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import InternalKarmaHero from '@components/Calculator/InternalKarmaMatrix/InternalKarmaHero/InternalKarmaHero';

import styles from '@components/Calculator/InternalKarmaMatrix/InternalKarmaMatrix.module.scss';
import InternalKarmaMatrix from '@components/Calculator/InternalKarmaMatrix/InternalKarmaMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

const social = [
  'Оновлення для вашої особистості вже готове — приходьте на персональну консультацію та отримайте  перезавантаження внутрішньої карми.',
  'Вже точно час розкривати свій внутрішній потенціал й ми допоможемо вам це зробити.',
  '1 година вашого часу — й ви виходите на якісно новий рівень. Ідеальне поєднання отриманої користі у співвідношенні до мінімально витраченого часу!',
];

const InternalKarmaPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <InternalKarmaHero
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
            <InternalKarmaMatrix date={date} name={name} />
          </Container>
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default InternalKarmaPage;
