import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { unbounded } from '@app/[locale]/layout';

import styles from './FeedbacksSlider.module.scss';

const Card = ({ card, index }) => {
  const [showMore, setShowMore] = useState(false);
  const t = useTranslations('Services.feedbacks');
  const locale = useLocale();
  return (
    <article className={`${styles.card}`}>
      <div className={styles.card_text_container}>
        <p className={`${styles.card_title} ${unbounded.className}`}>
          {t('feedback')} {index + 1}
        </p>
        <p
          className={`${styles.card_description} ${
            card.showMoreBtn ? styles.big_card_description : ''
          } ${showMore ? styles.show_text : ''}`}
          dangerouslySetInnerHTML={{
            __html: `${typeof card.feedback === 'string' ? card.feedback : card.feedback[locale]}`,
          }}
        />
        {card.showMoreBtn &&
          (showMore ? (
            <button
              onClick={() => setShowMore(false)}
              aria-label={t('close_aria')}
              className={styles.show_more_btn}
            >
              {t('close')}
            </button>
          ) : (
            <button
              onClick={() => setShowMore(true)}
              aria-label={t('show_more_aria')}
              className={styles.show_more_btn}
            >
              {t('show_more')}
            </button>
          ))}
      </div>
      {card.img && (
        <Image src="/assets/images/picture.webp" alt="picture" width={302} height={243} />
      )}
    </article>
  );
};

export default Card;
