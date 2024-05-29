import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import AboutCourse from '@components/Education/AboutCourse/AboutCourse';
import EduPricing from '@components/Education/EduPricing/EduPricing';
import WhatIsWaitingForYou from '@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou';
import Feedback from '@components/Main/Feedback/Feedback';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import Hero from '@components/Services/Hero/Hero';
import { addInfo } from '@helper/education/advancedCourseEduPricing';
import getAdvancedCourseFeedback from '@helper/education/advancedCourseFeedbakcs';
import getAdvancedCourseQuestions from '@helper/education/advancedCoursesQuestions';
import { getCardsForAdvancedCourse } from '@helper/education/whatIsWaitingForYou';

const links = [
  {
    href: '/advanced-course',
    name: 'Поглиблений курс',
  },
];

const text = [
  'Бути вчителем та наставником – це не тільки велика кількість знань, а й значна відповідальність.',
  'Тому, якщо вирішили йти далі – то ви точно там, де маєте бути, адже професійний поглиблений курс – це вищий рівень навчання, на який ви вступаєте, вже не як учень, а як колега. Цей рівень можна порівняти із програмою аспірантури в університеті. Інформацію про прорахунки поглибленого курсу вам не передадуть любителі та "знавці" методу "Матриця долі" з TikTok;)',
  'На поглибленому рівні ми разом знаходимося в ролі дослідників Методу —  розглядаємо нові аспекти матриці, вивчаємо понад десять нових матриць і освоюємо навички створення власних трансформаційних медитативних технік.',
  'Під час поглибленого курсу я передаю вам весь накопичений практичний досвід, набутий за понад 8 років практики в консультантській діяльності, не обмежуючись лише Методом.',
  'Після завершення поглибленого курсу ви отримаєте статус професійного кармотерапевта й право на консультування, а також можливість вступу в Асоціацію "Кармотерапії та психології".',
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
          img: '/assets/images/advanced_course_hero.webp',
          alt: 'Фото Сергія Скляренка',
        }}
      />
      <AboutCourse
        img={{
          img: '/assets/images/about_advanced_course.webp',
          alt: 'Фото Сергія Скляренка',
          imgDesk: '/assets/images/about_advanced_course_desk.webp',
        }}
        text={text}
      />
      <WhatIsWaitingForYou cards={cards} column1Style={true} />
      <EduPricing
        card={{ title: 'Поглиблений курс ', price: '1700€' }}
        addInfo={addInfo}
        link="/advanced-course/dialog"
        desc={{
          first:
            '*Увага – участь у поглибленому курсі можлива лише за умови проходження навчання на "Консультантському курсі”.',
          second: '**Дату старту наступного курсу можна дізнатися у наших менеджерів.',
        }}
      />
      <Feedbacks feedbacks={getAdvancedCourseFeedback()} />
      <QuestionAnswer column1={column1} column2={column2} main />

      <Feedback />
    </main>
  );
};



export default AdvancedPage;
