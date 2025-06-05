"use client";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      router.push(`/card?name=${name}`);
    }, 1500); // Delay cho animation chạy xong
  };

  return (
    <div className="relative h-screen">
      <div
        style={{
          backgroundImage: "url('/images/1.jpeg')",
        }}
        className="h-full bg-center bg-cover blur-[4px]"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 top-0 mx-auto my-auto px-1">
        <div className="h-full flex flex-col justify-center items-center">
          <div
            style={{ minHeight: "auto" }}
            className={cn(
              "relative flex justify-center py-[30px] px-10 max-w-[1000px] w-full backdrop-blur-[15px] rounded-[15px] border-2 border-pink-600/80 shadow-sm max-xl:max-w-[700px] max-md:max-w-[600px] max-[32rem]:max-w-[400px] max-[27rem]:max-w-[350px]"
            )}
          >
            <div className={cn("w-full flex flex-col gap-3 items-center ")}>
              <span className="font-bold text-white text-3xl text-center max-[32rem]:text-xl max-[27rem]:text-sm">
                CHÀO MỪNG BẠN ĐẾN VỚI TIỆC CƯỚI CỦA CHÚNG TÔI!
              </span>
              <div className="mt-10 max-[27rem]:mt-4 w-[60%] max-[32rem]:w-full">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-white text-center italic  max-[32rem]:text-sm max-[27rem]:text-xs"
                >
                  Xin hãy cho biết quý danh của bạn
                </label>
                <div className="mt-2">
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="name"
                    name="name"
                    type="text"
                    placeholder=""
                    className="h-12 block w-full rounded-full bg-transparent px-4 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-pink-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 "
                  />
                </div>
                <button
                  type="button"
                  className={cn(
                    "flex justify-center items-center mt-4 w-full h-12 rounded-full bg-pink-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                  )}
                  onClick={handleClick}
                >
                  {isClicked && (
                    <Loader2Icon className="size-4.5 animate-spin" />
                  )}
                  {!isClicked && `OKI!!!!!`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
