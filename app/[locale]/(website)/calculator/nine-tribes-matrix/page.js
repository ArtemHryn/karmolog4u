'use client';
import { Suspense, useState } from 'react';
import MoreCalculators from '@/components/Calculator/MoreCalculators/MoreCalculators';
import NineTribesHero from '@/components/Calculator/NineTribesMatrix/NineTribesHero/NineTribesHero';
import NineTribesMatrix from '@/components/Calculator/NineTribesMatrix/NineTribesMatrix';
import SocialInfoDesc from '@/components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import Container from '@/components/Common/Container/Container';
import Kneeling from '@/components/Calculator/NineTribesMatrix/Kneeling/Kneeling';
import KneelingCalc from '@/components/Calculator/NineTribesMatrix/KneelingCalc/KneelingCalc';

import styles from '@/components/Calculator/NineTribesMatrix/NineTribesMatrix.module.scss';

const social = {
  uk: [
    'Готові зламати код Роду, та написати власний? ',
    'Тоді чекаємо вас на особистій консультації, щоб підібрати "пароль" для розкриття власного потенціалу.',
    '1 година часу — і ви перепрограмовані. <br/> Спробуйте — воно того варте!',
  ],
  ru: [
    'Готовы взломать код Рода и написать собственный?',
    'Тогда ждем вас на персональной консультации, чтобы подобрать "пароль" для раскрытия вашего личного потенциала.',
    '1 час времени - и вы перепрограммированы. <br/>Попробуйте — оно того стоит!',
  ],
};

function NineTribesOfTheFadeFamilyMatrix() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [kneeling, setKneeling] = useState(null);

  return (
    <>
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
            <NineTribesMatrix date={date} name={name} setKneeling={setKneeling} />
          </Container>
          <div>
            <Kneeling table={kneeling} />
          </div>
          <Container styledSection={styles.matrix_wrapper}>
            {kneeling && <KneelingCalc kneeling={kneeling.arcanes} />}
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </>
  );
}

export default NineTribesOfTheFadeFamilyMatrix;
