import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function Governance() {
  return (
    <section className="w-screen h-screen text-black ">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-8 max-w-[48vw] py-16 justify-center">
            <p className="break-normal">
              Governance at Saha isn&apos;t just a framework, is a mindset. Our
              core belief, Sky&apos;s the limit, guides how we operate, how we
              serve clients, and how we hold ourselves accountable.{" "}
            </p>
            <p>
              We are intentional about the company we are building. Every
              policy, process, and decision is shaped by the values that drive
              us. These values help us stay disciplined, transparent, and
              responsible in everything we do.
            </p>
            <Link href="/whoweare/governance">
              <button>Learn More</button>
            </Link>
          </div>

          <div className="flex flex-col gap-8 items-end">
            <h1 className="text-6xl ">Governance</h1>
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
