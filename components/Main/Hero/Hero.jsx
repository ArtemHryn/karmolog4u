import Image from 'next/image';
import Marquees from './Marquees/Marquees';
import Container from '@/components/Common/Container/Container';
import { unbounded } from '@/app/[locale]//layout';
import BackgroundLogo from './BackgroundLogo/BackgroundLogo';

import styled from './Hero.module.scss';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Main.Hero');
  return (
    <Container styledSection={styled.styled_section}>
      <p className={styled.text}>{t('announcement')}</p>
      <h1 className={`${styled.author} ${unbounded.className}`}>{t('author')}</h1>
      <div className={styled.description_container}>
        <div>
          <h1 className={`${styled.author2} ${unbounded.className}`}>{t('author')}</h1>
          <div className={styled.text_wrapper}>
            <p className={`${styled.text_description} ${styled.additional_text_description}`}>
              {t('description1')}
            </p>
            <p className={`${styled.text_description} ${styled.additional_text_description}`}>
              {t('description2')}
            </p>
            <p className={`${styled.text_description}`}> {t('description3')}</p>
          </div>
        </div>
        <div className={styled.wrapper}>
          <BackgroundLogo />
          <picture className={styled.hero_img}>
            <source srcSet={'/assets/images/SergiyHeroDesk.webp'} media="(min-width: 1280px)" />
            <Image
              src="/assets/images/SergiyHero.webp"
              width={360}
              height={680}
              alt="Сергій Скляренко"
              className={styled.hero_img}
              priority={true}
            />
          </picture>
        </div>
      </div>
      <Marquees />
    </Container>
  );
};

export default Hero;
