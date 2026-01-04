"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex gap-2 text-xs lg:text-sm z-10">
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        return (
          <span key={index}>
            {index > 0 && "> "}
            <Link href={href} className="hover:underline">
              {segment.replace(/-/g, " ")}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
