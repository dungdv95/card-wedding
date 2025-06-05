"use client";

import { Button } from "@/components/ui/button";
// import { useSearchParams } from "next/navigation";
import SectionFirts from "./section-firts";
import FivePage from "./section-five";
import SectionFour from "./section-four";
import SectionThree from "./section-three";
import SectionTwo from "./section-two";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [isTop, setIsTop] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  //   const name = useSearchParams().get("name");

  const handleClickScroll = () => {
    if (scrollRef.current) {
      if (isTop) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const div = scrollRef.current;
      if (!div) return;

      const { scrollTop, scrollHeight, clientHeight } = div;

      if (Math.abs(scrollTop + clientHeight - scrollHeight) < 1) {
        setIsTop(false);
      }
      if (scrollTop === 0) {
        setIsTop(true);
      }
    };

    const div = scrollRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-dvh w-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-no-repeat bg-center brightness-50 top-0"></div>
      <div
        ref={scrollRef}
        className="h-full relative z-10 overflow-y-auto scrollbar-hide"
      >
        <SectionFirts />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <FivePage />
        <div className="fixed bottom-3 right-5">
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer size-8 rounded-full bg-green-600 border-green-600 hover:bg-green-600/80 text-white hover:text-white"
            onClick={handleClickScroll}
          >
            {isTop ? <ArrowDown /> : <ArrowUp />}
          </Button>
        </div>
      </div>
    </div>
  );
}
