import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/Common/Container/Container';
import Card from './Card';
import Title from '@/components/Common/Title/Title';

import styles from './Pricing.module.scss';

function Pricing({ content, accTitle }) {
  const locale = useLocale();
  const t = useTranslations('Services.therapy_sessions.pricing');
  return (
    <Container>
      <section className={styles.section}>
        <Title variant="h2" styled={`${styles.title}`}>
          {t('title')}
          <span className={styles.title_accent}>{accTitle[locale]}</span>
        </Title>
        <p className={styles.desc}>
          {t('warning')} <Link href={'#'}>{t('link')}</Link>.
        </p>
      </section>
      <div>
        <ul className={styles.list}>
          {content.map((item, index) => (
            <li key={index}>
              <Card content={item} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Pricing;
