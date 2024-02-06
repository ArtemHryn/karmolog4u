'use client';

import { Suspense, useState } from 'react';
import ConsciousnessHero from '@components/Calculator/Consciousness/ConsciousnessHero/ConsciousnessHero';
import Container from '@components/Common/Container/Container';
import Consciousness from '@components/Calculator/Consciousness/Consciousness';

import styles from '@components/Calculator/Consciousness/Consciousness.module.scss';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

const social = [
  'Заінтриговані чи не зрозуміло? — запишіться на особисту консультацію і ви вже ніколи не захочете повертати собі свідомість попереднього себе',
  'Час отримати трохи чуда, мудрості та знань, які приведуть до бажаного життя.',
  'Це точно ваш шанс — не нехтуйте ним!',
];

const MatrixOfConsciousness = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <ConsciousnessHero
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
            <Consciousness date={date} name={name} />
          </Container>
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default MatrixOfConsciousness;
