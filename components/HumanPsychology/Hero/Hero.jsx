import React from 'react';
import Container from '@components/Common/Container/Container';
import HeroNav from '@components/Common/HeroNav/HeroNav';

import styles from './Hero.module.scss';
import { useLocale } from 'next-intl';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

const Hero = ({ links, title }) => {
  const locale = useLocale();
  const localizedTitle = typeof title === 'string' ? title : title[locale];
  return (
    <Container styledSection={styles.section}>
      <HeroNav linkNames={links} />
      <TitleNoStyles styled={`${styles.title} ${locale === 'ru' ? styles.title_ru : ''}`}>
        {localizedTitle.split('<br />').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </TitleNoStyles>
    </Container>
  );
};

export default Hero;
