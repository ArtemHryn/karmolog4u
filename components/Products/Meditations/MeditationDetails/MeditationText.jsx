import Title from "@components/Common/Title/Title";
import Link from "next/link";

import styles from "./MeditationsDescriptions.module.scss";

const list = {
  title: "ЯК ОТРИМАТИ МЕДИТАЦІЮ?",
  text: [
    "Натисніть на кнопку “Придбати” та заповніть дані, вказавши ім’я, електронну адресу та номер мобільного телефону.",
    "Здійсніть оплату вибраного матеріалу.",
    "Одразу після успішної транзакції вам на пошту прийде лист з доступом до особистого кабінету, де буде розміщена медитація.",
  ],
};

const MeditationText = ({ name, desc, price, category }) => {
  const { text, warning } = desc;
  return (
    <div>
      <Title styled={styles.title}>{name}</Title>
      {price && (
        <>
          <Title variant="p" styled={styles.price}>
            {price}
          </Title>
          <Link
            href={`/products/buy-product?${
              price ? `price=${price}` : ""
            }&name=${name}`}
            className={styles.button}
          >
            Придбати
          </Link>
        </>
      )}
      {text && (
        <div className={styles.text_wrapper}>
          {text.map((el, index) => (
            <p key={el} className={styles.text}>
              {el}
            </p>
          ))}
        </div>
      )}
      {category === "closed" && (
        <div>
          <p className={styles.list_title}>{list.title}</p>
          <ul>
            {list.text.map((el, index) => (
              <li key={index}>
                <p className={styles.text}>
                  {index + 1}. {el}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {warning && <p>{warning}</p>}
    </div>
  );
};

export default MeditationText;
