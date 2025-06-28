"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2Icon, Mars, Venus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [nameGuest, setNameGuest] = useState("");
  const [isClickedMars, setIsClickedMars] = useState(false);
  const [isClickedVenus, setIsClickedVenus] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleClickMars = () => {
    setIsClickedMars(true);

    setTimeout(() => {
      router.push(`/mars?name=${nameGuest}`);
    }, 1500);
  };

  const handleClickVenus = () => {
    setIsClickedVenus(true);

    setTimeout(() => {
      router.push(`/venus?name=${nameGuest}`);
    }, 1500);
  };

  useEffect(() => setIsClient(true), []);

  return (
    <div className="relative h-screen">
      <div
        style={{
          backgroundImage: "url('/images/bgr.jpg')",
        }}
        className="h-full bg-center bg-cover blur-[1px] brightness-50 "
      ></div>
      <div className="absolute left-0 right-0 bottom-0 top-0 mx-auto my-auto px-1">
        <div className="h-full flex flex-col justify-center items-center">
          <div
            style={{ minHeight: "auto" }}
            className={cn(
              "relative flex justify-center py-[30px] px-10 max-w-[1000px] w-full backdrop-blur-[10px] rounded-[15px] border-2 border-pink-600/60 shadow-sm max-xl:max-w-[700px] max-md:max-w-[600px] max-[32rem]:max-w-[400px] max-[27rem]:max-w-[350px]"
            )}
          >
            <div className={cn("w-full flex flex-col gap-3 items-center ")}>
              <div className="tracking-wider font-bold text-white text-3xl text-center max-[32rem]:text-xl max-[27rem]:text-sm">
                CHÀO MỪNG BẠN ĐẾN VỚI LỄ CƯỚI CỦA{"  "}
                <span className="italic text-green-600">DŨNG</span>
                {"  "} & {"  "}
                <span className="italic text-pink-600 ">NHÀN</span>
              </div>
              <div className="mt-10 max-[27rem]:mt-4 w-[60%] max-[32rem]:w-full">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-white text-center italic  max-[32rem]:text-sm max-[27rem]:text-xs"
                >
                  Xin hãy cho biết quý danh của bạn
                </label>
                {isClient && (
                  <div className="mt-2">
                    <Input
                      value={nameGuest}
                      onChange={(e) => {
                        setNameGuest(e.target.value);
                      }}
                      id="name"
                      name="name"
                      type="text"
                      placeholder=""
                      className="h-12 block w-full rounded-full bg-transparent px-4 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-pink-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 "
                    />
                  </div>
                )}
                {/* <div className="mt-2 flex justify-center gap-2">
                  <Badge
                    onClick={() => {
                      setIsMars(true);
                    }}
                    variant="destructive"
                    className={cn(
                      "rounded-2xl cursor-pointer",
                      isMars
                        ? "bg-blue-700 hover:bg-blue-700/80"
                        : "bg-blue-200 hover:bg-blue-200/80"
                    )}
                  >
                    <Mars />
                    Team nhà trai
                  </Badge>
                  <Badge
                    variant="destructive"
                    onClick={() => {
                      setIsMars(false);
                    }}
                    className={cn(
                      "rounded-2xl cursor-pointer",
                      isMars
                        ? "bg-pink-200 hover:bg-pink-200/80"
                        : "bg-pink-700 hover:bg-pink-700/80"
                    )}
                  >
                    <Venus />
                    Team nhà gái
                  </Badge>
                </div> */}
                <div className="mt-4 flex justify-between gap-2">
                  <button
                    type="button"
                    className={cn(
                      "flex justify-center gap-1 items-center w-full h-12 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    )}
                    onClick={handleClickMars}
                    disabled={isClickedMars || isClickedVenus}
                  >
                    {isClickedMars ? (
                      <Loader2Icon className="size-4.5 animate-spin" />
                    ) : (
                      <Mars className="size-4.5" />
                    )}
                    #teamnhatrai
                  </button>
                  <button
                    type="button"
                    className={cn(
                      "flex justify-center gap-1 items-center w-full h-12 rounded-full bg-pink-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                    )}
                    onClick={handleClickVenus}
                    disabled={isClickedMars || isClickedVenus}
                  >
                    {isClickedVenus ? (
                      <Loader2Icon className="size-4.5 animate-spin" />
                    ) : (
                      <Venus className="size-4.5" />
                    )}
                    #teamnhagai
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
