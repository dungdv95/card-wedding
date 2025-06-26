"use client";

import { useEffect, useRef } from "react";

export default function AudioPage() {
  return (
    <audio controls autoPlay className="sr-only">
      <source src="/audio/mo-bgm.mp3" type="audio/mpeg" />
    </audio>
  );
}
