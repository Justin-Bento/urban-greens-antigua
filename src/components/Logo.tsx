import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative w-24 aspect-video">
        <Image
          fill
          src="/media/logo/urban-greens-logo.png"
          alt=""
          className="object-center object-cover"
        />
      </div>
    </Link>
  );
}
