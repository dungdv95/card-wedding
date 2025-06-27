"use client";

export default function AudioPage() {
  return (
    <audio controls autoPlay className="sr-only">
      <source src="/audio/mo.mp3" type="audio/mpeg" />
    </audio>
  );
}
