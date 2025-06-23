import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export default function SectionThree() {
  return (
    <section className="container mx-auto px-20 max-md:px-2 py-10">
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="ml-12 flex gap-4 max-md:ml-0 max-md:justify-center"
        >
          <Separator
            orientation="vertical"
            className="max-md:hidden data-[orientation=vertical]:h-9 data-[orientation=vertical]:w-1 bg-[#ffe5ba]"
          />
          <span className="text-[#ffe5ba] text-3xl font-bold font-stretch-110%">
            OUR MEMORIES
          </span>
        </motion.div>

        <div className="relative h-[650px] flex justify-between max-lg:flex-col max-md:h-[500px]">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="max-lg:absolute top-24 right-[-140px] max-md:right-0 max-md:top-14"
          >
            <Avatar className="size-[260px] max-md:size-[160px]">
              <AvatarImage
                src="/images/anhcuoi4.jpg"
                alt="a1"
                className="object-cover"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className=" mt-30 max-lg:mt-0 max-lg:flex max-lg:justify-center max-md:justify-start">
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
              <Avatar className="size-[430px] max-md:size-[280px] brightness-50 sepia-50">
                <AvatarImage
                  src="/images/anhcuoi3.jpg"
                  alt="a1"
                  className="object-cover"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="absolute left-18 bottom-9 text-white w-72 text-xs text-center font-medium max-md:text-[10px] max-md:w-56 max-md:left-7">
                {`"...Khi thịnh vượng cũng như lúc hoạn nạn, khi ốm đau cũng như
                lúc mạnh khỏe, xin hứa chung thủy, yêu thương và tôn trọng nhau
                mỗi ngày đến suốt cuộc đời..."`}
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-36 max-lg:flex-row max-lg:gap-20 max-lg:mt-6 max-md:justify-center"
          >
            <Avatar className="size-[230px]">
              <AvatarImage
                src="/images/anhcuoi5.jpg"
                alt="a1"
                className="object-cover"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar className="size-[200px] max-md:hidden">
              <AvatarImage
                src="/images/anhcuoi9.jpg"
                alt="a1"
                className="object-cover"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
