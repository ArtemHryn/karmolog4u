import Link from "next/link";
import Title from "@components/Common/Title/Title";
import styles from "./GiftsDetails.module.scss";
const GiftDetailsTitle = ({ card }) => {
  return (
    <>

        <Title styled={styles.title}>{card.name}</Title>
        {card.contactUs && (
          <p className={styles.contact_us}>
            *Вартість залежить від обраної послуги
          </p>
        )}

        {card.price && (
          <>
            <Title variant="p" styled={styles.price}>
              {card.discount
                ? `${card.price * ((100 - card.discount) / 100)}€`
                : `${card.price}€`}
              {card.discount && <span>{card.price}€</span>}
            </Title>
          </>
        )}
        <Link
          href={`/products/buy-gift?${
            card.price
              ? `price=${
                  card.discount
                    ? `${card.price * ((100 - card.discount) / 100)}€`
                    : `${card.price}€`
                }`
              : ""
          }&name=${card.name}`}
          className={styles.button}
        >
          Придбати
        </Link>
    </>
  );
};

export default GiftDetailsTitle;
