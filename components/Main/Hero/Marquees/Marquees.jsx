import Marquee from 'react-fast-marquee';
import { unbounded } from '@app/[locale]//layout';

import styled from './Marquees.module.scss';
import { useTranslations } from 'next-intl';

const Marquees = () => {
  const t = useTranslations('Main.Hero');
  return (
    <div className={styled.marqueesContainer}>
      <Marquee speed="20" className={styled.redText}>
        <p className={`${styled.text_dark} ${unbounded.className}`}>{t('marquees_line')}&nbsp;</p>
        <p className={`${styled.text_dark} ${unbounded.className}`}>{t('marquees_line')}&nbsp;</p>
      </Marquee>
      <Marquee speed="20" className={styled.darkText} direction="right">
        <p className={`${styled.text} ${unbounded.className}`}>{t('marquees_line')}&nbsp;</p>
        <p className={`${styled.text} ${unbounded.className}`}>{t('marquees_line')}&nbsp;</p>
      </Marquee>
    </div>
  );
};

export default Marquees;
