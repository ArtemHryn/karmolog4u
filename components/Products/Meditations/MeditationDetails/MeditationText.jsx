import Title from "@components/Common/Title/Title";
import Link from "next/link";

import styles from "./MeditationsDescriptions.module.scss";
import MeditationsTextList from "./MeditationsTextList";

const list = {
  title: "ЯК ОТРИМАТИ МЕДИТАЦІЮ?",
  text: [
    "Натисніть на кнопку “Придбати” та заповніть дані, вказавши ім’я, електронну адресу та номер мобільного телефону.",
    "Здійсніть оплату вибраного матеріалу.",
    "Одразу після успішної транзакції вам на пошту прийде лист з доступом до особистого кабінету, де буде розміщена медитація.",
  ],
};

const MeditationText = ({ name, desc, price, category }) => {
  const categoryList = ["closed", "webinars"];
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
      {desc?.text && (
        <div className={styles.text_wrapper}>
          {desc.text.map((el) => (
            <p key={el} className={styles.text}>
              {el}
            </p>
          ))}
        </div>
      )}
      <div className={styles.list_wrapper}>
        {categoryList.includes(category) && <MeditationsTextList list={list} />}
        {desc?.list && <MeditationsTextList list={desc.list} />}
      </div>
      {desc?.warning && <p>{desc.warning}</p>}
    </div>
  );
};

export default MeditationText;
