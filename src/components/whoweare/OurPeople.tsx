import React from "react";
import Link from "next/link";

export default function OurPeople() {
  return (
    <section className="text-black flex flex-col items-center p-8">
      <div className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
        <h1 className="text-2xl lg:text-4xl text-center">Our People</h1>
        <p>
          At Saha, everything begins with our people. Our team is driven by
          curiosity, grounded in honesty, and committed to creating real
          outcomes for businesses. Whether we&apos;re helping clients build
          stronger financial foundations or guiding them through strategic
          decisions, it&apos;s our collaboration, discipline, and shared values
          that move us forward.
        </p>
        <p>
          We believe in limitless potential; and together, we make possibilities
          happen.
        </p>
        <div className="flex justify-center">
          <Link href="/whoweare/people">
            <button>Learn More</button>
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-center lg:max-w-[48%] w-full">
          <Image
            src={placeholder}
            alt="Placeholder"
            className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
          />
        </div> */}
    </section>
  );
}
