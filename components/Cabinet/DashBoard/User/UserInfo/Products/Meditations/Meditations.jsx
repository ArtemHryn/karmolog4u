import ProductItem from '../ProductItem/ProductItem';
import styles from './Meditations.module.scss';

const list = [
  {
    name: 'Meditation 1 Meditation 1 Meditation 1 Meditation 1 Meditation 1',
    cover: '/assets/images/therapySessions/session-insight-desk.webp',
    id: 1,
  },
  {
    name: 'Meditation 2',
    cover: '/assets/images/therapySessions/session-insight-desk.webp',
    id: 2,
  },
  {
    name: 'Meditation 3',
    cover: '/assets/images/therapySessions/session-insight-desk.webp',
    id: 3,
  },
];

const Meditations = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {list.map(item => (
          <ProductItem key={item.id} item={item} type={'Медитація'} link={'meditations'} />
        ))}
      </ul>
    </div>
  );
};

export default Meditations;
