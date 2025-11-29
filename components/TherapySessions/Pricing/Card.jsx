import Link from 'next/link';
import { unbounded } from '@/app/[locale]//layout';
import styles from './Pricing.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import ShowModalButton from '../../Common/ShowModalButton/ShowModalButton';

function Card({ content: { title, addTitle, price } }) {
  const t = useTranslations('Services.therapy_sessions.pricing');
  const locale = useLocale();
  return (
    <div className={styles.card}>
      <div className={styles.card_wrap}>
        <h4 className={`${styles.card_title} ${unbounded.className}`}>
          {typeof title === 'string' ? title : title[locale]}
          <span className={styles.card_title_add}>{t('with_author')}</span>
        </h4>
        <h3 className={`${styles.card_price} ${unbounded.className}`}>{price}</h3>
      </div>
      <ShowModalButton styles={styles.button} />
    </div>
  );
}

export default Card;
