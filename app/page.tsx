import Image from "next/image";
import Hero from "./Components/hero";
import Features from "./Components/functions";
import { MarqueeDemo } from "./Components/marquee";
import Automatisering from "./Components/automation";
import AboutXcruiter from "./Components/about";
import FAQ from "./Components/FAQ";
import SectionOne from "./Components/recruit";
import SectionTwo from "./Components/section2";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarqueeDemo />
      <Features />
      <Automatisering />
      <FAQ />
      <AboutXcruiter />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
