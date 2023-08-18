// import styled from "./page.module.scss";

import Hero from "@/components/Hero/Hero";
import About from "@components/About/About";
import AboutPeopleOnTheWay from "@components/AboutPeopleOnTheWay/AboutPeopleOnTheWay";
import MyDream from "@components/MyDream/MyDream";
import Research from "@components/Research/Research";

export const metadata = {
  title: "Test Title",
  description: "Test descr",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MyDream />
      <AboutPeopleOnTheWay />
      <Research />
    </main>
  );
}
