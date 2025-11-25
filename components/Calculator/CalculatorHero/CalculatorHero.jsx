import HeroNav from '@/components/Common/HeroNav/HeroNav';
import { useLocale } from 'next-intl';
import React from 'react';
import CalculatorLogo from '../CalculatorLogo/CalculatorLogo';
import style from './CalculatorHero.module.scss';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

function CalculatorHero({ heroData }) {
  const locale = useLocale();
  const heroDesk = Array.isArray(heroData.desc) ? heroData.desc : heroData.desc[locale];
  if (!heroDesk) return null;
  return (
    <>
      <HeroNav linkNames={heroData.links} />
      <section className={style.section}>
        <article className={style.article}>
          <TitleNoStyles variant="h5" styled={style.about}>
            {heroData.about[locale]}
          </TitleNoStyles>
          <TitleNoStyles variant="h1" styled={style.title}>
            {typeof heroData.title === 'object' ? heroData.title[locale] : heroData.title}
          </TitleNoStyles>
          {heroDesk.map((desc, index) => (
            <p key={index} className={style.desc}>
              {desc}
            </p>
          ))}
        </article>
        <CalculatorLogo styled={style.logo_r} />
        <CalculatorLogo styled={style.logo_l} />
      </section>
    </>
  );
}

export default CalculatorHero;
