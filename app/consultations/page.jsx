import ServicesForYouIf from "@components/Services/ServicesForYouIf/ServicesForYouIf";
import Hero from "@components/Services/Hero/Hero";
import reasons from "@helper/consultationReasonList";
import AboutConsultations from "@components/Services/AboutConsultations/AboutConsultations";

const links = [{ href: "/consultations", name: "Консультація з матриці долі" }];

export default function Consultations() {
  return (
    <main>
      <Hero
        linkNames={links}
        title="КОНСУЛЬТАЦІЇ З МАТРИЦІ ДОЛІ"
        img={{
          img: "/assets/images/consultationsHero.webp",
          alt: "Фото Сергія",
        }}
      />
      <ServicesForYouIf
        title="Консультації з матриці долі для тебе, якщо:"
        listOfReasons={reasons}
      />
      <AboutConsultations />
    </main>
  );
}
