import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import Feedback from '@components/Main/Feedback/Feedback';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import AboutPractice from '@components/Services/Offline-meetings/AboutPractice/AboutPractice';
import OfflineMeetingsHero from '@components/Services/Offline-meetings/Hero/Hero';
import HowIsGoingNailing from '@components/Services/Offline-meetings/HowIsGoingNailing/HowIsGoingNailing';

import getNailingFeedbacks from '@helper/nailingFeedbacks';
import getNailingQuestions from '@helper/nailingQuestions';

const text = [
  'Про те, як пов’язано наше фізичне тіло з внутрішніми процесами, знають майже всі, а от те, що через тіло можна пропрацювати та достати  навіть підсвідоме — лише невелика кількість людей.',
  'Цвяхостояння – це глибинна психотерапевтична робота з розблокуванням свідомих та підсвідомих процесів задля розбору кожного окремого запиту.',
  'Авторська методика Сергія Скляренко дозволяє запустити процес синтезу деструктивної програми у свідомості кожного учасника, завдяки чому трансформація відбувається з гарантованою ефективністю.',
  '<b>Цей метод лякає або викликає сумніви?<br/>- спробуйте та переконайтесь у його  результативності.</b>',
];

const practiceSteps = [
  'Першочергово, під час особистої коуч-сесії зі мною, здійснюється психологічна робота, спрямована на виявлення глибинних деструктивних програм таформування запитів.',
  'Безпосередньо виконання практики стояння на цвяхах, яка  є частиною наших занять. <br/> <br/> *Кожна практика має свою унікальну тематику.',
];

const NailingPage = () => {
  const { column1, column2 } = getNailingQuestions();
  return (
    <>
      <OfflineMeetingsHero
        title={'Про цвяхостояння'}
        img={'/assets/images/Sergiy_with_nails.webp'}
        imgDesk={'/assets/images/Sergiy_with_nails_desk.webp'}
        text={text}
      />
      <HowIsGoingNailing />
      <AboutPractice
        practiceSteps={practiceSteps}
        showResult={true}
        title={'Практика складається з 2 блоків:'}
      />
      <Feedbacks feedbacks={getNailingFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </>
  );
};

export default NailingPage;
