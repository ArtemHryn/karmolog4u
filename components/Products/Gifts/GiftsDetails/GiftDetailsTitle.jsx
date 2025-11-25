import Link from 'next/link';
import Title from '@/components/Common/Title/Title';
import styles from './GiftsDetails.module.scss';
import useLocalizedValue from '@/hooks/useLocalizedValue';
import { useTranslations } from 'next-intl';

const GiftDetailsTitle = ({ card }) => {
  const localizedName = useLocalizedValue(card.name);
  const t = useTranslations('Author_products.gifts.details_title');
  return (
    <>
      <Title styled={styles.title}>{localizedName}</Title>
      {card.contactUs && <p className={styles.contact_us}>{t('contact_us')}</p>}

      {card.price && (
        <>
          <Title variant="p" styled={styles.price}>
            {card.discount ? `${card.price * ((100 - card.discount) / 100)}€` : `${card.price}€`}
            {card.discount && <span>{card.price}€</span>}
          </Title>
        </>
      )}
      <Link
        href={`/products/buy-gift?${
          card.price
            ? `price=${
                card.discount ? `${card.price * ((100 - card.discount) / 100)}€` : `${card.price}€`
              }`
            : ''
        }&name=${localizedName}`}
        className={styles.button}
      >
        {t('button')}
      </Link>
    </>
  );
};

export default GiftDetailsTitle;
