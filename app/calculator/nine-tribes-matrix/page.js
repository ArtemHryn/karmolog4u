'use client';
import { Suspense, useState } from 'react';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import NineTribesHero from '@components/Calculator/NineTribesMatrix/NineTribesHero/NineTribesHero';
import NineTribesMatrix from '@components/Calculator/NineTribesMatrix/NineTribesMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import Container from '@components/Common/Container/Container';

import styles from '@components/Calculator/NineTribesMatrix/NineTribesMatrix.module.scss';

const social = [
  'Готові зламати код Роду, та написати власний? ',
  'Тоді чекаємо вас на особистій консультації, щоб підібрати «пароль» для розкриття власного потенціалу. ',
  '1 година часу — і ви перепрограмовані. <br/> Спробуйте — воно того варте!',
];

function NineTribesOfTheFadeFamilyMatrix() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <Container>
          <NineTribesHero
            setDate={setDate}
            setName={setName}
            setIsShowMatrix={setIsShowMatrix}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        </Container>
      </Suspense>
      {isChecked && isShowMatrix && (
        <>
          <Container styledSection={styles.matrix_wrapper}>
            <NineTribesMatrix date={date} name={name} />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
}

export default NineTribesOfTheFadeFamilyMatrix;
