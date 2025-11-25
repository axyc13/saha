import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function Services() {
  return (
    <section className="w-screen h-screen text-black ">
      <div className="flex flex-col items-center gap-16">
        <h1 className="text-6xl">What Does Saha Do?</h1>

        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-8 max-w-[48vw] py-16">
            <p className="break-normal">
              Saha delivers a full-spectrum financial advisory service,
              combining deep hands-on management with strategic insights. We
              partner with you to design and run your finance function — from
              monthly and quarterly reporting, budgeting and cash-flow
              monitoring to oversight of payroll, accounting, and
              payables/receivables. At the same time, we help you sharpen your
              strategic vision: setting performance KPIs, building long-term
              financial roadmaps, modelling growth scenarios, and supporting
              director-level decision-making. <br />
              <br /> Beyond the numbers, Saha strengthens your business&apos;s
              backbone. We embed robust financial controls, manage compliance
              and risk, and streamline processes with smart automation. Whether
              you&apos;re aiming to raise capital, plan for future growth, or
              improve profitability, we guide you with clear, actionable advice.
              With our global reach and industry-tailored expertise, we&apos;re
              here to help you transform, grow, and operate with confidence.
            </p>
            <Link href="/services">
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
      </div>
    </section>
  );
}
