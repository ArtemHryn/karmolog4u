import ServicesForYouIf from '@/components/Services/ServicesForYouIf/ServicesForYouIf';
import Hero from '@/components/Services/Hero/Hero';
import AboutConsultations from '@/components/Services/AboutConsultations/AboutConsultations';
import ConsultationsTariff from '@/components/Services/ConsultationsTariff/ConsultationsTariff';
import Feedbacks from '@/components/Services/Feedbacks/Feedbacks';
import QuestionAnswer from '@/components/Common/QuestionAnswer/QuestionAnswer';

import reasons from '@/helper/consultationReasonList';
import getConsultationsFeedbacksList from '@/helper/ConsultationsFeedbacksList';
import { questions } from '@/helper/consultationsQuestions';
import Feedback from '@/components/Main/Feedback/Feedback';
import HowIsConsultationGoing from '@/components/Services/HowIsConsultationGoing/HowIsConsultationGoing';

const links = [
  {
    href: '/consultations',
    name: { uk: 'Консультація з матриці долі', ru: 'Консультация по матрице судьбы' },
  },
];

export default function Consultations() {
  const { column1, column2 } = questions();
  return (
    <main>
      <Hero
        linkNames={links}
        title={{ uk: 'КОНСУЛЬТАЦІЇ З МАТРИЦІ ДОЛІ', ru: 'КОНСУЛЬТАЦИИ ПО МАТРИЦЕ СУДЬБЫ' }}
        img={{
          img: '/assets/images/consultationsHero.webp',
          alt: 'Фото Сергія',
        }}
      />
      <ServicesForYouIf
        title={{
          uk: 'Консультації з Матриці долі допоможуть у таких випадках:',
          ru: 'Консультации по Матрице судьбы помогут, если:',
        }}
        listOfReasons={reasons}
      />
      <AboutConsultations />
      <HowIsConsultationGoing />
      <ConsultationsTariff />
      <Feedbacks feedbacks={getConsultationsFeedbacksList()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </main>
  );
}
