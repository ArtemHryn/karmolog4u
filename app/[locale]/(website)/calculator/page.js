import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Container from '@/components/Common/Container/Container';
import HeroNav from '@/components/Common/HeroNav/HeroNav';
import CalculatorLogo from '@/components/Calculator/CalculatorLogo/CalculatorLogo';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import { matrixLinks } from '@/helper/calculator/buttonsList';
import styles from '/components/Calculator/MainPage.module.scss';

const links = [
  {
    href: '/calculator',
    name: 'Калькулятор',
  },
];

function Calculator({ params: { locale } }) {
  const t = useTranslations('Calculator.More');

  return (
    <main>
      <Container styledSection={styles.container}>
        <HeroNav linkNames={links} />
        <section className={styles.section}>
          <article>
            <TitleNoStyles variant="h5" styled={styles.about}>
              {t('free_calculator')}
            </TitleNoStyles>
            <TitleNoStyles variant="h1" styled={styles.title}>
              {t('matrix')}
            </TitleNoStyles>
          </article>
          <article>
            <TitleNoStyles variant="h3" styled={styles.links_title}>
              {t('what_matrix')}
            </TitleNoStyles>
            <ul className={styles.links_list}>
              {matrixLinks.map((links, index) => (
                <li key={index}>
                  <Link href={`/${locale}${links.href}`} className={styles.links}>
                    {links.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
            <p className={styles.description}>{t('about_calc')}</p>
          </article>
          <CalculatorLogo styled={styles.logo_r} />
          <CalculatorLogo styled={styles.logo_l} />
        </section>
      </Container>
    </main>
  );
}

export default Calculator;
