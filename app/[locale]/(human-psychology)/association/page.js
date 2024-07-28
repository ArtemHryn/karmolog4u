import AboutAssociation from "@components/HumanPsychology/AboutAssociation/AboutAssociation";
import Hero from "@components/HumanPsychology/Hero/Hero";
import MissionAssociation from "@components/HumanPsychology/MissionAssociation/MissionAssociation";
import SendAppToAssociation from "@components/HumanPsychology/SendAppToAssociation/SendAppToAssociation";
import TasksAssociation from "@components/HumanPsychology/TasksAssociation/TasksAssociation";
import Feedback from "@components/Main/Feedback/Feedback";

const links = [
  { name: 'Асоціація "Кармотерапії та психології"', href: "/association" },
];

const AssociationPage = () => {
  return (
    <>
      <Hero links={links} title={"АСОЦІАЦІЯ “КАРМОТЕРАПІЇ ТА ПСИХОЛОГІЇ”"} />
      <AboutAssociation />
      <MissionAssociation />
      <TasksAssociation />
      <SendAppToAssociation />
      <Feedback />
    </>
  );
};

export default AssociationPage;
