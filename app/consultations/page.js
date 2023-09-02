import Hero from "@components/Services/Hero/Hero";

const links = [{ href: "/consultations", name: "Консультація з матриці долі" }];

export default function Consultations() {
  return (
    <main>
      <Hero
        linkNames={links}
        title="ТЕРАПЕВТИЧНІ 
СЕСІЇ З СЕРГІЄМ
СКЛЯРЕНКО "
        img={{
          img: "/assets/images/consultationsHero.webp",
          alt: "Фото Сергія",
        }}
      />
    </main>
  );
}
