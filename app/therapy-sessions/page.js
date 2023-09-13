import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import Feedback from "@components/Main/Feedback/Feedback";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import ServicesForYouIf from "@components/Services/ServicesForYouIf/ServicesForYouIf";
import Hero from "@components/TherapySessions/Hero/Hero";
import IndividualSessions from "@components/TherapySessions/IndividualSessions/IndividualSessions";
import SessionInsights from "@components/TherapySessions/SessionInsights/SessionInsights";

import therapyFeedbacks from "@helper/therapyFeedbacks";
import { column1, column2 } from "@helper/therapySessionsQA";
import therapyReasons from "@helper/therayReasonList";

const links = [{ href: "/therapy-sessions", name: "Терапевтичні сесії" }];

function TherapySessions() {
  return (
    <main>
      <Hero
        linkNames={links}
        title="ТЕРАПЕВТИЧНІ СЕСІЇ З СЕРГІЄМ СКЛЯРЕНКО"
        img={{
          img: "/assets/images/therapySessions/Hero.webp",
          alt: "Фото Сергія",
        }}
      />
      <ServicesForYouIf
        title="Ці сесії для тебе, якщо ти:"
        listOfReasons={therapyReasons}
      />
      <SessionInsights />
      <IndividualSessions />
      <Feedbacks feedbacks={therapyFeedbacks}/>
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </main>
  );
}

export default TherapySessions;
