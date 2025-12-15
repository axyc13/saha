import React from "react";
import type { Policy } from "@/src/types/policy";
import { getPolicies } from "@/src/lib/payload/policies";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default async function Contact() {
  const sections: Policy[] = await getPolicies();

  return (
    <section className="w-screen min-h-screen text-black p-8 lg:px-32 lg:py-8">
      <div className="flex flex-col gap-8">
        {sections.map((sec) => (
          <div key={sec.id} className="px-8 md:px-16">
            <h1 className="text-2xl md:text-3xl">{sec.title}</h1>
            <br />
            <div className="text-sm md:text-base [&_li]:ml-4 whitespace-pre-line">
              <RichText data={sec.body} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
