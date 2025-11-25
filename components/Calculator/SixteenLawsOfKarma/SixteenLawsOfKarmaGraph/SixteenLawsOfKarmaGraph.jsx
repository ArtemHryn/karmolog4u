import SixteenLawsOfKarmaSvg from './SixteenLawsOfKarmaSvg';
import CalcDateTitle from '@/components/Common/CalcDateTitle/CalcDateTitle';

import styles from './SixteenLawsOfKarmaGraph.module.scss';
import SixteenLawsTop from './Sides/SixteenLawsTop';
import SixteenLawsLeft from './Sides/SixteenLawsLeft';
import SixteenLawsRight from './Sides/SixteenLawsRight';
import SixteenLawsBottom from './Sides/SixteenLawsBottom';
import SixteenLawsCenter from './Sides/SixteenLawsCenter';
import SixteenLawsAdditionalPoints from './Sides/SixteenLawsAdditionalPoints';

const SixteenLawsOfKarmaGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  return (
    <div>
      <CalcDateTitle name={name} date={date} />
      <div className={styles.graph_wrapper}>
        <SixteenLawsOfKarmaSvg styled={styles.graph} />
        <SixteenLawsTop matrix={matrix} />
        <SixteenLawsLeft matrix={matrix} />
        <SixteenLawsRight matrix={matrix} />
        <SixteenLawsBottom matrix={matrix} />
        <SixteenLawsCenter matrix={matrix} />
        <SixteenLawsAdditionalPoints matrix={matrix.laws} />
      </div>
    </div>
  );
};

export default SixteenLawsOfKarmaGraph;
