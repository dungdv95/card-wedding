import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function SectionFirts() {
  return (
    <section className="container mx-auto px-20 max-md:px-2 py-10">
      <div className="flex flex-col items-center">
        <div className="max-sm:px-12">
          <Image alt="wed" src="/images/wedd.png" width={400} height={200} />
        </div>
        <span className="text-white text-2xl text-center font-semibold mt-10">
          THIỆP MỜI THAM DỰ LỄ THÀNH HÔN
        </span>
        <div className="mt-5 flex flex-col gap-6 items-center">
          <span className="text-[#ffe5ba] text-5xl font-bold tracking-wider font-[cursive]">
            Dương Dũng
          </span>
          <span className="text-[#ffe5ba] text-5xl font-bold tracking-wider font-[cursive]">
            &
          </span>
          <span className="text-[#ffe5ba] text-5xl font-bold tracking-wider font-[cursive]">
            Nguyễn Nhàn
          </span>
        </div>
        <div className="mt-7 w-32">
          <Separator className="my-2 bg-white" />
        </div>

        <div className="mt-12 flex flex-col gap-6 items-center">
          <span className="text-white text-xl tracking-[20px] font-medium font-sans max-[25rem]:tracking-[15px]">
            SAVE THE DATE
          </span>
          <span className="text-white text-5xl font-bold tracking-[5px] font-stretch-125% font-mono">
            14.07.2025
          </span>
        </div>
      </div>
    </section>
  );
}
