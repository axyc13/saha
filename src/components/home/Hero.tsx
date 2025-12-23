import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.png";

export default function Hero() {
  return (
    <section
      className="relative w-screen min-h-screen bg-black text-white 
      flex items-center justify-end"
    >
      {/* Background image */}
      <Image
        src={hero}
        alt="hero image"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-8 max-w-lg text-center md:text-right p-8 lg:p-0 lg:mr-24 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl">
          Sky&apos;s the Limit
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl">Saha</h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Helping people and businesses build clarity, make confident decisions,
          and realise limitless possibilities.
        </p>
        <Link href="/contactus">
          <button>Contact Us</button>
        </Link>
      </div>
    </section>
  );
}
