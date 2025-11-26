import React from "react";
import ValueCard from "./ValueCard";

export default function OurValues() {
  return (
    <section
      id="values"
      className="w-screen h-screen text-black flex flex-col gap-8"
    >
      <h1 className="text-6xl px-8">Our Values</h1>

      <div className="bg-black h-[80vh] w-screen">
        <ValueCard />
      </div>
    </section>
  );
}
