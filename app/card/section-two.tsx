import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <section className="container mx-auto px-20 max-md:px-2 py-10">
      <iframe
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>
      <div className="mt-10 flex gap-12 max-md:flex-col">
        <div className="relative">
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
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#ffe5ba] text-3xl font-bold">
            You Had Me At Hello!
          </span>
          <div className="w-24">
            <Separator className="my-0 bg-[#ffe5ba] !h-0.5" />
          </div>
          <span className="text-white text-base max-w-[350px]">
            {`"Trong tất cả các chiến dịch marketing anh đã triển khai, cưới được
            em là chiến dịch thành công nhất"`}
          </span>
          <span className="text-white text-base max-w-[350px]">
            {`"Em hiểu "hôn nhân" là hành trình đầy bug, em nguyện cùng anh log & fix mỗi ngày"`}
          </span>
        </div>
      </div>
    </section>
  );
}
