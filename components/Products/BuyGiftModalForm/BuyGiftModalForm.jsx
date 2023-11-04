"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Title from "@components/Common/Title/Title";

import styles from "./BuyGiftModalForm.module.scss";
import Form from "./Form";

export const dynamic = "force-dynamic";

const BuyGiftModalForm = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");


  return (
    <div className={styles.modal_container}>
      <Title styled={styles.title}>Ваше замовлення:</Title>
      <div className={styles.order_wrapper}>
        <Image
          src={"/assets/images/meditations/book2.webp"}
          alt="замовлення"
          width={91}
          height={72}
        />
        <p className={styles.product_name}>{name}</p>
        {price && (
          <Title styled={styles.price} variant="p">
            {price}
          </Title>
        )}
      </div>
      <p className={styles.warning}>
        *Вартість вказана в іноземній валюті, тому відповідає курсу на момент
        оплати. <br />
        Сплатити можна в один клік із будь-якої точки світу.
      </p>
      <Form price={price} />
    </div>
  );
};

export default BuyGiftModalForm;
