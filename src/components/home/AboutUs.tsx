import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function AboutUs() {
  return (
    <section className="w-screen min-h-screen py-16 text-black flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl">What is Saha?</h1>

        <div className="relative group w-[92vw] h-[72vh] flex flex-col gap-8 justify-end rounded-b-4xl drop-shadow-xl overflow-hidden">
          <Image
            src={placeholder}
            alt="Placeholder"
            className="absolute inset-0 z-0 w-full h-full object-cover"
          />

          <div
            className="absolute bottom bg-white z-10 h-[32vh] lg:h-[24vh] w-[92vw] flex flex-col px-8 justify-center items-center gap-6 
            opacity-0 group-hover:opacity-100 translate-y-[40%] 
            group-hover:translate-y-0 transition-all duration-300 ease-out"
          >
            <p className="z-20 text-sm lg:text-base">
              At Saha, we help clients build trust and reinvent so they can turn
              complexity into competitive advantage. We&apos;re passionate about
              helping businesses succeed, the public sector to achieve more, and
              our communities to grow.
            </p>

            <div className="z-20 flex flex-row gap-2 lg:gap-16">
              <Link href="/whoweare/#values">
                <button className="text-xs md:text-base">Our Values</button>
              </Link>
              <Link href="/whoweare/governance">
                <button className="text-xs md:text-base">Governance</button>
              </Link>
              <Link href="/whoweare/people">
                <button className="text-xs md:text-base">Our People</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
