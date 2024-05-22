import Image from 'next/image';
import Container from '@components/Common/Container/Container';

import Title from '@components/Common/Title/Title';
import styles from './Hero.module.scss';

const OfflineMeetingsHero = ({ title, text, img, imgDesk }) => {
  return (
    <Container>
      <Title styled={`${styles.title}`}>{title}</Title>
      <div className={styles.wrapper}>
        <ul className={styles.text_list}>
          {text.map(el => (
            <li key={el}>
              <p className={styles.text} dangerouslySetInnerHTML={{ __html: el }} />
            </li>
          ))}
        </ul>
        <picture className={styles.img}>
          {imgDesk && <source srcSet={imgDesk} media="(min-width: 1280px)" />}
          <Image src={img} alt="Сергій Скляренко" width={736} height={440} className={styles.img} />
        </picture>
      </div>
    </Container>
  );
};

export default OfflineMeetingsHero;
