import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const listVideo = [
  "https://www.youtube.com/embed/RmGpAZLAcsA",
  "https://www.youtube.com/embed/7sACabGJ6qk",
  "https://www.youtube.com/embed/zQWaMYTQTCw",
  "https://www.youtube.com/embed/iD8HrsFpkdk",
];

export default function SectionTwo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Lắng nghe sự kiện "select" để cập nhật slide hiện tại
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Lắng nghe sự kiện "reInit" trong trường hợp carousel được khởi tạo lại (ví dụ: thay đổi kích thước)
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="container mx-auto px-20 max-md:px-2 py-10">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index}>
                <iframe
                  className="aspect-video w-full"
                  src={listVideo[index]}
                ></iframe>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant={"destructive"}
              className={cn(
                "h-6 w-6 text-xs rounded-full p-0",
                index === current - 1 ? "bg-[#005FEB]" : "bg-[#A7ABC3]"
              )}
              onClick={() => api?.scrollTo(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </motion.div>
      {/* <div className="w-full h-[350px]">
        <iframe
          src="https://drive.google.com/file/d/1bR8AuhvaU3iHGKOse5uZMeM7C9E96IL1/preview"
          className="w-full h-full"
        ></iframe>
      </div> */}

      <div className="mt-10 flex gap-12 max-md:flex-col">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            alt=""
            src="/images/4.jpeg"
            width={500}
            height={600}
            className="rounded-md"
          />
          <Image
            alt=""
            src="/images/belive.jpeg"
            width={300}
            height={600}
            className="absolute rounded-md bottom-[-20px] right-[-250px] max-lg:w-[190px] max-lg:right-[-150px] max-md:right-4 max-md:bottom-[-40px]"
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.span
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-[#ffe5ba] text-3xl font-bold"
          >
            You Had Me At Hello!
          </motion.span>

          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-24"
          >
            <Separator className="my-0 bg-[#ffe5ba] !h-0.5" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-white text-base max-w-[350px]"
          >{`"Trong tất cả các chiến dịch marketing anh đã triển khai, cưới được
            em là chiến dịch thành công nhất"`}</motion.span>

          <motion.span
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-white text-base max-w-[350px]"
          >{`"Em hiểu "hôn nhân" là hành trình đầy bug, em nguyện cùng anh log & fix mỗi ngày"`}</motion.span>
        </div>
      </div>
    </section>
  );
}
