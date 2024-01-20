import React from 'react'
import CalculatorHero from "@components/Calculator/CalculatorHero/CalculatorHero";
import Container from "@components/Common/Container/Container";

const heroData = {
  links: [
    {
      href: "/calculator",
      name: "Калькулятор",
    },
    {
      href: "/nine-tribes-of-the-family-matrix",
      name: "Розрахувати матрицю “9 колін роду”",
    },
  ],
  about: "Онлайн-розрахунок",
  title: "МАТРИЦІ \n “9 КОЛІН РОДУ”",
  desc: [
    "Вже давно відомо, що генетика відіграє вагому роль у формуванні особистості. \n А якщо це генетичний код поколінь – тим паче.",
    "Розрахунок «9 колін Роду» — це можливість для кожного переглянути власні уроки й задачі, котрі передає її Рід, й зрозуміти, який потенціал передає кожне коліно роду своєму нащадку та що саме необхідно припрацьовувати.",
    "В кожному з нас від народження закладена егрегоріальна система роду і кожне (уявляєте собі скільки їх) покоління наших предків впливає на формування нас та нашого життя.",
    "Так, ви дійсно «запрограмовані», адже кожне коліно по лінії роду матері й батька передає певні родові програми, але, не переживайте – ми знаємо, що з цим робити й розкажемо вам.",
  ],
};

function NineTribesOfTheFadeFamilyMatrix() {
  return (
    <main>
      <Container>
        <CalculatorHero heroData={heroData} />
      </Container>
    </main>
  );
}

export default NineTribesOfTheFadeFamilyMatrix