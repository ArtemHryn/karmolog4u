"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import TextMaskInput from "react-text-mask";
import { useRouter } from "next/navigation";

import Field from "./Field";

import styles from "./SendApplicationModalContext.module.scss";
import "react-phone-input-2/lib/bootstrap.css";

const url = "http://localhost:3001/mails/send-mail";

const Form = ({ setIsSent }) => {
  const [license, setLicense] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    const body = JSON.stringify(data);
    try {
      await fetch(url, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsSent(true);
    } catch (error) {
      console.log(error);
      router.back();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      {/* ПІБ */}
      <Field
        register={register}
        name={"name"}
        title={"ПІП українською мовою"}
        error={errors}
        required={false}
      />
      {/* ПІБ англ*/}
      <Field
        register={register}
        name={"nameEng"}
        title={"ПІП англійською мовою"}
        error={errors}
        required={false}
      />
      {/* дата */}
      <Controller
        name="date"
        control={control}
        rules={{
          required: { value: true, message: "Введіть дату народження" },
          pattern: {
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            message: "Введіть дату в форматі дд.мм.рррр",
          },
        }}
        render={({ field }) => (
          <div className={styles.inputGroup}>
            <TextMaskInput
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
              type="text"
              guide={false}
              placeholder="дд.мм.рр"
              className={`${styles.input} ${styles.input_date}`}
              id="date"
            />{" "}
            <label htmlFor="date" className={styles.label}>
              Дата народження
            </label>
            {errors.date && (
              <p className={styles.error}>{errors.date.message}</p>
            )}
          </div>
        )}
      />
      {/* моб номер */}
      <div className={styles.number_wrapper}>
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
      {/* мейл */}
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
      {/* ФБ або інста */}
      <Field
        register={register}
        name={"socLink"}
        title={"Сторінка/акаунт у Facebook або Instagram"}
        error={errors}
        required={true}
      />
      {/* Освіта */}
      <Field
        register={register}
        name={"education"}
        title={"Освіта (ЗВО, спеціальність, рік закінчення)"}
        error={errors}
        required={true}
      />
      {/* Навчання в студії */}
      <Field
        register={register}
        name={"educationInStudio"}
        title={"Навчання у школі Студії Трансформації Сергія Скляренко"}
        error={errors}
        required={true}
      />
      {/* курси */}
      <Field
        register={register}
        name={"courses"}
        title={"Курси підвищення кваліфікації (перерахувати)"}
        error={errors}
        required={true}
      />
      {/* аспірантура */}
      <Field
        register={register}
        name={"graduateSchool"}
        title={"Навчання в аспірантурі/докторантурі"}
        error={errors}
        required={true}
      />
      {/* робота */}
      <Field
        register={register}
        name={"work"}
        title={"Місце роботи, посада"}
        error={errors}
        required={true}
      />
      {/* наукові інтереси */}
      <Field
        register={register}
        name={"interesting"}
        title={"Наукові інтереси (перерахувати)"}
        error={errors}
        required={true}
      />
      {/* інші членства */}
      <Field
        register={register}
        name={"otherMemberships"}
        title={"Членство в інших організаціях/установах (перерахувати)"}
        error={errors}
        required={true}
      />
      {/* мотивація для вступу */}
      <div className={styles.inputGroup}>
        <textarea
          rows={4}
          type="text"
          id="motivation"
          className={styles.textArea}
          placeholder=" "
          {...register("motivation", {
            required: "Заповніть поле",
          })}
        />
        <label htmlFor="motivation" className={styles.label}>
          Мотивація до вступу в Асоціацію “Кармотерапії та психології”
        </label>
        {errors.otherMemberships && (
          <p className={styles.error}>{errors.otherMemberships.message}</p>
        )}
      </div>
      {/* ліцензія */}
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
      <button type="submit" className={styles.submit_btn} disabled={!license}>
        Подати заявку
      </button>
    </form>
  );
};

export default Form;
