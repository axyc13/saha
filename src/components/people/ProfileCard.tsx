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
    <div className="p-8 w-full h-auto bg-white text-black flex items-center justify-center drop-shadow-xl">
      <div className="flex flex-row items-center justify-center gap-8 lg:gap-16 w-full h-full">
        <div className="w-20 md:w-40 lg:w-56 shrink-0">
          <Image
            src={image}
            alt={name}
            width={0}
            height={0}
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 384px"
            className="w-full h-32 md:h-56 lg:h-80 object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-8 w-auto lg:w-full h-auto">
          <h1 className="text-lg lg:text-3xl">{name}</h1>
          <p className="text-xs lg:text-base">{title}</p>
          <div className="flex flex-row gap-2 lg:gap-4 items-center">
            <HugeiconsIcon icon={CallIcon} className="w-3 h-3 lg:w-6 lg:h-6" />
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
