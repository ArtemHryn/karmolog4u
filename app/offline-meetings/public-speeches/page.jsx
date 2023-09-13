import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import Feedback from "@components/Main/Feedback/Feedback";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import AboutPublicSpeeches from "@components/Services/Offline-meetings/AboutPublicSpeeches/AboutPublicSpeeches";
import SpeechesExamples from "@components/Services/Offline-meetings/SpeechesExamples/SpeechesExamples";

import getPublicSpeechesFeedbacks from "@helper/publicSpeechesFeedbacks";
import getPublickSpeechesQuestions from "@helper/publickSpeechesQuestions";

const PublicSpeeches = () => {
  const { column1, column2 } = getPublickSpeechesQuestions();
  return (
    <>
      <AboutPublicSpeeches />
      <SpeechesExamples />
      <Feedbacks feedbacks={getPublicSpeechesFeedbacks()} />
      <QuestionAnswer column1={column1} column2={column2} />
      <Feedback />
    </>
  );
};

export default PublicSpeeches;
