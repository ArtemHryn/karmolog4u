"use client";

import { useEffect, useState } from "react";

import Container from "@components/Common/Container/Container";
import CoursesCheckboxes from "@components/Products/Courses/CoursesCheckboxes";
import CoursesList from "@components/Products/Courses/CoursesList";

const CoursesPage = () => {
  const [showWebinars, setShowWebinars] = useState(false);
  const [showIntensives, setShowIntensives] = useState(false);
  const [showEthers, setShowEthers] = useState(false);

  useEffect(() => {
    setShowWebinars(() => {
      return JSON.parse(window.localStorage.getItem("showWebinars")) ?? true;
    });
    setShowIntensives(() => {
      return JSON.parse(window.localStorage.getItem("showIntensives")) ?? false;
    });
    setShowEthers(() => {
      return JSON.parse(window.localStorage.getItem("showEthers")) ?? false;
    });
  }, []);

  return (
    <Container>
      <CoursesCheckboxes
        showWebinars={showWebinars}
        setShowWebinars={setShowWebinars}
        showIntensives={showIntensives}
        setShowIntensives={setShowIntensives}
        showEthers={showEthers}
        setShowEthers={setShowEthers}
      />
      <CoursesList
        showWebinars={showWebinars}
        showIntensives={showIntensives}
        showEthers={showEthers}
      />
    </Container>
  );
};

export default CoursesPage;
