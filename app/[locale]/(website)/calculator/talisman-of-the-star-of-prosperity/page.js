'use client';
import { Suspense, useState } from 'react';
import Container from '@/components/Common/Container/Container';
import MoreCalculators from '@/components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@/components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import TalismanMatrix from '@/components/Calculator/TalismanMatrix/TalismanMatrix';
import TalismanMatrixHero from '@/components/Calculator/TalismanMatrix/TalismanMatrixHero/TalismanMatrixHero';

import styles from '@/components/Calculator/TalismanMatrix/TalismanMatrix.module.scss';
import TrianglesMatrix from '@/components/Calculator/TalismanMatrix/TrianglesMatrix/TrianglesMatrix';

const social = {
  uk: [
    'Звучить якось казково, але все одно дуже хочеться спробувати? - не відмовляйте собі, адже воно того точно варте!',
    'Іноді, щоб щось отримати від Всесвіту нам не вистачає лише віри, в те, що ТАК дійсно можливо і дива існують, та впевненості, що саме Ви — того варті.',
    'Одна консультація — й ваші бажання, потенціал та можливості помножуються в декілька разів, ви навіть не схочете згадувати свідомість попереднього себе — тепер у вас інше життя та новий Ви!',
  ],
  ru: [
    'Звучит как-то сказочно, но все равно очень хочется попробовать — не отказывайте себе, ведь оно того точно стоит!',
    'Иногда, чтобы что-то получить от Вселенной нам не хватает только веры в то, что ТАК действительно возможно — чудеса существуют. И уверенности, что именно Вы достойны этого.',
    'Одна консультация - и ваши желания, потенциал и возможности умножаются в несколько раз, вы даже не захотите вспоминать сознание предыдущего себя — теперь у вас другая жизнь и новый Вы!',
  ],
};

const TalismanPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Container>
        <Suspense fallback={<div></div>}>
          <TalismanMatrixHero
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
            <TalismanMatrix date={date} name={name} />
          </Container>
          <Container styledSection={styles.matrix_wrapper}>
            <TrianglesMatrix date={date} />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </>
  );
};

export default TalismanPage;
