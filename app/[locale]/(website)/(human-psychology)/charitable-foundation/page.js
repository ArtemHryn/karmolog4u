import AboutFoundation from '@components/HumanPsychology/AboutFoundation/AboutFoundation';
import CollaborativeSuccessFoundation from '@components/HumanPsychology/CollaborativeSuccessFoundation/CollaborativeSuccessFoundation';
import DonationsFoundation from '@components/HumanPsychology/DonationsFoundation/DonationsFoundation';
import Hero from '@components/HumanPsychology/Hero/Hero';
// import MyHistoryFoundation from "@components/HumanPsychology/MyHistoryFoundation/MyHistoryFoundation";
import RecommendationFoundation from '@components/HumanPsychology/RecommendationFoundation/RecommendationFoundation';
import Feedback from '@components/Main/Feedback/Feedback';

const links = [
  {
    name: { uk: 'ГО "Психологія людської долі"', ru: 'ОО "Психология человеческой судьбы"' },
    href: '/charitable-foundation',
  },
];

const CharitableFoundationPage = () => {
  return (
    <>
      <Hero
        links={links}
        title={{ uk: 'БЛАГОДІЙНИЙ ФОНД', ru: 'БЛАГОТВОРИТЕЛЬНЫЙ ФОНД' }}
        foundation={true}
      />
      <AboutFoundation />
      <RecommendationFoundation />
      <DonationsFoundation />
      {/* <MyHistoryFoundation /> */}
      <CollaborativeSuccessFoundation />
      <Feedback />
    </>
  );
};

export default CharitableFoundationPage;
