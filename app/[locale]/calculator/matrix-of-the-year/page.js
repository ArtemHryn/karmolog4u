'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import YearMatrixHero from '@components/Calculator/YearMatrix/YearMatrixHero/YearMatrixHero';
import YearMatrix from '@components/Calculator/YearMatrix/YearMatrix';

import styles from '@components/Calculator/YearMatrix/YearMatrix.module.scss';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

const social = [
  'Досить помічати важливі дати для всіх, час виявити власні — та написати план свого успіху на цей рік.',
  '"Карта бажань" не спрацювала на всі 100 – а особиста консультація по "Матриці року" точно допоможе зробити його роком звершень й досягнень.',
  'Витратьте всього годину часу – та отримайте власну "чарівну паличку".',
];

const YearMatrixPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [period, setPeriod] = useState(null);
  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <YearMatrixHero
            setDate={setDate}
            setName={setName}
            setIsShowMatrix={setIsShowMatrix}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            setPeriod={setPeriod}
          />
        </Suspense>
      </Container>
      {isChecked && isShowMatrix && (period || period === 0) && (
        <>
          <Container styledSection={styles.matrix_wrapper}>
            <YearMatrix date={date} name={name} period={period} />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default YearMatrixPage;
