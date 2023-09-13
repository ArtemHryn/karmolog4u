import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import Feedback from "@components/Main/Feedback/Feedback";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import AboutPractice from "@components/Services/Offline-meetings/AboutPractice/AboutPractice";
import OfflineMeetingsHero from "@components/Services/Offline-meetings/Hero/Hero";
import HowIsGoingNailing from "@components/Services/Offline-meetings/HowIsGoingNailing/HowIsGoingNailing";

import getNailingFeedbacks from "@helper/nailingFeedbacks";
import getNailingQuestions from "@helper/nailingQuestions";

const text = [
  "Глибинна психотерапевтична робота з розблокуванням свідомих та підсвідомих процесів для розбору запиту кожного учасника. Авторська методика Сергія Скляренка дозволяє запустити процес синтезу деструктивної програми в свідомості кожного учасника, завдяки чому трансформація відбувається з гарантованою ефективністю.",
];

const practiceSteps = [
  "Проводиться психологічна робота з виявлення глибинних деструктивних програм, формування запиту в особистій коуч-сесії з Сергієм Скляренком.",
  "Практика стояння на цвяхах. <br/> <br/> *Тема кожної практики різна.",
];

const NailingPage = () => {
  const { column1, column2 } = getNailingQuestions();
  return (
    <>
      <OfflineMeetingsHero
        title={"Про цвяхостояння"}
        img={"/assets/images/Sergiy_with_nails.webp"}
        text={text}
      />
      <HowIsGoingNailing />
      <AboutPractice
        practiceSteps={practiceSteps}
        showResult={true}
        title={"Практика складається з 2 блоків:"}
      />
      <Feedbacks feedbacks={getNailingFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </>
  );
};

export default NailingPage;
