import React from "react";
import Image from "next/image";
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
          className="object-cover drop-shadow-md w-24 h-28 sm:w-32 sm:h-36 md:w-48 md:h-56 lg:w-72 lg:h-80"
        />

        <div className="flex flex-col justify-center gap-4 lg:gap-8 w-72 h-80">
          <h1 className="text-xl lg:text-3xl">{name}</h1>
          <p className="text-sm lg:text-base">{title}</p>
          <div className="flex flex-row gap-2 lg:gap-4 items-center">
            <HugeiconsIcon
              icon={CallIcon}
              className="w-3  h-3  lg:w-6  lg:h-6"
            />
            <p className="text-xs lg:text-sm">{phone}</p>
          </div>
          <div className="flex flex-row gap-2 lg:gap-4 items-center">
            <HugeiconsIcon
              icon={Mail01Icon}
              className="w-3 h-3 lg:w-6 lg:h-6"
            />
            <p className="text-xs lg:text-sm">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
