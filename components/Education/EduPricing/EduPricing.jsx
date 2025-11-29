import { useTranslations } from 'next-intl';
import Container from '@/components/Common/Container/Container';
import Title from '@/components/Common/Title/Title';
import Link from 'next/link';
import { open_Sans } from '@/app/[locale]//layout';
import useLocalizedValue from '@/hooks/useLocalizedValue';

import styles from './EduPricing.module.scss';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import ShowModalButton from '../../Common/ShowModalButton/ShowModalButton';

function EduPricing({ card, addInfo = [], desc, link, additionalTitle, additionalCard }) {
  const t = useTranslations('Education.advanced_course.edu_pricing');

  const renderAddInfo = useLocalizedValue(addInfo);
  const localizedTitle = useLocalizedValue(card.title);

  return (
    <Container>
      <Title variant="h2" styled={styles.title}>
        {t('title')}
      </Title>
      <p className={styles.desc}>
        {desc.first}
        <br />
        {desc.second}
      </p>
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <div className={styles.wrap}>
            <Title variant="h4" styled={styles.card_title}>
              {localizedTitle}
            </Title>
            <div className={styles.card_price_wrap}>
              <Title variant="h3" styled={styles.card_price}>
                {card.price}
              </Title>
              <Title variant="h5" styled={styles.card_info}>
                ({t('full_payment')})
              </Title>
            </div>
          </div>
          <ShowModalButton styles={`${styles.button} ${open_Sans.className}`} />
        </div>
        {additionalCard && (
          <div className={styles.card}>
            <div className={styles.wrap}>
              <Title variant="h4" styled={styles.card_title}>
                {additionalCard.title}
              </Title>
              <div className={styles.card_price_wrap}>
                <Title variant="h3" styled={styles.card_price}>
                  {additionalCard.price} &#8372;
                </Title>
                <Title variant="h5" styled={styles.card_info}>
                  ({t('full_payment')})
                </Title>
              </div>
            </div>
            <ShowModalButton styles={`${styles.button} ${open_Sans.className}`} />
          </div>
        )}
      </div>
      <div className={styles.additional_info_wrapper}>
        {additionalTitle && (
          <TitleNoStyles variant="h3" styled={styles.additional_info_title}>
            {additionalTitle}
          </TitleNoStyles>
        )}
        <ul className={styles.info}>
          {renderAddInfo.map((item, index) => (
            <li key={index} className={styles.info_element}>
              <div className={styles.info_card}>
                <p className={styles.info_text}>{item}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default EduPricing;
