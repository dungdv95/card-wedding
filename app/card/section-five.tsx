import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function FivePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SectionFive />
    </Suspense>
  );
}

function SectionFive() {
  const invite = useSearchParams().get("name");
  console.log("invite", invite);
  return (
    <section className="container mx-auto px-20 max-md:px-2 py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="h-0.5 w-[130px] bg-[#ffe5ba]"></div>
          <span className="text-[#ffe5ba] text-3xl">WEDDING INVITATION</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative">
            <Image
              alt="wed"
              src="/images/cardfont.png"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
            <span
              className="absolute top-[403px] right-[280px] max-2xl:top-[324px] max-2xl:right-[225px] text-2xl text-red-600 font-bold italic max-xl:text-lg 
            max-xl:top-[246px] max-xl:right-[175px] max-lg:text-sm max-lg:top-[173px] max-lg:right-[114px]
            max-md:top-[179px] max-md:right-[118px] max-sm:text-[10px] max-sm:top-[118px] max-sm:right-[78px]
            max-[25rem]:text-[8px] max-[25rem]:top-[107px] max-[25rem]:right-[73px]
            max-[26rem]:text-[8px] max-[26rem]:top-[114px] max-[26rem]:right-[80px]
            max-[24rem]:text-[7px] max-[24rem]:top-[103px] max-[24rem]:right-[70px]
            max-[23rem]:text-[7px] max-[23rem]:top-[98px] max-[23rem]:right-[70px] opacity-80"
            >
              {invite ?? ""}
            </span>
          </div>
          <div className="relative">
            <Image
              alt="wed"
              src="/images/cardback.png"
              width={1000}
              height={1000}
              className="mt-3 w-full h-full object-cover rounded-xl"
            />
            <span
              className="absolute top-[93px] left-[224px] text-2xl text-red-600 font-bold italic max-xl:text-lg 
            max-xl:top-[74px] max-xl:left-[168px] max-lg:text-sm max-lg:top-[54px] max-lg:left-[120px]
            max-md:top-[55px] max-md:left-[123px] max-sm:text-[10px] max-sm:top-[40px] max-sm:left-[80px] 
            max-[25rem]:text-[8px] max-[25rem]:top-[39px] max-[25rem]:left-[73px]
            max-[26rem]:text-[8px] max-[26rem]:top-[40px] max-[26rem]:left-[73px]
            max-[24rem]:text-[7px] max-[24rem]:top-[38px] max-[24rem]:left-[68px]
            max-[23rem]:text-[7px] max-[23rem]:top-[36px] max-[23rem]:right-[68px] opacity-80"
            >
              {invite ?? ""}
            </span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/Gi6EjgquF1f3QCz79"
              className="text-blue-500 underline italic max-md:text-xs"
            >
              * xem bản đồ nhà trai
            </Link>
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/ppnoMyKWdXTk7i2GA"
              className="text-pink-500 underline italic max-md:text-xs"
            >
              * xem bản đồ nhà gái
            </Link>
          </div>
        </div>
        <div className="mt-6 flex gap-6 items-center justify-center max-lg:gap-4 max-[32rem]:gap-2">
          <span className="text-[#ffe5ba] text-5xl font-bold font-[Geist] max-lg:text-3xl max-[32rem]:text-lg">
            FROM DŨNG & NHÀN WITH LOVE
          </span>
          <Heart className="size-12 fill-pink-700 stroke-pink-700 max-lg:size-9 max-[32rem]:size-6" />
        </div>
      </div>
    </section>
  );
}
