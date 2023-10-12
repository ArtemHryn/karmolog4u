import Image from "next/image";
import Link from "next/link";
import BagIcon from "./BagIcon";

import styles from "./Gifts.module.scss";

const Gifts = () => {
  return (
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Image
            src={"/assets/images/meditations/cert.webp"}
            alt="сертифікат"
            width={356}
            height={223}
          />
          <div className={styles.text_wrapper}>
            <p className={styles.title}>Подарунковий сертифікат</p>
            <p className={styles.remark}>
              *Вартість залежить від обраної послуги
            </p>
          </div>
        </li>
        <li className={styles.list_item}>
          <Image
            src={"/assets/images/meditations/candle.webp"}
            alt="сертифікат"
            width={356}
            height={223}
          />
          <p className={styles.discount}>-23%</p>
          <div className={styles.bottom_wrapper}>
            <div className={styles.text_wrapper}>
              <p className={styles.title}>Матрична свічка</p>
              <p className={styles.price}>
                25.41€ <span>33 €</span>
              </p>
            </div>
            <Link
              className={styles.button}
              aria-label="замовити медитацію"
              href={"#"}
            >
              <BagIcon />
            </Link>
          </div>
        </li>
        <li className={styles.list_item}>
          <Image
            src={"/assets/images/meditations/block.webp"}
            alt="сертифікат"
            width={356}
            height={223}
          />
          <div className={styles.bottom_wrapper}>
            <div className={styles.text_wrapper}>
              <p className={styles.title}>Бокс “Полум’я трансформації”</p>
              <p className={styles.price}>88€</p>
            </div>
            <Link
              className={styles.button}
              aria-label="замовити медитацію"
              href={"#"}
            >
              <BagIcon />
            </Link>
          </div>
        </li>
      </ul>
  );
};

export default Gifts;
