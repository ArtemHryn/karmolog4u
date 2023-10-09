"use client";
import Container from "@components/Common/Container/Container";
import AboutArcanes from "@components/Products/Meditations/AboutArcanes";
import MeditationsCheckBoxes from "@components/Products/Meditations/MeditationsCheckBoxes";
import MeditationsList from "@components/Products/Meditations/MeditationsList";
import { useEffect, useState } from "react";

const MeditationsPage = () => {
  const [energies, setEnergies] = useState(false);
  const [showOpenedMeditation, setShowOpenedMeditation] = useState(false);
  const [showClosedMeditation, setShowClosedMeditation] = useState(false);

  useEffect(() => {
    setEnergies(() => {
      return JSON.parse(window.localStorage.getItem("energies")) ?? false;
    });
    setShowOpenedMeditation(() => {
      return (
        JSON.parse(window.localStorage.getItem("showOpenedMeditation")) ?? false
      );
    });
    setShowClosedMeditation(() => {
      return (
        JSON.parse(window.localStorage.getItem("showClosedMeditation")) ?? false
      );
    });
  }, []);
  return (
    <Container>
      <MeditationsCheckBoxes
        setShowClosedMeditation={setShowClosedMeditation}
        setShowOpenedMeditation={setShowOpenedMeditation}
        setEnergies={setEnergies}
        energies={energies}
        showOpenedMeditation={showOpenedMeditation}
        showClosedMeditation={showClosedMeditation}
      />
      {energies && <AboutArcanes />}
      <MeditationsList
        energies={energies}
        showOpenedMeditation={showOpenedMeditation}
        showClosedMeditation={showClosedMeditation}
      />
    </Container>
  );
};

export default MeditationsPage;
