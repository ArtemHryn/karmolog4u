'use client';

import { Suspense, useState } from 'react';

import PersonalCalculator from '@/components/Calculator/PersonalMatrix/PersonalCalculator';
import Container from '@/components/Common/Container/Container';
import SocialInfo from '@/components/Calculator/SocialInfo/SocialInfo';
import Header from '@/components/Calculator/PersonalMatrix/Header/Header';

import styles from '/components/Calculator/PersonalMatrix/PersonalCalculator.module.scss';
import MoreCalculators from '@/components/Calculator/MoreCalculators/MoreCalculators';

function PersonalMatrixOfFade({}) {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Container>
        <section className={styles.hero}>
          <Suspense fallback={<div></div>}>
            <Header
              setDate={setDate}
              setName={setName}
              setIsShowMatrix={setIsShowMatrix}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
            />
          </Suspense>
        </section>
      </Container>
      {isChecked && isShowMatrix && (
        <>
          <Container styledSection={styles.matrix_wrapper}>
            <PersonalCalculator date={date} name={name} />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfo />
        </>
      )}
    </>
  );
}

export default PersonalMatrixOfFade;
