import { useEffect, useState } from 'react';
import SixteenLawsOfKarmaGraph from './SixteenLawsOfKarmaGraph/SixteenLawsOfKarmaGraph';
import { getPersonalGraph } from '@helper/calculator/personal';
import SixteenLawsPeriods from './SixteenLawsPeriods/SixteenLawsPeriods';
import { getSixteenLawsPeriods } from '@helper/calculator/sixteenLaws';
import { ageCalculator } from '@helper/calculator/ageCalc';

import styles from './SixteenLawsOfKarmaMatrix.module.scss';
import SixteenWorkingCornersGraph from './SixteenWorkingCorners/SixteenWorkingCornersGraph/SixteenWorkingCornersGraph';
import SixteenWorkingCornerResult from './SixteenWorkingCorners/SixteenWorkingCornerResult/SixteenWorkingCornerResult';

const SixteenLawsOfKarmaMatrix = ({ date, name }) => {
  const [matrix, setMatrix] = useState({});
  const [periods, setPeriods] = useState([]);
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      lifeMap: true,
      sixteenLaws: true,
    });
    const periodList = getSixteenLawsPeriods({ info: result });
    setMatrix(result);
    setPeriods(periodList);
    const ageObj = ageCalculator(day, month, year);
    const currentAge =
      (ageObj.years ? ageObj.years : 0) +
      parseFloat(((ageObj.months ? ageObj.months : 0) / 12).toFixed(2));
    setAge(currentAge > 0 ? currentAge : 0);
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('sixteen-laws');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;

  return (
    <div id="sixteen-laws">
      <div className={styles.sixteen_laws_of_matrix_matrix_wrapper}>
        <SixteenLawsOfKarmaGraph matrix={matrix} name={name} date={date} />
        <SixteenLawsPeriods periods={periods} age={age} />
      </div>
      <div className={styles.sixteen_laws_of_matrix_matrix_wrapper}>
        <SixteenWorkingCornersGraph matrix={matrix} />
        <SixteenWorkingCornerResult matrix={matrix} />
      </div>
    </div>
  );
};

export default SixteenLawsOfKarmaMatrix;
