import QuestionAnswer from '@/components/Common/QuestionAnswer/QuestionAnswer';
import Feedback from '@/components/Main/Feedback/Feedback';
import Feedbacks from '@/components/Services/Feedbacks/Feedbacks';
import OfflineMeetingsHero from '@/components/Services/Offline-meetings/Hero/Hero';
import SpeechesExamples from '@/components/Services/Offline-meetings/SpeechesExamples/SpeechesExamples';

import getPublicSpeechesFeedbacks from '@/helper/publicSpeechesFeedbacks';
import getPublickSpeechesQuestions from '@/helper/publickSpeechesQuestions';

const text = {
  uk: [
    'Публічні виступи є рідкісною можливістю запросити мене в будь-яке місце, будь то місто чи країна, для проведення лекції на вибір, на тему, яка зацікавить вашу аудиторію.',
    'Це унікальна нагода зібратися разом зі спільнотою однодумців на чолі зі мною, як наставником, та отримати мудрість, практичний досвід та відповіді на питання, які турбують. Ви матимете змогу отримати неабиякий енергетичний заряд та поштовх до змін на краще.',
    'Важливо зауважити, що публічні виступи можуть бути організовані й в онлайн-форматі, розширюючи можливості участі та зручності для усіх охочих.',
  ],
  ru: [
    'Публичные выступления являются редкой возможностью пригласить меня в любое место, будь то город или страна, для проведения лекции на выбор, на тему, которая заинтересует вашу аудиторию.',
    'Это уникальная возможность собраться в кругу единомышленников во главе со мной, как наставником. Получить мудрость, практический опыт и ответы на вопросы, которые беспокоят, большой энергетический заряд и толчок к изменениям к лучшему.',
    'Важно заметить, что публичные выступления могут быть организованы и в онлайн-формате, расширяя возможности участия и удобства для всех желающих.',
  ],
};
const PublicSpeeches = () => {
  const { column1, column2 } = getPublickSpeechesQuestions();
  return (
    <>
      <OfflineMeetingsHero
        title={{ uk: 'Про публічні виступи', ru: 'О публичных выступлениях' }}
        img={'/assets/images/public_speech.webp'}
        imgDesk={'/assets/images/public_speech_desc.webp'}
        text={text}
      />
      <SpeechesExamples />
      <Feedbacks feedbacks={getPublicSpeechesFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </>
  );
};

export default PublicSpeeches;
