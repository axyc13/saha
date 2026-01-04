import React from "react";
import { getTerms } from "src/lib/payload/terms";
import type { Term } from "@/src/types/term";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default async function Contact() {
  const sections: Term[] = await getTerms();

  return (
    <section className="w-screen min-h-screen text-black px-8 lg:px-24 py-16">
      <div className="flex flex-col gap-8">
        {sections.map((sec) => (
          <div key={sec.id} className="px-8 md:px-16">
            <h1 className="text-2xl md:text-3xl">{sec.title}</h1>
            <br />
            <div className="text-sm md:text-base [&_li]:ml-4">
              <RichText data={sec.body} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
