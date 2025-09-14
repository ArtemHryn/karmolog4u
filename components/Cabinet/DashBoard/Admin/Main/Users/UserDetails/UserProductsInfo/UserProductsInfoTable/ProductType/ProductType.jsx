import styles from './ProductType.module.scss';

const ProductType = ({ rowData }) => {
  const { targetModule } = rowData;
  const map = {
    Meditation: { text: 'Медитація', style: styles.meditation },
    Webinar: { text: 'Вебінар', style: styles.webinar },
  };

  const { text, style } = map[targetModule] || { text: 'Гайд або книга', style: '' };

  return <p className={`${styles.type} ${style}`}>{text}</p>;
};

export default ProductType;
