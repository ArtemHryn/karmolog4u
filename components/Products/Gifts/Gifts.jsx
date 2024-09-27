import Link from 'next/link';
import { useLocale } from 'next-intl';
import OpenDetailsLink from './OpenDetailsLink';
import BagIcon from './BagIcon';

import { gifts } from '@helper/products/giftsList';

import styles from './Gifts.module.scss';

const Gifts = () => {
  const locale = useLocale();
  const getDiscountPrice = (d, p) => {
    return d ? `${p * ((100 - d) / 100)}€` : `${p}€`;
  };

  const getImg = img => {
    const pic = img ? img.split('/') : null;
    return pic ? pic[pic.length - 1] : null;
  };

  return (
    <ul className={styles.list}>
      {gifts.map(el => (
        <li
          className={styles.list_item}
          key={typeof el.name === 'string' ? el.name : el.name[locale]}
        >
          <OpenDetailsLink img={el.img} discount={el.discount} name={el.name} id={el.id} />
          <div className={styles.bottom_wrapper}>
            <div className={styles.text_wrapper}>
              <p className={styles.title}>
                {typeof el.name === 'string' ? el.name : el.name[locale]}
              </p>
              {el.remark && (
                <p className={styles.remark}>
                  {typeof el.remark === 'string' ? el.remark : el.remark[locale]}
                </p>
              )}
              {el.price && (
                <p className={styles.price}>
                  {getDiscountPrice(el.discount, el.price)}
                  {el.discount && <span>{el.price}€</span>}
                </p>
              )}
            </div>
            {el.price && (
              <Link
                className={styles.button}
                aria-label="замовити медитацію"
                href={`/products/buy-gift?${
                  el.price ? `price=${getDiscountPrice(el.discount, el.price)}` : ''
                }&name=${typeof el.name === 'string' ? el.name : el.name[locale]}&pic=${getImg(
                  el.img
                )}`}
              >
                <BagIcon />
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Gifts;
