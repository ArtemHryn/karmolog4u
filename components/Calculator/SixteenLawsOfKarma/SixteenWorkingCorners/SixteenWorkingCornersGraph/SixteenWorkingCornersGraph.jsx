import SixteenWorkingCornersSvg from './SixteenWorkingCornersSvg';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Center from '@components/Calculator/PersonalMatrix/MatrixGraph/Center';
import Outer from './Circles/Outer';
import Inner from './Circles/Inner';
import styles from './SixteenWorkingCornersGraph.module.scss';
import SixteenLawsCenter2 from './Circles/Center';

const SixteenWorkingCornersGraph = ({ matrix }) => {
  if (!matrix) return null;
  return (
    <div>
      <TitleNoStyles styled={styles.title}>
        Після відпрацювання кармічних кутів, матриця стає огранена немов діамант
      </TitleNoStyles>
      <div className={styles.graph_wrapper}>
        <SixteenWorkingCornersSvg styled={styles.graph} />
        <Top matrix={matrix} hideInnerAdditionalKeys hideAdditionalKeys showThirdKey />
        <Left matrix={matrix} hideAdditionalKeys showThirdKey />
        <Bottom matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys showThirdKey />
        <Right matrix={matrix} hideAdditionalKeys showThirdKey />
        <Center matrix={matrix} hideCenter2 sixteenCenter2 />
        <Outer matrix={matrix} />
        <Inner matrix={matrix} />
        <SixteenLawsCenter2 matrix={matrix} />
      </div>
    </div>
  );
};

export default SixteenWorkingCornersGraph;
