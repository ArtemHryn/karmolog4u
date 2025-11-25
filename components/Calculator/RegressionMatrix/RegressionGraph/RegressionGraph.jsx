import CalcDateTitle from '@/components/Common/CalcDateTitle/CalcDateTitle';
import RegressionSvg from './RegressionSvg';

import styles from './RegressionGraph.module.scss';
import Top from './Sides/Top';
import Left from './Sides/Left';
import Right from './Sides/Right';
import Bottom from './Sides/Bottom';
import Center from './Sides/Center';

const RegressionGraph = ({ matrix, name, date, setTitle, setCurrentKey, setShowChannels }) => {
  if (!matrix) return null;
  return (
    <div>
      <CalcDateTitle date={date} name={name} />
      <div className={styles.graph_wrapper}>
        <RegressionSvg styled={styles.graph} />
        <Top
          matrix={matrix}
          setTitle={setTitle}
          setCurrentKey={setCurrentKey}
          setShowChannels={setShowChannels}
        />
        <Left
          matrix={matrix}
          setTitle={setTitle}
          setCurrentKey={setCurrentKey}
          setShowChannels={setShowChannels}
        />
        <Right
          matrix={matrix}
          setTitle={setTitle}
          setCurrentKey={setCurrentKey}
          setShowChannels={setShowChannels}
        />
        <Bottom
          matrix={matrix}
          setTitle={setTitle}
          setCurrentKey={setCurrentKey}
          setShowChannels={setShowChannels}
        />
        <Center matrix={matrix} />
      </div>
    </div>
  );
};

export default RegressionGraph;
