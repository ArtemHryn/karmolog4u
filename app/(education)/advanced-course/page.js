import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import AboutCourse from "@components/Education/AboutCourse/AboutCourse";
import EduPricing from "@components/Education/EduPricing/EduPricing";
import WhatIsWaitingForYou from "@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou";
import Feedback from "@components/Main/Feedback/Feedback";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import Hero from "@components/Services/Hero/Hero";
import { addInfo } from "@helper/education/advancedCourseEduPricing";
import getAdvancedCourseFeedback from "@helper/education/advancedCourseFeedbakcs";
import getAdvancedCourseQuestions from "@helper/education/advancedCoursesQuestions";
import { getCardsForAdvancedCourse } from "@helper/education/whatIsWaitingForYou";

const links = [
  {
    href: "/advanced-course",
    name: "Поглиблений курс",
  },
];

const text = [
  "Поглиблений курс - це вже зовсім інший рівень знань. На нього ви приходите до мене не учнями, а колегами. Це можна порівняти з аспірантурою в університеті.   Про прорахунки поглибленого курсу вам не розкажуть любителі методу ,,Матриця долі,, з тік току;)",
  "На поглибленому рівні ми знаходимось в позиції дослідників Методу. Ми відкриваємо нові грані матриці, вивчаємо більше 10 нових матриць, вчимось створювати авторські трансформаційні медитативні техніки. На поглибленому курсі я передаю вам увесь свій накопичений досвід за всі роки практики в консультантській діяльності, не тільки в Методі. Після закінчення поглибленого курсу ви стаєте професійним кармотерапевтом з правом консультування і вступом в Асоціацію “Кармотерапії та психології”",
];

const AdvancedPage = () => {
  const cards = getCardsForAdvancedCourse();
  const { column1, column2 } = getAdvancedCourseQuestions();
  return (
    <main>
      <Hero
        linkNames={links}
        title="ПОГЛИБЛЕНИЙ  КУРС"
        img={{
          img: "/assets/images/advanced_course_hero.webp",
          alt: "Фото Сергія Скляренка",
        }}
      />
      <AboutCourse
        img={{
          img: "/assets/images/about_advanced_course.webp",
          alt: "Фото Сергія Скляренка",
          imgDesk: "/assets/images/about_advanced_course_desk.webp",
        }}
        text={text}
      />
      <WhatIsWaitingForYou cards={cards} />
      <EduPricing
        card={{ title: "Поглиблений курс ", price: "1700€" }}
        addInfo={addInfo}
        link='/advanced-course/dialog'
        desc={{
          first:
            "*Участь у “Навчанні за поглибленими розрахунками” можлива лише за умови проходження навчання на “Консультантському курсі”.",
          second: "**Наступний курс стартує у наприкінці 2023 року.",
        }}
      />
      <Feedbacks feedbacks={getAdvancedCourseFeedback()} />
      <QuestionAnswer column1={column1} column2={column2} main />

      <Feedback />
    </main>
  );
};

export default AdvancedPage;
