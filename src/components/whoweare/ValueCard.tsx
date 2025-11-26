import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { BalanceScaleIcon } from "@hugeicons/core-free-icons";

export default function ValueCard() {
  return (
    <div className="flex flex-col py-8 items-center justify-between bg-white rounded-4xl drop-shadow-2xl w-56 h-56">
      <HugeiconsIcon icon={BalanceScaleIcon} className="w-24 h-24" />
      <p className="w-48 text-center">Honesty Before Everything</p>
    </div>
  );
}
