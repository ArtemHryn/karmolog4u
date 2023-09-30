import Container from "@components/Common/Container/Container";
import AboutCourse from "@components/Education/AboutCourse/AboutCourse";
import Hero from "@components/Education/ConsultingCourse/Hero/Hero";
import styled from "@components/Education/ConsultingCourse/AboutCourse/AboutCourse.module.scss";
import WhatIsWaitingForYou from "@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou";
import { getCardsForConsultingCourse } from "@helper/education/whatIsWaitingForYou";
import Feedback from "@components/Main/Feedback/Feedback";
import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import getConsultingCourseQuestions from "@helper/education/consultingCourseQuestions";
import getConsultingCourseFeedbacks from "@helper/education/consultingCourseFeedbacks";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import EduPricing from "@components/Education/EduPricing/EduPricing";
import { addInfo } from "@helper/education/consultingCourseEduPricing";

const text = [
  "Консультантський курс - це нова сторінка вашого життя. Це основа для кожного професійного консультанта. Під час 7-ми місячного навчання в онлайн-форматі особисто зі мною ви трансформуєте основу своєї матриці, всі 22 архетипи, які присутні в кожній людині. Адже для того, щоб працювати з іншими людьми, потрібно пропрацювати в першу чергу себе",
  "Головне, що дасть вам консультантський курс - це відкрити свою глибину і свої таланти, здібності, дари",
  "Після успішного завершення курсу ви складаєте іспит по пройденому матеріалу і отримуєте сертифікат, який свідчить про те, що ви є професійним кармологом з правом консультування",
  "Саме завдяки ВАМ стане можливою глобальна трансформація людства! Адже метод “Матриця долі” і моя авторська методика “Кармотерапія” дають можливість людям відчувати себе та знаходити свій шлях",
  "Для тих, хто бажає пірнути ще глибше в пізнанні методу, сертифікат консультанського курсу надає можливість вступу на поглиблений курс міжнародної Школи Студії Трансформації Сергія Скляренко. Де ви разом зі мною будете досліджувати метод, вивчати більше 10 нових матриць, а також дізнаєтесь про авторську методику роботи з клієнтами “Кармотерапія”",
  "Після завершення поглибленого курсу і успішно складеного іспиту, ви отримаєте сертифікат кармотерапевта з правом вступу в Асоціацію “Кармотерапії та психології”",
];

const ConsultingCourse = () => {
  const cards = getCardsForConsultingCourse();
  const { column1, column2 } = getConsultingCourseQuestions();
  return (
    <main>
      <Hero />
      <AboutCourse
        img={{
          img: "/assets/images/consultingCourse/About.webp",
          alt: "Фото Сергія Скляренка",
        }}
        styled={styled.image}
        text={text}
      />
      <WhatIsWaitingForYou cards={cards} />
      <EduPricing
        card={{ title: "Консультантський курс", price: "1400€" }}
        addInfo={addInfo}
        desc={{
          first:
            "*Участь у “Консультантському курсі” можлива лише за умови проходження навчання “Сам собі кармолог” або після успішно складеного теоретичного тесту.",
          second: "**Наступний курс стартує наприкінці 2023 року.",
        }}
      />
      <Feedbacks feedbacks={getConsultingCourseFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </main>
  );
};

export default ConsultingCourse;
