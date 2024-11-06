import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import Feedback from '@components/Main/Feedback/Feedback';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import AboutPractice from '@components/Services/Offline-meetings/AboutPractice/AboutPractice';
import OfflineMeetingsHero from '@components/Services/Offline-meetings/Hero/Hero';
import HowIsGoingNailing from '@components/Services/Offline-meetings/HowIsGoingNailing/HowIsGoingNailing';

import getNailingFeedbacks from '@helper/nailingFeedbacks';
import getNailingQuestions from '@helper/nailingQuestions';

const text = {
  uk: [
    'Про те, як пов’язано наше фізичне тіло з внутрішніми процесами, знають майже всі, а от те, що через тіло можна пропрацювати та достати  навіть підсвідоме — лише невелика кількість людей.',
    'Цвяхостояння – це глибинна психотерапевтична робота з розблокуванням свідомих та підсвідомих процесів задля розбору кожного окремого запиту.',
    'Авторська методика Сергія Скляренко дозволяє запустити процес синтезу деструктивної програми у свідомості кожного учасника, завдяки чому трансформація відбувається з гарантованою ефективністю.',
    '<b>Цей метод лякає або викликає сумніви?<br/> Спробуйте та переконайтесь у його  результативності!</b>',
  ],
  ru: [
    'О том, как связано наше физическое тело с внутренними процессами, знают почти все, а вот, что через тело можно проработать и достать даже подсознательное — только небольшое количество людей.',
    ' Гвоздестояние — это глубинная психотерапевтическая работа с разблокировкой сознательных и подсознательных процессов для разбора каждого отдельного запроса.',
    'Авторская методика Сергея Скляренко позволяет запустить процесс синтеза деструктивной программы в сознании каждого участника, благодаря чему трансформация происходит с гарантированной эффективностью.',
    '<b>Этот метод пугает или вызывает сомнения? <br/>Попробуйте и убедитесь в его результативности!</b/>',
  ],
};

const practiceSteps = {
  uk: [
    'Першочергово, під час особистої коуч-сесії зі мною, здійснюється психологічна робота, спрямована на виявлення глибинних деструктивних програм та формування запитів.',
    'Безпосередньо виконання практики стояння на цвяхах, яка  є частиною наших занять. <br/> <br/> *Кожна практика має свою унікальну тематику.',
  ],
  ru: [
    'Первоначально, во время личной коуч-сессии со мной, осуществляется психологическая работа, направленная на выявление глубинных деструктивных программ и формирование запросов.',
    'Непосредственно выполнение практики стояния на гвоздях, которая является частью наших занятий. <br/> <br/> *Каждая практика имеет свою уникальную тематику.',
  ],
};

const NailingPage = () => {
  const { column1, column2 } = getNailingQuestions();
  return (
    <>
      <OfflineMeetingsHero
        title={{ uk: 'Про цвяхостояння', ru: 'О гвоздестоянии' }}
        img={'/assets/images/Sergiy_with_nails.webp'}
        imgDesk={'/assets/images/Sergiy_with_nails_desk.webp'}
        text={text}
      />
      <HowIsGoingNailing />
      <AboutPractice
        practiceSteps={practiceSteps}
        showResult={true}
        title={{ uk: 'Практика складається з 2 блоків:', ru: 'Практика состоит из 2 блоков:' }}
      />
      <Feedbacks feedbacks={getNailingFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </>
  );
};

export default NailingPage;
