"use client";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@components/Common/Container/Container";
import HeroNav from "@components/Common/HeroNav/HeroNav";
import MeditationsDescriptions from "@components/Products/Meditations/MeditationDetails/MeditationsDescriptions";

import list from "@helper/products/meditationsList";
import ProductionCanBeInterestingSlider from "@components/Common/ProductionCanBeInterestingSlider/ProductionCanBeInterestingSlider";

const MeditationDetails = () => {
  const [meditation, setMeditation] = useState(null);
  const [canBeInteresting, setCanBeInteresting] = useState([]);
  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const allMeditations = [
      ...list.getClosedMeditationsList(),
      ...list.getOpenedMeditationsList(),
    ];
    const currentMeditation = allMeditations.find(
      (el) => `${el.id}` === params.id
    );
    const meditationsCanBeInteresting = allMeditations.filter(
      (el) =>
        el.category === currentMeditation.category &&
        el.id !== currentMeditation.id
    );
    setMeditation(currentMeditation);
    setCanBeInteresting(meditationsCanBeInteresting);
  }, [params.id]);

  if (!meditation) return null;

  const links = [
    { href: "/products/meditations", name: "Медитації" },
    { href: pathname, name: meditation.name },
  ];

  return (
    <Container>
      <HeroNav linkNames={links} />
      <MeditationsDescriptions meditation={meditation} />
      <ProductionCanBeInterestingSlider slides={canBeInteresting} />
    </Container>
  );
};

export default MeditationDetails;
