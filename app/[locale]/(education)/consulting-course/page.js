import AboutCourse from '@components/Education/AboutCourse/AboutCourse';
import Hero from '@components/Education/ConsultingCourse/Hero/Hero';
import WhatIsWaitingForYou from '@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou';
import { getCardsForConsultingCourse } from '@helper/education/whatIsWaitingForYou';
import Feedback from '@components/Main/Feedback/Feedback';
import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import getConsultingCourseQuestions from '@helper/education/consultingCourseQuestions';
import getConsultingCourseFeedbacks from '@helper/education/consultingCourseFeedbacks';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import EduPricing from '@components/Education/EduPricing/EduPricing';
import { addInfo } from '@helper/education/consultingCourseEduPricing';

import styled from '@components/Education/ConsultingCourse/AboutCourse/AboutCourse.module.scss';

const text = [
  'Коли ви багато дізналися корисного для себе, але зрозуміли, що можете допомагати іншим — саме час приєднатися до нашого консультантського курсу. Це навчання стане новою сторінкою вашого життя та основою для становлення, як професійного консультанта.',
  'Протягом семимісячного онлайн-навчання особисто зі мною, ви трансформуєте основу своєї матриці, всі 22 архетипи, які присутні в кожній людині. Адже для роботи з іншими, вкрай необхідно спочатку пропрацювати себе.',
  'Ключовим елементом, який ви отримаєте від консультантського курсу, є відкриття вашої внутрішньої глибини та розкриття талантів й дарів. Після завершення курсу, склавши іспити, ви отримаєте сертифікат, який підтверджує ваш професійний статус кармолога з правом консультування.',
  'Ваш внесок стане важливою ланкою у глобальній трансформації людства!',
  'Метод "Матриця долі" та моя авторська методика"Кармотерапія" дозволяють людям відчути себе та знайти свій шлях.',
  'Для тих, хто прагне глибшого вивчення методу, сертифікат консультантського курсу відкриває можливість вступити на поглиблений курс Міжнародної школи "Студії Трансформації Сергія Скляренка", де ми разом будемо досліджувати метод, вивчати більш як 10 нових матриць, а також ви дізнаєтесь про авторську методику роботи з клієнтами “Кармотерапія”.',
  'По завершенню поглибленого курсу та успішному складанні іспиту, вам буде видано сертифікат кармотерапевта з правом вступу в Асоціацію "Кармотерапії та психології". ',
];

const ConsultingCourse = () => {
  const cards = getCardsForConsultingCourse();
  const { column1, column2 } = getConsultingCourseQuestions();
  return (
    <main>
      <Hero />
      <AboutCourse
        img={{
          img: '/assets/images/consultingCourse/About.webp',
          alt: 'Фото Сергія Скляренка',
          imgDesk: '/assets/images/consultingCourse/about_desc.webp',
        }}
        styled={styled.image}
        text={text}
      />
      <WhatIsWaitingForYou cards={cards} column1Style={true} />
      <EduPricing
        card={{ title: 'Консультантський курс', price: '1400€' }}
        addInfo={addInfo}
        link={`/consulting-course/dialog`}
        desc={{
          first:
            'Участь у “Консультантському курсі” можлива лише за умови проходження навчання “Сам собі кармолог” або після успішно складеного теоретичного тесту.',
          second: '***Про дату початку наступного курсу можна дізнатися у наших менеджерів.',
        }}
      />
      <Feedbacks feedbacks={getConsultingCourseFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </main>
  );
};

export default ConsultingCourse;
