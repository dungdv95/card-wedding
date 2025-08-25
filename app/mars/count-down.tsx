"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // const [targetDate, setTargetDate] = useState<string>("2025-07-14T11:30");
  const [targetDate, setTargetDate] = useState<string>(() => {
    const now = new Date();

    // tạo ngày 14/7 của năm hiện tại
    let target = new Date(now.getFullYear(), 6, 14, 11, 30); // tháng 6 = July (0-based)

    // nếu đã qua ngày 14/7 năm nay thì +1 năm
    if (now > target) {
      target.setFullYear(target.getFullYear() + 1);
    }

    return target.toISOString().slice(0, 16);
  });
  const [isActive, setIsActive] = useState(true);
  //   const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && targetDate) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
          //   setIsExpired(false);
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          //   setIsExpired(true);
          setIsActive(false);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, targetDate]);

  return (
    <div className="mt-4 grid grid-cols-4 gap-3">
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative text-center p-5 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <div className="text-2xl md:text-3xl font-black font-mono tracking-tight drop-shadow-lg">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-bold opacity-90 tracking-widest">
              NGÀY
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative text-center p-5 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-500 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <div className="text-2xl md:text-3xl font-black font-mono tracking-tight drop-shadow-lg">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-bold opacity-90 tracking-widest">
              GIỜ
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-100"></div>
          </div>
        </div>
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative text-center p-5 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <div className="text-2xl md:text-3xl font-black font-mono tracking-tight drop-shadow-lg">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-bold opacity-90 tracking-widest">
              PHÚT
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative text-center p-5 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <div className="text-2xl md:text-3xl font-black font-mono tracking-tight drop-shadow-lg animate-pulse">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-bold opacity-90 tracking-widest">
              GIÂY
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
