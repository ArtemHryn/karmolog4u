import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import AboutCourse from "@components/Education/AboutCourse/AboutCourse";
import AccessToTheCourse from "@components/Education/AccessToTheCourse/AccessToTheCourse";
import KarmologistPageTariffs from "@components/Education/KarmologistPageTariffs/KarmologistPageTariffs";
import WhatIsWaitingForYou from "@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou";
import Feedback from "@components/Main/Feedback/Feedback";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import Hero from "@components/Services/Hero/Hero";

import getKarmologistCoursesFeedbacks from "@helper/education/karmologistCourseFeedbacks";
import getKarmologistCoursesQuestions from "@helper/education/karmologistCoursesQuestions";
import { getCardsForKarmologistHimself } from "@helper/education/whatIsWaitingForYou";
import getTariffs from "@helper/education/karmologistTariffs";

const links = [
  {
    href: "/karmologist-himself",
    name: "Курс “Сам собі кармолог”",
  },
];

const text = [
  "Курс “Cам собі кармолог” – навчання основам методу “Матриця долі”. Курс включає базові алгоритми розрахунків матриці долі та основи трактування матриці долі для самостійної роботи з інструментом. Отримані знання ви можете застосувати для того, щоб краще зрозуміти себе та своє оточення та трансформувати свою матрицю. По завершенню даного курсу ви отримуєте сертифікат про ознайомлення з програмою. Право консультування в методі “Матриця долі” після проходження даного курсу не надається.",
  "Проходження даного курсу дає можливість продовжити навчання на консультантському та поглибленому рівнях міжнародної школи Студії трансформації.",
  "Якщо ви вже проходили навчання в іншій школі кармології і маєте базові знання методу, ви маєте можливість перевірити свої знання і після успішного проходження тесту відразу потрапити на консультанський курс.",
  "Для отримання тесту зверніться до менеджера в будь який зручний месенджер для вас",
  "*Навчання складається з 10 уроків в онлайн-форматі",
];

const KarmologistPage = () => {
  const { column1, column2 } = getKarmologistCoursesQuestions();
  const cards = getCardsForKarmologistHimself();
  return (
    <main>
      <Hero
        linkNames={links}
        title="КУРС “САМ СОБІ КАРМОЛОГ”"
        img={{
          img: "/assets/images/karmologist-himself_hero.webp",
          alt: "Фото Сергія Скляренка",
          imgDesk: "/assets/images/karmologist-himself_hero_desk.webp",
        }}
      />
      <AboutCourse
        img={{
          img: "/assets/images/education_karmologis-himself_about_course.webp",
          alt: "Фото Сергія Скляренка",
          imgDesk:
            "/assets/images/education_karmologis-himself_about_course_desc.webp",
        }}
        text={text}
      />
      <WhatIsWaitingForYou cards={cards} />
      <KarmologistPageTariffs
        tariffs={getTariffs()}
        link={"karmologist-himself/dialog"}
      />
      <AccessToTheCourse />
      <Feedbacks feedbacks={getKarmologistCoursesFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} main />
      <Feedback />
    </main>
  );
};

export default KarmologistPage;
