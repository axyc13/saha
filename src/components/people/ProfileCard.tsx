import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, CallIcon } from "@hugeicons/core-free-icons";

export default function Second({
  name,
  title,
  phone,
  email,
  image,
}: {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
}) {
  return (
    <div className="w-[40vw] h-[24vw] text-black flex items-center justify-center">
      <div className="flex flex-row items-center gap-8">
        <Image
          src={image}
          alt="placeholder"
          width={288}
          height={320}
          className="object-cover drop-shadow-md"
        />

        <div className="flex flex-col justify-center gap-8 w-72 h-80">
          <h1 className="text-3xl">{name}</h1>
          <p>{title}</p>
          <div className="flex flex-row gap-4 items-center">
            <HugeiconsIcon icon={CallIcon} />
            <p className="text-sm">{phone}</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <HugeiconsIcon icon={Mail01Icon} />
            <p className="text-sm">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
