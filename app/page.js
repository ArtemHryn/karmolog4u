// import styled from "./page.module.scss";

import Hero from "@/components/Hero/Hero";
import About from "@components/About/About";
import AboutPeopleOnTheWay from "@components/AboutPeopleOnTheWay/AboutPeopleOnTheWay";
import CoAuThorship from "@components/CoAuThorship/CoAuThorship";
import Feedback from "@components/Feedback/Feedback";
import MyDream from "@components/MyDream/MyDream";
import QuestionAnswer from "@components/QuestionAnswer/QuestionAnswer";
import Research from "@components/Research/Research";
import StarCustomers from "@components/StarCustomers/StarCustomers";

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
      <CoAuThorship />
      <StarCustomers/>
      <QuestionAnswer />
      <Feedback/>
    </main>
  );
}
