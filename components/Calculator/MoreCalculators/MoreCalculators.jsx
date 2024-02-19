import { useState } from 'react';
import { unbounded } from '@app/layout';
import Container from '@components/Common/Container/Container';

import styles from './MoreCalculators.module.scss';
import Arrow from './Arrow';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import ArrowTab from './ArrowTab';
import ButtonsList from './ButtonsList';

const MoreCalculators = ({ date, name }) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <Container styledSection={styles.section}>
      <button
        className={`${styles.show_list_btn} ${unbounded.className} ${
          showButtons ? '' : styles.show_list_btn_opened
        }`}
        onClick={() => setShowButtons(prev => !prev)}
      >
        Більше Калькуляторів{' '}
        <span className={styles.icon_wrapper}>
          <Arrow styled={`${styles.icon} ${showButtons ? styles.icon_active : ''}`} />
          <ArrowTab styled={`${styles.icon_tab} ${showButtons ? styles.icon_tab_active : ''}`} />
        </span>
      </button>
      <div className={`${showButtons ? styles.active_part : styles.active_part_hide}`}>
        <TitleNoStyles styled={styles.title}>Яку матрицю бажаєте розрахувати?</TitleNoStyles>
        <ButtonsList date={date} name={name} />
        <h2 className={styles.notification}>
          {'❋ Калькулятор на 100% відповідає класичному обчисленню "Матриці Долі" Наталії Ладіні'}
        </h2>
      </div>
    </Container>
  );
};

export default MoreCalculators;
