import QuestionAnswer from '@/components/Common/QuestionAnswer/QuestionAnswer';
import Feedback from '@/components/Main/Feedback/Feedback';
import Feedbacks from '@/components/Services/Feedbacks/Feedbacks';
import AboutPractice from '@/components/Services/Offline-meetings/AboutPractice/AboutPractice';
import AboutRetreat from '@/components/Services/Offline-meetings/AboutRetreat/AboutRetreat';
import OfflineMeetingsHero from '@/components/Services/Offline-meetings/Hero/Hero';
import getRetreatFeedbacks from '@/helper/retreatFeedbacks';
import getRetreatQuestions from '@/helper/retreatQuestions';

const text = {
  uk: [
    'Як на рахунок народження нового себе?',
    'Ретрит – це занурення в цілодобовий трансформаційний процес протягом 4−5 днів разом зі мною. Під час ретриту ви проходите марафон духовних, психотерапевтичних, гіпнотичних, арттерапевтичних та магічних практик, які виконуються лише у супроводі майстра.',
    'Ретрит — це не відпустка, а серйозна робота над тим, щоб вийти на новий рівень самоусвідомлення!',
    '*Конфіденційність гарантована — перед початком ретриту кожен підписує договір про нерозголошення інформації, яку він отримає про інших учасників під час ретриту.',
  ],
  ru: [
    'Как насчет рождения нового себя?',
    'Ретрит — это погружение в круглосуточный трансформационный процесс - 4-5 дней вместе со мной. Во время ретрита вы проходите марафон духовных, психотерапевтических, гипнотических, арт-терапевтических и магических практик, которые выполняются только в сопровождении мастера.',
    'Ретрит — это не отпуск, а серьезная работа над тем, чтобы выйти на новый уровень самосознания!',
    '*Конфиденциальность гарантирована — перед началом ретрита каждый подписывает договор о неразглашении информации, которую он получит о других участниках во время ретрита.',
  ],
};
const howToGet = {
  uk: [
    "Вирішіть, що ви хочете і готові. Оберіть цю послугу на сайті та здійсніть оплату. Зачекайте — протягом 24 годин з вами зв'яжеться менеджер для з'ясування необхідної інформації.",
    'За декілька днів до заходу менеджер надішле вам детальну інформацію щодо підготовки до ретриту.',
  ],
  ru: [
    'Решите, что вы хотите и готовы. Выберите эту услугу на сайте и внесите оплату. Подождите - в течение 24 часов с вами свяжется менеджер для выяснения необходимой информации.',
    'За несколько дней до мероприятия менеджер пришлет вам подробную информацию по подготовке к ретриту.',
  ],
};

const Retreat = () => {
  const { column1, column2 } = getRetreatQuestions();

  return (
    <>
      <OfflineMeetingsHero
        title={{ uk: 'Про ретрит', ru: 'О ретрите' }}
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
