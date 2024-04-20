'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import SixteenLawsOfKarmaHero from '@components/Calculator/SixteenLawsOfKarma/SixteenLawsOfKarmaHero/SixteenLawsOfKarmaHero';
import SixteenLawsOfKarmaMatrix from '@components/Calculator/SixteenLawsOfKarma/SixteenLawsOfKarmaMatrix';

import styles from '@components/Calculator/SixteenLawsOfKarma/SixteenLawsOfKarmaMatrix.module.scss';

const social = [
  'Стукаєтесь у всі двері, а результату нуль – можливо не там шукаєте причину.',
  'Все, що відбувається в вашому житті не є випадковим, а лише результат причино-наслідкових історій минулого і сьогодення.',
  'З розрахунком та пропрацюванням Матриці ”16 законів карми”, ви дізнаєтесь повний сценарій власного життя та свою кармічну історію, і як результат, отримаєте можливість перейти в ”нові вібрації Всесвіту”. Позбавитеся негативного впливу й крокуватимете по життю в нових енергіях — без ”кармічних боргів”.',
];

const SixteenLawsOfKarmaPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <SixteenLawsOfKarmaHero
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
            <SixteenLawsOfKarmaMatrix />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default SixteenLawsOfKarmaPage;
