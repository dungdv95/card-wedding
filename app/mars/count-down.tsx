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
  const [targetDate, setTargetDate] = useState<string>("2025-07-14T11:30");
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
    <div className="mt-4 grid grid-cols-4 gap-4">
      <div className="text-center p-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-2xl md:text-3xl font-bold mb-2">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base font-medium opacity-90">NGÀY</div>
      </div>

      <div className="text-center p-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-2xl md:text-3xl font-bold mb-2">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base font-medium opacity-90">GIỜ</div>
      </div>

      <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-2xl md:text-3xl font-bold mb-2">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base font-medium opacity-90">PHÚT</div>
      </div>

      <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-2xl md:text-3xl font-bold mb-2">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base font-medium opacity-90">GIÂY</div>
      </div>
    </div>
  );
}
