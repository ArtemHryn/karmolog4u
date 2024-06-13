import Link from 'next/link';
import Container from '@components/Common/Container/Container';
import Card from './Card';
import Title from '@components/Common/Title/Title';

import styles from './Pricing.module.scss';

function Pricing({ content, accTitle }) {
  return (
    <Container>
      <section className={styles.section}>
        <Title styled={`${styles.title}`}>
          Прайс та оплата
          <span className={styles.title_accent}>{accTitle}</span>
        </Title>
        <p className={styles.desc}>
          *Можлива оплата частинами. Послуги надаються за <Link href={'#'}>договором оферти</Link>.
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
