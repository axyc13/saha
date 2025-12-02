import React from "react";
import Image from "next/image";

import placeholder from "@/public/placeholder.jpg";

export default function Final() {
  return (
    <section className="w-screen max-h-screen md:min-h-screen text-black p-8 flex flex-col justify-center items-center gap-8 lg:gap-16">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-[92vw]">
        <div className="flex flex-col gap-8 lg:gap-16 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
          <h1 className="text-3xl lg:text-5xl">
            A team built on trust, learning, and discipline
          </h1>
          <p>
            At Saha, we&apos;re here to create meaningful impact, not just
            deliver services. We show up for our clients with honesty, clarity,
            and the belief that there is always room to grow. When we work
            together, the sky truly is the limit.
          </p>
        </div>

        <div className="flex justify-center lg:max-w-[48%] w-full">
          <Image
            src={placeholder}
            alt="Placeholder"
            className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
