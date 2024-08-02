'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import InternalKarmaHero from '@components/Calculator/InternalKarmaMatrix/InternalKarmaHero/InternalKarmaHero';

import styles from '@components/Calculator/InternalKarmaMatrix/InternalKarmaMatrix.module.scss';
import InternalKarmaMatrix from '@components/Calculator/InternalKarmaMatrix/InternalKarmaMatrix';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';

const social = {
  uk: [
    'Оновлення для вашої особистості вже готове — приходьте на персональну консультацію та отримайте  перезавантаження внутрішньої карми.',
    'Вже точно час розкривати свій внутрішній потенціал й ми допоможемо вам це зробити.',
    '1 година вашого часу — й ви виходите на якісно новий рівень. Ідеальне поєднання отриманої користі у співвідношенні до мінімально витраченого часу!',
  ],
  ru: [
    'Обновление для вашей личности уже готово — приходите на персональную консультацию и получите перезагрузку внутренней кармы.',
    'Сейчас самое время раскрывать свой внутренний потенциал - и мы поможем это сделать.',
    '1 час  - и вы выходите на качественно новый уровень. Идеальное сочетание полученной пользы в соотношении к минимально потраченному времени!',
  ],
};

const InternalKarmaPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Container>
        <Suspense fallback={<div></div>}>
          <InternalKarmaHero
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
            <InternalKarmaMatrix date={date} name={name} />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default InternalKarmaPage;
