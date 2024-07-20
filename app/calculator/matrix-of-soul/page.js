'use client';

import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SoulMatrix from '@components/Calculator/SoulMatrix/SoulMatrix';
import SoulMatrixHero from '@components/Calculator/SoulMatrix/SoulMatrixHero/SoulMatrixHero';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import Container from '@components/Common/Container/Container';
import { Suspense, useState } from 'react';

import styles from '@components/Calculator/SoulMatrix/SoulMatrixHero.module.scss';

const social = [
  'Заінтриговані чи не зрозуміло? — запишіться на особисту консультацію і ви вже ніколи не захочете повертати собі свідомість попереднього себе.',
  'Час отримати трохи чуда, мудрості та знань, які приведуть до бажаного життя.',
  'Це точно ваш шанс — не нехтуйте ним!',
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
