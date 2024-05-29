import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import AboutCourse from '@components/Education/AboutCourse/AboutCourse';
import AccessToTheCourse from '@components/Education/AccessToTheCourse/AccessToTheCourse';
import KarmologistPageTariffs from '@components/Education/KarmologistPageTariffs/KarmologistPageTariffs';
import WhatIsWaitingForYou from '@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou';
import Feedback from '@components/Main/Feedback/Feedback';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import Hero from '@components/Services/Hero/Hero';

import getKarmologistCoursesFeedbacks from '@helper/education/karmologistCourseFeedbacks';
import getKarmologistCoursesQuestions from '@helper/education/karmologistCoursesQuestions';
import { getCardsForKarmologistHimself } from '@helper/education/whatIsWaitingForYou';
import getTariffs from '@helper/education/karmologistTariffs';

const links = [
  {
    href: '/karmologist-himself',
    name: 'Курс “Сам собі кармолог”',
  },
];

const text = [
  'Гарний будинок ніколи не вийде якісним без належного фундаменту, так і в будь-якій справі все починається з основи.',
  'Якщо ви прагнете змін – вашим фундаментом стане наш курс “Сам собі кармолог”.',
  'Цей курс ознайомить вас з основами методу “Матриця долі”, включаючи базові алгоритми розрахунків матриці долі та основи її трактування для самостійного використання, як інструменту.',
  'Отримані знання дозволять вам глибше розуміти себе та навколишній світ, а також трансформувати власну матрицю, і як наслідок – життя загалом.',
  'По завершенню курсу — ви отримаєте сертифікат.',
  'Надалі ви можете продовжити своє навчання на консультантському та поглибленому рівнях у міжнародній школі “Студії трансформації” Сергія Скляренко. Проте, важливо врахувати, що право на консультування за методом "Матриця долі" не надається після завершення цього курсу.',
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
          img: '/assets/images/karmologist-himself_hero.webp',
          alt: 'Фото Сергія Скляренка',
        }}
      />
      <AboutCourse
        img={{
          img: '/assets/images/education_karmologis-himself_about_course.webp',
          alt: 'Фото Сергія Скляренка',
          imgDesk: '/assets/images/education_karmologis-himself_about_course_desc.webp',
        }}
        text={text}
        showTest
      />
      <WhatIsWaitingForYou cards={cards} />
      <KarmologistPageTariffs tariffs={getTariffs()} link={'karmologist-himself/dialog'} />
      <AccessToTheCourse />
      <Feedbacks feedbacks={getKarmologistCoursesFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} main />
      <Feedback />
    </main>
  );
};

export default KarmologistPage;
