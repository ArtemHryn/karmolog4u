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
import { useTranslations } from 'next-intl';

const text = {
  uk: [
    'Коли ви багато дізналися корисного для себе, але зрозуміли, що можете допомагати іншим — саме час приєднатися до нашого консультантського курсу. Це навчання стане новою сторінкою вашого життя та основою для становлення, як професійного консультанта.',
    'Протягом семимісячного онлайн-навчання особисто зі мною, ви трансформуєте основу своєї матриці, всі 22 архетипи, які присутні в кожній людині. Адже для роботи з іншими, вкрай необхідно спочатку пропрацювати себе.',
    'Ключовим елементом, який ви отримаєте від консультантського курсу, є відкриття вашої внутрішньої глибини та розкриття талантів й дарів. Після завершення курсу, склавши іспити, ви отримаєте сертифікат, який підтверджує ваш професійний статус кармолога з правом консультування.',
    'Ваш внесок стане важливою ланкою у глобальній трансформації людства!',
    'Метод "Матриця долі" та моя авторська методика"Кармотерапія" дозволяють людям відчути себе та знайти свій шлях.',
    'Для тих, хто прагне глибшого вивчення методу, сертифікат консультантського курсу відкриває можливість вступити на поглиблений курс Міжнародної школи "Студії Трансформації Сергія Скляренка", де ми разом будемо досліджувати метод, вивчати більш як 10 нових матриць, а також ви дізнаєтесь про авторську методику роботи з клієнтами “Кармотерапія”.',
    'По завершенню поглибленого курсу та успішному складанні іспиту, вам буде видано сертифікат кармотерапевта з правом вступу в Асоціацію "Кармотерапії та психології". ',
  ],
  ru: [
    'Когда вы уже много узнали полезного для себя, но поняли, что можете помогать другим — самое время присоединиться к нашему консультантскому курсу. Это обучение станет новой страницей вашей жизни и основой для становления вас, как профессионального консультанта.',
    'В течение семимесячного модульного онлайн-обучения лично со мной, вы трансформируете основу своей матрицы, все 22 архетипа, которые присутствуют в каждом человеке. Ведь для работы с другими, крайне необходимо сначала проработать себя.',
    'Ключевой элемент, который вы получите от консультантского курса — это открытие вашей внутренней глубины и раскрытие талантов и даров. После завершения курса, сдав экзамены, вы получите сертификат, подтверждающий ваш профессиональный статус кармолога с правом консультирования.',
    'Ваш вклад станет важным звеном в глобальной трансформации человечества!',
    'Метод "Матрица судьбы" и моя авторская методика "Кармотерапия" позволяют людям почувствовать себя и найти свой путь',
    'Для тех, кто стремится к более глубокому изучению метода, сертификат консультантского курса открывает возможность поступить на углубленный курс Международной школы "Студии Трансформации Сергея Скляренко", где мы вместе будем исследовать метод, изучать более 10 новых матриц, а также вы узнаете про авторскую методику работы с клиентами "Кармотерапия".',
    'По завершению углубленного курса, при успешно сданном экзамене, вам будет выдан сертификат кармотерапевта с правом вступления в Ассоциацию "Кармотерапии и психологии".',
  ],
};

const additionalCards = {
  ru: { title: 'Практический модуль', price: '12 000', text: '(полная стоимость)' },
  uk: {
    title: 'Практичний модуль',
    price: '12 000',
    text: '(повна вартість)',
  },
};

const ConsultingCourse = ({ params: { locale } }) => {
  const t = useTranslations('Education.consulting_course.edu_pricing');
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
        additionalCard={additionalCards[locale]}
        addInfo={addInfo}
        additionalTitle={t('additionalTitle')}
        link={`/consulting-course/dialog`}
        desc={{
          first: t('warning1'),
          second: t('warning2'),
        }}
      />
      <Feedbacks feedbacks={getConsultingCourseFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </main>
  );
};

export default ConsultingCourse;
