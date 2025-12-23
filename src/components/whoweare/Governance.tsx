import React from "react";
import Link from "next/link";

export default function Governance() {
  return (
    <section className="text-black flex flex-col items-center border-b lg:border-b-0 lg:border-r p-8">
      <div className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
        <h1 className="text-2xl lg:text-4xl text-center">Our Governance</h1>
        <p>
          Governance at Saha isn&apos;t just a framework, is a mindset. Our core
          belief, Sky&apos;s the limit, guides how we operate, how we serve
          clients, and how we hold ourselves accountable.{" "}
        </p>
        <p>
          We are intentional about the company we are building. Every policy,
          process, and decision is shaped by the values that drive us. These
          values help us stay disciplined, transparent, and responsible in
          everything we do.
        </p>
        <div className="flex justify-center">
          <Link href="/whoweare/governance">
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
