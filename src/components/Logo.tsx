import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex font-semibold flex-col gap-0 *:leading-4 hover:opacity-75 hover:underline"
    >
      <span className="">Urban</span>
      <span className="">Greens</span>
    </Link>
  );
}
