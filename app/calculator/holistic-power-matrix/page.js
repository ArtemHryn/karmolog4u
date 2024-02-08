'use client';

import { Suspense, useState } from 'react';
import HolisticPowerHero from '@components/Calculator/HolisticPowerMatrix/HolisticPowerHero/HolisticPowerHero';
import Container from '@components/Common/Container/Container';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import HolisticPowerMatrix from '@components/Calculator/HolisticPowerMatrix/HolisticPowerMatrix';

import styles from '@components/Calculator/HolisticPowerMatrix/HolisticPowerMatrix.module.scss';

const social = [
  'Ви маєте внутрішній баланс? <br/>Якщо ні, то це якраз ваша можливість його знайти.',
  'Забронюйте місце на особисту консультацію, де ми разом точно збалансуємо ваші зовнішню та внутрішню карми.',
  'Цілісність — то завжди сила й перемога. <br/>Ви готові! — чекаємо на вас.',
];

const HolisticPowerPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <HolisticPowerHero
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
            <HolisticPowerMatrix date={date} name={name} />
          </Container>
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default HolisticPowerPage;
