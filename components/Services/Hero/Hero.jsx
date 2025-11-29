import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/Common/Container/Container';
import HeroNav from '@/components/Common/HeroNav/HeroNav';

import styles from './Hero.module.scss';
import { unbounded, open_Sans } from '@/app/[locale]/layout';
import ShowModalButton from '../../Common/ShowModalButton/ShowModalButton';

const Hero = ({ linkNames = [], title, img }) => {
  const locale = useLocale();
  const t = useTranslations('Services.therapy_sessions');
  return (
    <Container>
      <HeroNav linkNames={linkNames} />
      <div className={styles.box}>
        <div className={styles.text_wrapper}>
          <h1 className={`${styles.title} ${unbounded.className}`}>
            {typeof title === 'string' ? title : title[locale]}
          </h1>
          <ShowModalButton styles={`${styles.button} ${open_Sans.className}`} />
        </div>
        <picture className={styles.img}>
          {img.imgDesk && <source srcSet={img.imgDesk} media="(min-width: 1280px)" />}
          <Image src={img.img} alt={img.alt} width={1280} height={920} className={styles.img} />
        </picture>
      </div>
    </Container>
  );
};

export default Hero;
