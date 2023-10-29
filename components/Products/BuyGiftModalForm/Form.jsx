import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useForm, Controller } from "react-hook-form";

import styles from "./BuyGiftModalForm.module.scss";
import "react-phone-input-2/lib/bootstrap.css";
import Title from "@components/Common/Title/Title";
import Link from "next/link";

const Form = ({ price }) => {
  const [license, setLicense] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Title variant="p" styled={styles.form_title}>
        Вкажіть свої дані:
      </Title>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="name"
          className={styles.input}
          placeholder=" "
          {...register("name")}
        />
        <label htmlFor="name" className={styles.label}>
          ПІБ
        </label>
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          id="email"
          className={styles.input}
          placeholder=" "
          {...register("email", {
            required: "Будь ласка, введіть email",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введіть коректний email",
            },
          })}
        />
        <label htmlFor="email" className={styles.label}>
          Ваш email
        </label>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div>
        <p>Ваш номер телефону</p>
        <Controller
          name="phone"
          control={control}
          rules={{
            minLength: {
              value: 12,
              message: "Введіть номер в форматі (XXX) XXX-XX-XX",
            },
            required: { value: true, message: "Введіть номер телефону" },
          }}
          render={({ field }) => (
            <PhoneInput
              country={"ua"}
              value={field.value}
              onChange={(phone) => field.onChange(phone)}
              prefix="+"
              defaultMask="(...) ...-..-.."
              className={styles.phone}
              inputClass={styles.flagInput}
              buttonClass={styles.buttonClass}
              dropdownClass={styles.dropdownClass}
            />
          )}
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <div className={styles.checkbox_wrapper}>
        <input
          type="checkbox"
          id="license"
          checked={license}
          onChange={(e) => setLicense(e.target.checked)}
        />
        <label htmlFor="license">
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
        <p className={styles.text}>
          Я підтверджую, що ознайомився (-лася) з{" "}
          <Link href={"/"} target="_blank">
            політикою конфіденційності
          </Link>{" "}
          та{" "}
          <Link href={"/"} target="_blank">
            договором публічної оферти
          </Link>
        </p>
      </div>
      <Title variant="p" styled={styles.form_price}>
        Сума до сплати:<span>{price}</span>
      </Title>
      <button type="submit" className={styles.submit_btn} disabled={!license}>
        Придбати
      </button>
    </form>
  );
};

export default Form;
