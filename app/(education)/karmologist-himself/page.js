import Hero from "@components/Services/Hero/Hero";

const links = [
  {
    href: "/karmologist-himself",
    name: "КУРС “САМ СОБІ КАРМОЛОГ”",
  },
];

const page = () => {
  return (
    <main>
      <Hero
        linkNames={links}
        title="КУРС “САМ СОБІ КАРМОЛОГ”"
        img={{
          img: "/assets/images/karmologist-himself_hero.webp",
          alt: "Фото Сергія",
        }}
      />
    </main>
  );
};

export default page;
