import Link from 'next/link';
import Logo from '@/components/Common/Icons/Logo';
import { open_Sans } from '@/app/[locale]//layout';

import styles from './ResearchSlider.module.scss';
import Button from './Button';

import 'swiper/css';
import { useLocale, useTranslations } from 'next-intl';

const ResearchSlideElement = ({ card, index }) => {
  const locale = useLocale();
  const t = useTranslations('Main.Research');
  return (
    <div className={styles.slider_element_container}>
      <Logo styled={styles.logo} />
      <p className={styles.text}>{card.text[locale]}</p>
      <Link
        href={card.file}
        target="_blank"
        rel="noreferrer noopener"
        className={`${styles.link} ${open_Sans.className}`}
      >
        {t('view')}
      </Link>
      <Button index={index} />
    </div>
  );
};

export default ResearchSlideElement;
