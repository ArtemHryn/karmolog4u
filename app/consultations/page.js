import Comments from "@components/Common/Icons/ConsultationsIcons/Comments";
import SadSmile from "@components/Common/Icons/ConsultationsIcons/SadSmile";
import ServicesForYouIf from "@components/Common/ServicesForYouIf/ServicesForYouIf";
import Hero from "@components/Services/Hero/Hero";
import reasons from "@helper/consultationReasonList";

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
    </main>
  );
}
