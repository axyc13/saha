import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function Second() {
  return (
    <section className="w-screen h-screen text-black ">
      <div className="flex flex-col justify-center gap-16">
        <div>
          <h1 className="text-5xl text-end px-24">The People Who Shape Us</h1>
        </div>
        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-8 max-w-[48vw] py-16 justify-center">
            <p className="break-normal">
              Saha is built on a simple idea: <b>people first.</b> Our culture
              is rooted in integrity, support, humility, and clear thinking.
              These values guide our work and shape how we show up for our
              clients, our partners, and each other.
            </p>
            <p>
              Our team brings experience across finance, accounting, analytics,
              and business strategy  but more importantly, we bring perspective.
              We stay calm under pressure, focus on true understanding, and
              always aim to do the right thing, even when no one is watching.
            </p>
            <p>
              We&apos;re lifelong learners, critical thinkers, and disciplined
              executors. We get things done and we do them well.
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
