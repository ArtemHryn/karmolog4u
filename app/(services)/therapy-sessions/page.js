import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import Feedback from '@components/Main/Feedback/Feedback';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import Hero from '@components/Services/Hero/Hero';
import ServicesForYouIf from '@components/Services/ServicesForYouIf/ServicesForYouIf';
import Facts from '@components/TherapySessions/Facts/Facts';
import IndividualSessions from '@components/TherapySessions/IndividualSessions/IndividualSessions';
import PairedSessions from '@components/TherapySessions/PairedSessions/PairedSessions';
import Pricing from '@components/TherapySessions/Pricing/Pricing';
import SessionInsights from '@components/TherapySessions/SessionInsights/SessionInsights';
import { individualPricing } from '@helper/individualTherapyPricing';
import { pairedPricing } from '@helper/pairedTherapyPricing';
import therapyFeedbacks from '@helper/therapyFeedbacks';
import { column1, column2 } from '@helper/therapySessionsQA';
import therapyReasons from '@helper/therayReasonList';

const links = [{ href: '/therapy-sessions', name: 'Терапевтичні сесії' }];

function TherapySessions() {
  return (
    <main>
      <Hero
        linkNames={links}
        title="ТЕРАПЕВТИЧНІ СЕСІЇ З СЕРГІЄМ СКЛЯРЕНКО"
        img={{
          img: '/assets/images/therapySessions/Hero.webp',
          imgDesk: '/assets/images/therapySessions/Hero-desk.webp',
          alt: 'Фото Сергія',
        }}
      />
      <ServicesForYouIf
        title="Ці сесії створені саме для вас, якщо ви:"
        listOfReasons={therapyReasons}
      />
      <SessionInsights />
      <Facts />
      <IndividualSessions />
      <Pricing content={individualPricing} accTitle={'індивідуальних терапевтичних сесій'} />
      <PairedSessions />
      <Pricing content={pairedPricing} accTitle={'парних терапевтичних сесій'} />
      <Feedbacks feedbacks={therapyFeedbacks} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </main>
  );
}

export default TherapySessions;
