import Header from "./components/Header";
import Hero from "./components/Hero";
import AgentCarousel from "./components/AgentCarousel"
import Industries from "./components/Industries";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AgentCarousel />
      <Process/>
      <Industries/>
      <Contact/>
    </>
  );
}


