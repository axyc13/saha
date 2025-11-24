import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  NewTwitterIcon,
  Linkedin02Icon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="relative w-full h-112 text-white bg-black">
      <div className="flex flex-row gap-24 items-center">
        <div className="p-8">
          <Image
            src={logo}
            alt="Saha logo"
            className="rounded-full w-80 h-80"
          />
        </div>

        <div className="flex flex-row gap-16">
          <div>
            <h2 className="text-3xl pb-8">Quick Links</h2>
            <div className="flex flex-col gap-5">
              <Link href="/whoweare">About Saha</Link>
              <Link href="/whoweare">Our Values</Link>
              <Link href="/whoweare/people">Our People</Link>
              <Link href="/services">What We Do</Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl pb-8">Get Involved</h2>
            <div className="flex flex-col gap-5">
              <Link href="/contactus">Contact Us</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-5 absolute right-16 bottom-24">
        <HugeiconsIcon icon={Linkedin02Icon} className="w-8 h-8" />
        <HugeiconsIcon icon={Facebook02Icon} className="w-8 h-8" />
        <HugeiconsIcon icon={NewTwitterIcon} className="w-8 h-8" />
        <HugeiconsIcon icon={InstagramIcon} className="w-8 h-8" />
      </div>

      {/* Bottom Line */}
      <div className="w-full grid grid-cols-3 items-center">
        <div />
        <div className="flex justify-center">
          <p className="text-sm ">© 2025 saha. All Rights Reserved.</p>
        </div>
        <div className="flex justify-end gap-8 pr-16">
          <Link href="/termsofuse" className="text-sm">
            Terms of Use
          </Link>
          <Link href="/privacy" className="text-sm ">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
