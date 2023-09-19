import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import Feedback from "@components/Main/Feedback/Feedback";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import AboutPractice from "@components/Services/Offline-meetings/AboutPractice/AboutPractice";
import AboutRetreat from "@components/Services/Offline-meetings/AboutRetreat/AboutRetreat";
import OfflineMeetingsHero from "@components/Services/Offline-meetings/Hero/Hero";
import getRetreatFeedbacks from "@helper/retreatFeedbacks";
import getRetreatQuestions from "@helper/retreatQuestions";

const text = [
  "Занурення в цілодобовий трансформаційний процес протягом 4−5 днів разом зі мною. Під час ретриту ви проходите марафон духовних, психотерапевтичних, гіпнотичних, арт-терапевтичних та магічних практик, що виконуються лише у супроводі майстра.",
  "Ретрит — це не подорож, а серйозна робота над тим, щоб вийти на новий рівень самоусвідомлення!",
  "*Перед початком ретриту кожен учасник підписує договір про нерозголошення інформації, яку він отримав про інших учасників під час ретриту",
];

const howToGet = [
  "Ви обираєте послугу на сайті та вносите платіж. Протягом 24 годин з вами зв'язується менеджер для з'ясування необхідної інформації.",
  "За декілька днів до заходу менеджер надішле вам інформацію щодо підготовки до ретриту",
];

const Retreat = () => {
  const { column1, column2 } = getRetreatQuestions();

  return (
    <>
      <OfflineMeetingsHero
        title={"Про ретрит"}
        img={"/assets/images/Sergiy_on_retreat.webp"}
        text={text}
      />
      <AboutRetreat />
      <AboutPractice
        practiceSteps={howToGet}
        showResult={false}
        title={"Як потрапити на ретрит?"}
      />

      <Feedbacks feedbacks={getRetreatFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </>
  );
};

export default Retreat;
