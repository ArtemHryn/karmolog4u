import ServicesForYouIf from "@components/Services/ServicesForYouIf/ServicesForYouIf";
import Hero from "@components/Services/Hero/Hero";
import AboutConsultations from "@components/Services/AboutConsultations/AboutConsultations";
import ConsultationsTariff from "@components/Services/ConsultationsTariff/ConsultationsTariff";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";

import reasons from "@helper/consultationReasonList";
import getConsultationsFeedbacksList from "@helper/ConsultationsFeedbacksList";
import { questions } from "@helper/consultationsQuestions";
import Feedback from "@components/Main/Feedback/Feedback";

const links = [{ href: "/consultations", name: "Консультація з матриці долі" }];

export default function Consultations() {
  const { column1, column2 } = questions();
  return (
    <main>
      <Hero
        linkNames={links}
        title="КОНСУЛЬТАЦІЇ З МАТРИЦІ ДОЛІ"
        img={{
          img: "/assets/images/consultationsHero.webp",
          alt: "Фото Сергія",
        }}
      />
      <ServicesForYouIf
        title="Консультації з матриці долі для тебе, якщо:"
        listOfReasons={reasons}
      />
      <AboutConsultations />
      <ConsultationsTariff />
      <Feedbacks feedbacks={getConsultationsFeedbacksList()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </main>
  );
}
