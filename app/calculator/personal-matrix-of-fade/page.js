"use client";
import CalculatorHero from "@components/Calculator/CalculatorHero/CalculatorHero";
import PersonalCalculator from "@components/Calculator/PersonalMatrix/PersonalCalculator";
import Container from "@components/Common/Container/Container";
import React from "react";
import { useForm } from "react-hook-form";
import style from "./page.module.scss";

const heroData = {
  links: [
    {
      href: "/calculator",
      name: "Калькулятор",
    },
    {
      href: "/personal-matrix-of-fade",
      name: "Розрахувати особисту матрицю",
    },
  ],
  about: "Онлайн-розрахунок",
  title: "ОСОБИСТОЇ \n МАТРИЦІ ДОЛІ",
  desc: [
    "«Така твоя доля» — хоч раз в житті кожен стикався з таким формулюванням щодо невдач у житті. Хочете змін, але не знаєте в якому напрямку рухатись? — ми допоможемо!",
    "Цей розрахунок познайомить вас з власною «Матрицею долі», підкаже ваші призначення та задачі на це втілення, висвітлить таланти й особисті проявлення в соціумі. А ще — він стане вашим путівником у світ здоров’я, гармонійних стосунків та матеріальних благ й підкаже, як найкраще ви можете себе реалізувати у всіх напрямках власного омріяного життя. \n Ваша доля — у ваших руках!",
  ],
};
function PersonalMatrixOfFade() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <Container>
        <section className={style.hero}>
          <article className="">
            <CalculatorHero heroData={heroData} />
          </article>
          <article>
            <form onSubmit={handleSubmit(onSubmit)}>
              <article>
                <label htmlFor="name">Ваше ім’я</label>
                <input
                  placeholder="Ім’я"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p role="alert">Ваше ім’я is required</p>
                )}
              </article>
              <article>
                <label htmlFor="date">Дата народження</label>
                <input type="date" {...register("date", { required: true })} />
                {errors.date?.type === "required" && (
                  <p role="alert">Дата народження is required</p>
                )}
              </article>

              <button type="submit">Розрахувати матрицю </button>
            </form>
          </article>
        </section>
        <section>
          <article>
            <PersonalCalculator />
          </article>
        </section>
      </Container>
    </main>
  );
}

export default PersonalMatrixOfFade;
