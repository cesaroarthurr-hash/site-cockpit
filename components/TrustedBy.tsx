"use client";

import Image from "next/image";
import { trustedBy } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export default function TrustedBy() {
  const logos = [...trustedBy.logos, ...trustedBy.logos];

  return (
    <section className="border-y border-gray-100 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-gray-900">{trustedBy.headline}</p>
          <p className="mt-1 text-sm text-gray-400">{trustedBy.subheadline}</p>
        </Reveal>

        {/* Marquee logos */}
        <div className="mask-fade-x relative mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12 pause-on-hover">
            {logos.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="relative h-12 w-32 shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="128px" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
