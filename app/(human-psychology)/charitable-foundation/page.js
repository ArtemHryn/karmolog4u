import AboutFoundation from "@components/HumanPsychology/AboutFoundation/AboutFoundation";
import CollaborativeSuccessFoundation from "@components/HumanPsychology/CollaborativeSuccessFoundation/CollaborativeSuccessFoundation";
import DonationsFoundation from "@components/HumanPsychology/DonationsFoundation/DonationsFoundation";
import Hero from "@components/HumanPsychology/Hero/Hero";
import MyHistoryFoundation from "@components/HumanPsychology/MyHistoryFoundation/MyHistoryFoundation";
import RecommendationFoundation from "@components/HumanPsychology/RecommendationFoundation/RecommendationFoundation";
import Feedback from "@components/Main/Feedback/Feedback";

const links = [
  {
    name: "ГО “Психологія людської долі”",
    href: "/charitable-foundation",
  },
];

const CharitableFoundationPage = () => {
  return (
    <>
      <Hero links={links} title={"БЛАГОДІЙНИЙ ФОНД"} />
      <AboutFoundation />
      <MyHistoryFoundation />
      <DonationsFoundation />
      <RecommendationFoundation />
      <CollaborativeSuccessFoundation/>
      <Feedback/>
    </>
  );
};

export default CharitableFoundationPage;
