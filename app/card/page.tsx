"use client";

// import { useSearchParams } from "next/navigation";
import SectionFirts from "./section-firts";
import FivePage from "./section-five";
import SectionFour from "./section-four";
import SectionThree from "./section-three";
import SectionTwo from "./section-two";

export default function Page() {
  //   const name = useSearchParams().get("name");

  return (
    <div className="h-dvh w-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-no-repeat bg-center brightness-50 top-0"></div>
      <div className="h-full relative z-10 overflow-y-auto scrollbar-hide">
        <SectionFirts />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <FivePage />
      </div>
    </div>
  );
}
