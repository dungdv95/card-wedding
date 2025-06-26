"use client";

import { Button } from "@/components/ui/button";
// import { useSearchParams } from "next/navigation";
import SectionFirts from "./section-firts";
import FivePage from "./section-five";
import SectionFour from "./section-four";
import SectionThree from "./section-three";
import SectionTwo from "./section-two";
import { ArrowDown, ArrowUp, Heart, Mail, QrCode } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AudioPage from "./audio-page";

export default function Page() {
  const [isTop, setIsTop] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  //   const name = useSearchParams().get("name");
  const [openQr, setOpenQr] = useState(false);

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

  const handleOpenMess = () => {
    const fbMessengerUrl = "fb-messenger://user-thread/100074760610847"; // hoặc page ID
    window.location.href = fbMessengerUrl;
  };

  return (
    <>
      <AudioPage />
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
          <div className="fixed bottom-3 left-5">
            <div className="flex gap-3 items-center">
              <Button
                variant="outline"
                size="icon"
                className="opacity-80 cursor-pointer size-8 rounded-full bg-pink-600 border-pink-600 hover:bg-pink-600/80 text-white hover:text-white"
                onClick={handleOpenMess}
              >
                <Mail />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="opacity-80 cursor-pointer size-8 rounded-full bg-blue-600 border-blue-600 hover:bg-blue-600/80 text-white hover:text-white"
                onClick={() => setOpenQr(true)}
              >
                <QrCode />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openQr} onOpenChange={setOpenQr}>
        <DialogContent className="gap-0">
          <DialogHeader className="hidden">
            <DialogTitle></DialogTitle>
            <DialogDescription className="flex flex-col gap-0.5"></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-center gap-0.5">
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
                <Heart className="size-3 fill-pink-600 stroke-pink-600" />
              </div>
              <span className="italic text-sm text-pink-600 text-center">
                Mọi lời chúc và sự yêu thương cùng những món quà ý nghĩa từ nơi
                phương xa xin gửi về
              </span>
            </div>
            <img alt="" src="images/my-qr.jpg" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
