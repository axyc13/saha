import React from "react";
import ProfileCard from "./ProfileCard";
import type { Contact } from "@/src/types/contact";
import { getContacts } from "@/src/lib/payload/contacts";

export default async function Team() {
  const people: Contact[] = await getContacts();
  return (
    <section className="w-screen h-[130vh] text-black flex items-center justify-center flex-col gap-8">
      <div className="flex flex-col gap-8 px-24">
        <h1 className="text-6xl">Our People</h1>
        <p>
          Our leaders and advisors help clients build clarity, make confident
          decisions, and grow sustainably. Their experience spans finance,
          accounting, business strategy, operations, and organisational
          improvement.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 justify-items-center">
        {people.map((p) => (
          <ProfileCard
            key={p.id}
            name={p.name}
            title={p.title}
            phone={p.phone}
            email={p.email}
            image={p.photo.url}
          />
        ))}
      </div>
    </section>
  );
}
