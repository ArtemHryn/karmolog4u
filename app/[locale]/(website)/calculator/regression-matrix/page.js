'use client';

import { Suspense, useState } from 'react';
import Container from '@components/Common/Container/Container';
import RegressionHero from '@components/Calculator/RegressionMatrix/Hero/Hero';
import MoreCalculators from '@components/Calculator/MoreCalculators/MoreCalculators';
import SocialInfoDesc from '@components/Common/Calculator/SocialInfoDesc/SocialInfoDesc';

import styles from '@components/Calculator/RegressionMatrix/RegressionMatrix.module.scss';
import RegressionMatrix from '@components/Calculator/RegressionMatrix/RegressionMatrix';
import RegressionChannels from '@components/Calculator/RegressionMatrix/RegressionChannels/RegressionChannels';

const social = {
  uk: [
    'Відчуваєте, що настав час розкрити таємниці минулого, щоб покращити своє сьогодення? <br/>Запишіться на персональну консультацію - ваша подорож до нового розуміння себе може початися просто зараз!',
    'Це можливість не лише дізнатися більше про себе, а й використовувати знання для позитивних змін у житті.',
  ],
  ru: [
    'Чувствуете, что пришло время раскрыть тайны прошлого, чтобы улучшить свое настоящее? <br/>Запишитесь на персональную консультацию — ваше путешествие к новому пониманию себя может начаться прямо сейчас! ',
    'Это возможность не только узнать больше о себе, но и использовать знания для позитивных изменений в жизни.',
  ],
};

const RegressionMatrixPage = () => {
  const [isShowMatrix, setIsShowMatrix] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState(null);
  const [currentKey, setCurrentKey] = useState(null);
  const [showChannels, setShowChannels] = useState(false);

  return (
    <main>
      <Suspense fallback={<div></div>}>
        <Container>
          <RegressionHero
            setDate={setDate}
            setName={setName}
            setIsShowMatrix={setIsShowMatrix}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        </Container>
        {isChecked && isShowMatrix && (
          <>
            <Container styledSection={styles.matrix_wrapper}>
              <RegressionMatrix
                date={date}
                name={name}
                setTitle={setTitle}
                setCurrentKey={setCurrentKey}
                setShowChannels={setShowChannels}
              />
            </Container>
            {showChannels && (
              <Container styledSection={styles.matrix_wrapper}>
                <RegressionChannels date={date} title={title} currentKey={currentKey} />
              </Container>
            )}
            <MoreCalculators date={date} name={name} />
            <SocialInfoDesc socialList={social} />
          </>
        )}
      </Suspense>
    </main>
  );
};

export default RegressionMatrixPage;
