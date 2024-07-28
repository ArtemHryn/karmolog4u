import QuestionAnswer from '@components/Common/QuestionAnswer/QuestionAnswer';
import Feedback from '@components/Main/Feedback/Feedback';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import OfflineMeetingsHero from '@components/Services/Offline-meetings/Hero/Hero';
import SpeechesExamples from '@components/Services/Offline-meetings/SpeechesExamples/SpeechesExamples';

import getPublicSpeechesFeedbacks from '@helper/publicSpeechesFeedbacks';
import getPublickSpeechesQuestions from '@helper/publickSpeechesQuestions';

const text = [
  'Публічні виступи є рідкісною можливістю запросити мене в будь-яке місце, будь то місто чи країна, для проведення лекції на вибір, на тему, яка зацікавить вашу аудиторію.',
  'Це унікальна нагода зібратися разом зі спільнотою однодумців на чолі зі мною, як наставником, та отримати мудрість, практичний досвід та відповіді на питання, які турбують. Ви матимете змогу отримати неабиякий енергетичний заряд та поштовх до змін на краще.',
  'Важливо зауважити, що публічні виступи можуть бути організовані й в онлайн-форматі, розширюючи можливості участі та зручності для усіх охочих.',
];
const PublicSpeeches = () => {
  const { column1, column2 } = getPublickSpeechesQuestions();
  return (
    <>
      <OfflineMeetingsHero
        title={'Про публічні виступи'}
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
