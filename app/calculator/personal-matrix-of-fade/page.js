'use client';

import { useSearchParams } from 'next/navigation';

import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import PersonalCalculator from '@components/Calculator/PersonalMatrix/PersonalCalculator';
import Container from '@components/Common/Container/Container';
import { useEffect, useState } from 'react';
import SingleDateForm from '@components/Calculator/PersonalMatrix/SingleDateForm/SingleDateForm';

import styles from './page.module.scss';
import SocialInfo from '@components/Calculator/SocialInfo/SocialInfo';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/personal-matrix-of-fade',
      name: 'Розрахувати особисту матрицю',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'ОСОБИСТОЇ \n МАТРИЦІ ДОЛІ',
  desc: [
    '«Така твоя доля» — хоч раз в житті кожен стикався з таким формулюванням щодо невдач у житті. Хочете змін, але не знаєте в якому напрямку рухатись? — ми допоможемо!',
    'Цей розрахунок познайомить вас з власною «Матрицею долі», підкаже ваші призначення та задачі на це втілення, висвітлить таланти й особисті проявлення в соціумі. А ще — він стане вашим путівником у світ здоров’я, гармонійних стосунків та матеріальних благ й підкаже, як найкраще ви можете себе реалізувати у всіх напрямках власного омріяного життя. \n Ваша доля — у ваших руках!',
  ],
};
function PersonalMatrixOfFade() {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const linkName = searchParams.get('name');
    const linkDate = searchParams.get('date');
    if (linkName) {
      setName(linkName);
    }
    if (linkDate) {
      setDate(linkDate);
      setIsShowMatrix(true);
    }
    setIsChecked(true);
  }, [isChecked, searchParams]);

  if (!isChecked) return null;
  return (
    <>
      <Container>
        <section className={styles.hero}>
          <article className="">
            <CalculatorHero heroData={heroData} />
          </article>
          <SingleDateForm
            setDate={setDate}
            setName={setName}
            setIsShowMatrix={setIsShowMatrix}
            name={name}
            date={date}
          />
        </section>
      </Container>
      {isShowMatrix && (
        <>
          <Container styledSection={styles.matrix_wrapper}>
            <PersonalCalculator date={date} name={name} />
          </Container>
          <SocialInfo />
        </>
      )}
    </>
  );
}

export default PersonalMatrixOfFade;
