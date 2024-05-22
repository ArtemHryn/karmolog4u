import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import Feedback from '@components/Main/Feedback/Feedback';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import AboutPractice from '@components/Services/Offline-meetings/AboutPractice/AboutPractice';
import AboutRetreat from '@components/Services/Offline-meetings/AboutRetreat/AboutRetreat';
import OfflineMeetingsHero from '@components/Services/Offline-meetings/Hero/Hero';
import getRetreatFeedbacks from '@helper/retreatFeedbacks';
import getRetreatQuestions from '@helper/retreatQuestions';

const text = [
  'Як на рахунок народження нового себе?',
  'Ретрит – це занурення в цілодобовий трансформаційний процес протягом 4−5 днів разом зі мною. Під час ретриту ви проходите марафон духовних, психотерапевтичних, гіпнотичних, арттерапевтичних та магічних практик, які виконуються лише у супроводі майстра.',
  'Ретрит — це не відпустка, а серйозна робота над тим, щоб вийти на новий рівень самоусвідомлення!',
  '*Конфіденційність гарантована — перед початком ретриту кожен підписує договір про нерозголошення інформації, яку він отримає про інших учасників під час ретриту.',
];
const howToGet = [
  "Вирішіть, що ви хочете і готові. Оберіть цю послугу на сайті та здійсніть оплату. Зачекайте — протягом 24 годин з вами зв'яжеться менеджер для з'ясування необхідної інформації.",
  'За декілька днів до заходу менеджер надішле вам детальну інформацію щодо підготовки до ретриту.',
];

const Retreat = () => {
  const { column1, column2 } = getRetreatQuestions();

  return (
    <>
      <OfflineMeetingsHero
        title={'Про ретрит'}
        img={'/assets/images/Sergiy_on_retreat.webp'}
        imgDesk={'/assets/images/Sergiy_on_retreat_desk.webp'}
        text={text}
      />
      <AboutRetreat />
      <AboutPractice
        practiceSteps={howToGet}
        showResult={false}
        title={'Як потрапити на ретрит?'}
      />

      <Feedbacks feedbacks={getRetreatFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </>
  );
};

export default Retreat;
