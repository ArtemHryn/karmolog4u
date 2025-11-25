import AboutAssociation from '@/components/HumanPsychology/AboutAssociation/AboutAssociation';
import Hero from '@/components/HumanPsychology/Hero/Hero';
import MissionAssociation from '@/components/HumanPsychology/MissionAssociation/MissionAssociation';
import SendAppToAssociation from '@/components/HumanPsychology/SendAppToAssociation/SendAppToAssociation';
import TasksAssociation from '@/components/HumanPsychology/TasksAssociation/TasksAssociation';
import Feedback from '@/components/Main/Feedback/Feedback';

const links = [
  {
    name: {
      uk: 'Асоціація "Кармотерапії та психології"',
      ru: 'Ассоциация "Кармотерапии и психологии"',
    },
    href: '/association',
  },
];

const AssociationPage = () => {
  return (
    <>
      <Hero
        links={links}
        title={{
          uk: 'АСОЦІАЦІЯ "КАРМОТЕРАПІЇ ТА ПСИХОЛОГІЇ"',
          ru: 'АССОЦИАЦИЯ <br />"КАРМОТЕРАПИИ И ПСИХОЛОГИИ"',
        }}
      />
      <AboutAssociation />
      <MissionAssociation />
      <TasksAssociation />
      <SendAppToAssociation />
      <Feedback />
    </>
  );
};

export default AssociationPage;
