import Container from '@components/Common/Container/Container';
import styles from './EduPricing.module.scss';
import Title from '@components/Common/Title/Title';
import Link from 'next/link';
import { open_Sans } from '@app/[locale]/layout';

function EduPricing({ card, addInfo = [], desc, link }) {
  return (
    <Container>
      <Title styled={styles.title}>Вартість навчання</Title>
      <p className={styles.desc}>
        {desc.first}
        <br />
        {desc.second}
      </p>
      <div>
        <div className={styles.card}>
          <div className={styles.wrap}>
            <Title variant="h4" styled={styles.card_title}>
              {card.title}
            </Title>
            <div className={styles.card_price_wrap}>
              <Title variant="h3" styled={styles.card_price}>
                {card.price}
              </Title>
              <Title variant="h5" styled={styles.card_info}>
                (повна вартість)
              </Title>
            </div>
          </div>
          <Link href={link} className={`${styles.button} ${open_Sans.className}`}>
            Записатися
          </Link>
        </div>
      </div>
      <section>
        <ul className={styles.info}>
          {addInfo.map((item, index) => (
            <li key={index}>
              <div className={styles.info_card}>
                <p className={styles.info_text}>{item}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default EduPricing;
