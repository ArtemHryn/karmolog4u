// import styled from "./page.module.scss";

import Hero from "@/components/Hero/Hero";
import About from "@components/About/About";
import MyDream from "@components/MyDream/MyDream";

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
    </main>
  );
}
