// import styled from "./page.module.scss";

import Hero from "@/components/Hero/Hero";
import About from "@components/About/About";

export const metadata = {
  title: "Test Title",
  description: "Test descr",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
