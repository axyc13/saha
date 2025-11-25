import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function OurValues() {
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
        <h1 className="text-6xl">OUR VALUES</h1>
        <p className="break-normal w-[80vw]">dsjfdhsn</p>
      </div>
    </section>
  );
}
