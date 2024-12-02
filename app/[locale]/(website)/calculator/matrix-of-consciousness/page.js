'use client';

import { Suspense, useState } from 'react';
import ConsciousnessHero from '@components/Calculator/Consciousness/ConsciousnessHero/ConsciousnessHero';
import Container from '@components/Common/Container/Container';
import Consciousness from '@components/Calculator/Consciousness/Consciousness';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

import styles from '@components/Calculator/Consciousness/Consciousness.module.scss';

const social = {
  uk: [
    'Заінтриговані чи не зрозуміло? — запишіться на особисту консультацію і ви вже ніколи не захочете повертати собі свідомість попереднього себе.',
    'Час отримати трохи чуда, мудрості та знань, які приведуть до бажаного життя.',
    'Це точно ваш шанс — не нехтуйте ним!',
  ],
  ru: [
    'Заинтригованы или совсем ничего не понятно — запишитесь на личную консультацию и вы уже никогда не захотите возвращать себе сознание предыдущего себя.',
    'Время получить немного чуда, мудрости и знаний, которые приведут к желаемой жизни.',
    'Это точно ваш шанс — не пренебрегайте им!',
  ],
};

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
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default MatrixOfConsciousness;
