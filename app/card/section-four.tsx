import Image from "next/image";

export default function SectionFour() {
  return (
    <section className="container mx-auto px-20 max-md:px-2 py-10 text-white">
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <div className="col-span-5 h-[1000px] max-lg:col-span-12 max-lg:h-[600px]">
          <Image
            alt="wed"
            src="/images/8.jpeg"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="col-span-7 flex flex-col gap-7 max-lg:col-span-12">
          <div className="h-[600px] flex justify-between gap-6 max-lg:h-[350px]">
            <div>
              <Image
                alt="wed"
                src="/images/8.jpeg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <Image
                alt="wed"
                src="/images/8.jpeg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="h-[372px]">
            <Image
              alt="wed"
              src="/images/8.jpeg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="col-span-12">
          <div className="h-[430px]">
            <Image
              alt="wed"
              src="/images/change.jpeg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="col-span-8 max-lg:col-span-6">
          <div className="h-[620px] max-lg:h-[350px]">
            <Image
              alt="wed"
              src="/images/change.jpeg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="col-span-4 max-lg:col-span-6">
          <div className="h-[620px] max-lg:h-[350px]">
            <Image
              alt="wed"
              src="/images/change.jpeg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="col-span-6 max-lg:col-span-12">
          <div className="flex flex-col gap-5">
            <div className="h-[350px]">
              <Image
                alt="wed"
                src="/images/change.jpeg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="h-[650px]">
              <Image
                alt="wed"
                src="/images/change.jpeg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 max-lg:col-span-12">
          <div className="h-[1020px]">
            <Image
              alt="wed"
              src="/images/change.jpeg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="col-span-12">
          <div className="h-[700px]">
            <Image
              alt="wed"
              src="/images/change.jpeg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
