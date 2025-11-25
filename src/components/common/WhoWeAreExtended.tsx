import React from "react";
import Link from "next/link";

export default function WhoWeAreExtended() {
  return (
    <div className=" text-white bg-black ">
      <div className="flex flex-row px-16 py-4">
        <div className="border-r-2 pr-16">
          <h2 className="text-2xl pb-8">Who We Are</h2>
          <p className="text-sm break-normal w-56 pb-8">
            At Saha, we help clients build trust and reinvent so they can turn
            complexity into competitive advantage. We&apos;re passionate about
            helping businesses&apos; succeed, the public sector to achieve more,
            and our communities to grow.
          </p>
          <Link href="/whoweare">
            <button>Explore</button>
          </Link>
        </div>
        <div className="flex flex-col flex-1 pl-16 justify-center">
          <Link
            href="/whoweare"
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Overview</h2>
          </Link>
          <Link
            href="/whoweare/governance"
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Governance</h2>
          </Link>
          <Link
            href="/whoweare"
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Our Values</h2>
          </Link>
          <Link
            href="/whoweare/people"
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Our People</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
