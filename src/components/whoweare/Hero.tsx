import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Hero() {
  return (
    <section className="w-screen h-screen text-black flex flex-col gap-8">
      <div>
        <Image
          src={placeholder}
          alt="Placeholder"
          className="w-screen h-[56vh]"
        />
      </div>
      <div className="flex flex-col gap-8 px-8">
        <h1 className="text-6xl">Who We Are</h1>
        <p className="break-normal w-[80vw]">
          At Saha, we help clients build trust and reinvent so they can turn
          complexity into competitive advantage. We&apos;re passionate about
          helping businesses&apos; succeed, the public sector to achieve more,
          and our communities to grow.
        </p>
      </div>
    </section>
  );
}
