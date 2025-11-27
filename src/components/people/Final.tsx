import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Final() {
  return (
    <section className="w-screen h-screen text-black ">
      <div className="flex flex-col justify-center gap-16">
        <div></div>
        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-8 max-w-[48vw] py-8">
            <h1 className="text-5xl">
              A team built on trust, learning, and discipline
            </h1>
            <p className="break-normal">
              At Saha, we&apos;re here to create meaningful impact, not just
              deliver services. We show up for our clients with honesty,
              clarity, and the belief that there is always room to grow. When we
              work together, the sky truly is the limit.
            </p>
          </div>

          <div className="flex flex-col gap-8 items-end">
            <Image
              src={placeholder}
              alt="Placeholder"
              className="max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
