import Image from "next/image";
import { motion } from "motion/react";
import { listImg } from "@/components/constant/constant";

export default function SectionFour() {
  return (
    <section className="container mx-auto px-20 max-md:px-2 py-10 text-white">
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="col-span-5 h-[1000px] max-lg:col-span-12 max-lg:h-[600px] max-md:h-[300px]"
        >
          <Image
            alt="wed"
            src={listImg[18]}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        <div className="col-span-7 flex flex-col gap-7 max-lg:col-span-12">
          <div className="h-[600px] flex justify-between gap-6 max-lg:h-[350px] max-md:h-[280px]">
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                alt="wed"
                src={listImg[16]}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                alt="wed"
                src={listImg[11]}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
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
            className="h-[372px] max-md:h-[300px]"
          >
            <Image
              alt="wed"
              src={listImg[7]}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
        <div className="col-span-12">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="h-[800px] max-md:h-[370px]"
          >
            <Image
              alt="wed"
              src={listImg[17]}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
        <div className="col-span-8 max-lg:col-span-6">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="h-[620px] max-lg:h-[350px] max-md:h-[250px]"
          >
            <Image
              alt="wed"
              src={listImg[13]}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
        <div className="col-span-4 max-lg:col-span-6">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="h-[620px] max-lg:h-[350px] max-md:h-[250px]"
          >
            <Image
              alt="wed"
              src={listImg[14]}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
        <div className="col-span-12">
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="h-[570px] max-md:h-[280px]"
            >
              <Image
                alt="wed"
                src={listImg[1]}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
