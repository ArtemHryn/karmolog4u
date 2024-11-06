'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import SixteenLawsOfKarmaHero from '@components/Calculator/SixteenLawsOfKarma/SixteenLawsOfKarmaHero/SixteenLawsOfKarmaHero';
import SixteenLawsOfKarmaMatrix from '@components/Calculator/SixteenLawsOfKarma/SixteenLawsOfKarmaMatrix';

import styles from '@components/Calculator/SixteenLawsOfKarma/SixteenLawsOfKarmaMatrix.module.scss';

const social = {
  uk: [
    'Хочете розібратися з особистими "кармінними боргами" і не відпрацьовувати карму пращурів — тоді чекаємо на особистій консультації, де ви отримаєте:',
    '- розуміння чому і звідки події, які відбуваються з вами; <br/> - підказки "хто винен" і "що з цим робити"; <br/>- навички, щоб переписувати кармічну історію та <br/>- "пароль" до власного життя.',
    'Ви ще так багато про себе не знаєте – нумо знайомитись!',
  ],
  ru: [
    'Хотите разобраться с личными "кармическими долгами" и не отрабатывать карму предков — тогда ждем на личной консультации, где вы получите:',
    '- понимание почему и откуда берутся события, которые происходят с вами; <br/>- подсказки "кто виноват" и "что с этим делать"; <br/>- навыки, для переписывания кармической истории и <br/>- "пароль" к собственной жизни.',
    'Вы еще так много о себе не знаете — давайте знакомиться!',
  ],
};

const SixteenLawsOfKarmaPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
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
            <SixteenLawsOfKarmaMatrix date={date} name={name} />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </>
  );
};

export default SixteenLawsOfKarmaPage;
