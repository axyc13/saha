import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function OurPeople() {
  return (
    <section className="w-screen h-screen text-black flex justify-center">
      <div className="flex flex-row max-w-[88vw] items-center">
        <div className="flex flex-col gap-8 ">
          <h1 className="text-6xl">Our People</h1>
          <p className="break-normal">
            At Saha, everything begins with our people. Our team is driven by
            curiosity, grounded in honesty, and committed to creating real
            outcomes for businesses. Whether we&apos;re helping clients build
            stronger financial foundations or guiding them through strategic
            decisions, it&apos;s our collaboration, discipline, and shared
            values that move us forward.
          </p>
          <p>
            We believe in limitless potential; and together, we make
            possibilities happen.
          </p>
          <Link href="/whoweare/people">
            <button>Learn More</button>
          </Link>
        </div>

        <div>
          <Image
            src={placeholder}
            alt="Placeholder"
            className="max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}
