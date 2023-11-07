import AboutAssociation from "@components/HumanPsychology/AboutAssociation/AboutAssociation";
import Hero from "@components/HumanPsychology/Hero/Hero";

const links = [
  { name: 'Асоціація "Кармотерапії та психології"', href: "/association" },
];

const AssociationPage = () => {
  return (
    <>
      <Hero links={links} title={"АСОЦІАЦІЯ “КАРМОТЕРАПІЇ ТА ПСИХОЛОГІЇ”"} />
      <AboutAssociation />
    </>
  );
};

export default AssociationPage;
