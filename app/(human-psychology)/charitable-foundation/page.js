import AboutFoundation from "@components/HumanPsychology/AboutFoundation/AboutFoundation";
import Hero from "@components/HumanPsychology/Hero/Hero";

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
      <AboutFoundation/>
    </>
  );
};

export default CharitableFoundationPage;
