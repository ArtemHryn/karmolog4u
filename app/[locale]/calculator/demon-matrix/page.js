'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import DemonMatrixHero from '@components/Calculator/DemonMatrix/DemonMatrixHero/DemonMatrixHero';
import DemonMatrix from '@components/Calculator/DemonMatrix/DemonMatrix';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

import styles from '/components/Calculator/DemonMatrix/DemonMatrix.module.scss';

const social = [
  'Яка роль вам ближча? <br/>Давайте спробуємо час визначатись?',
  'Лишатися жертвою, або змінювати свій статус та ставати власником свого життя.',
  'Якщо ви хочете змін — чекаємо вас на персональну годинну консультацію, після неї — тільки ви будете режисером своєї долі.',
];

const DemonMatrixPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <Container>
          <DemonMatrixHero
            setDate={setDate}
            setName={setName}
            setIsShowMatrix={setIsShowMatrix}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            setCode={setCode}
          />
        </Container>
        {isChecked && isShowMatrix && (
          <>
            <Container styledSection={styles.matrix_wrapper}>
              <DemonMatrix date={date} name={name} code={code} />
            </Container>
            <MoreCalculators date={date} name={name} />
            <SocialInfoDesc socialList={social} />
          </>
        )}
      </Suspense>
    </main>
  );
};

export default DemonMatrixPage;
