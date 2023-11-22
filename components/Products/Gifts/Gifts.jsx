import Link from "next/link";
import BagIcon from "./BagIcon";

import { gifts } from "@helper/products/giftsList";

import styles from "./Gifts.module.scss";
import OpenDetailsLink from "./OpenDetailsLink";

const Gifts = () => {
  const getDiscountPrice = (d, p) => {
    return d ? `${p * ((100 - d) / 100)}€` : `${p}€`;
  };

  const getImg = (img) => {
    const pic = img ? img.split("/") : null;
    return pic ? pic[pic.length - 1] : null;
  };

  return (
    <ul className={styles.list}>
      {gifts.map((el) => (
        <li className={styles.list_item} key={el.name}>
          <OpenDetailsLink
            img={el.img}
            discount={el.discount}
            name={el.name}
            id={el.id}
          />
          <div className={styles.bottom_wrapper}>
            <div className={styles.text_wrapper}>
              <p className={styles.title}>{el.name}</p>
              {el.remark && <p className={styles.remark}>{el.remark}</p>}
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
                  el.price
                    ? `price=${getDiscountPrice(el.discount, el.price)}`
                    : ""
                }&name=${el.name}&pic=${getImg(el.img)}`}
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
