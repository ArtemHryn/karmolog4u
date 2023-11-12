"use client";
import { useEffect, useState } from "react";
import Form from "./Form";
import Title from "@components/Common/Title/Title";
import styles from "./SendApplicationModalContext.module.scss";
import { useRouter } from "next/navigation";

const SendApplicationModalContext = () => {
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isSent) {
      setTimeout(() => router.back(), 3000);
    }
  });

  return isSent ? (
    <div className={styles.successful_container}>
      <Title styled={styles.successful_title}>Дякуємо! </Title>
      <p className={styles.successful_text}>
        Протягом тижня ми звʼяжемось з Вами стосовно свого рішення про вступ в
        асоціацію
      </p>
    </div>
  ) : (
    <div className={styles.modal_container}>
      <Title styled={styles.title}>
        Заявка на вступ до Асоціації “Кармотерапії та психології”
      </Title>
      <Form setIsSent={setIsSent} />
    </div>
  );
};

export default SendApplicationModalContext;
