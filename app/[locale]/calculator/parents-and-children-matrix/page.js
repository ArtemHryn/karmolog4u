'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import ParentsAndChildrenHero from '@components/Calculator/ParentsAndChildren/ParentsAndChildrenHero/ParentsAndChildrenHero';
import ParentsAndChildren from '@components/Calculator/ParentsAndChildren/ParentsAndChildren';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

import styles from '@components/Calculator/ParentsAndChildren/ParentsAndChildren.module.scss';
import ChildrenCalc from '@components/Calculator/ParentsAndChildren/ChildrenCalc/ChildrenCalc';

const social = {
  uk: [
    'Готові ближче познайомитись з власними батьками чи дітьми?',
    'Так — можна все життя бути разом і не розуміти один одного, чи не розбирати у терапевта, що у всьому батьки винні, а сходити на особисту консультацію по Матриці "Батьки та діти" та перестати звинувачувати один одного.',
    'Одна година — і ви багато всього зрозумієте у своїх родинних взаєминах.',
  ],
  ru: [
    'Готовы ближе познакомиться с собственными родителями или детьми?',
    'Да — можно всю жизнь быть вместе и не понимать друг друга, или не разбирать у психотерапевта, что во всем  виноваты родители, а сходить на личную консультацию по Матрице "Родители и дети" и перестать обвинять друг друга.',
    'Один час - и вы многое поймете в своих семейных взаимоотношениях.',
  ],
};

const ParentsAndChildrenPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main>
      <Suspense>
        <Container>
          <ParentsAndChildrenHero
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
            <ParentsAndChildren date={date} name={name} />
          </Container>
          <Container styledSection={styles.children_container}>
            <ChildrenCalc />
          </Container>
          <MoreCalculators date={date} name={name} />
          <SocialInfoDesc socialList={social} />
        </>
      )}
    </main>
  );
};

export default ParentsAndChildrenPage;
