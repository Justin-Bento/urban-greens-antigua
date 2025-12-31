import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-32 bg-green-800 *:text-white grid items-center">
      <div className="wrapper grid grid-cols-4 gap-12">
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <div className="relative w-32 aspect-video">
            <Image
              fill
              src="/media/logo/urban-greens-logo-white.png"
              alt=""
              className="object-center object-cover"
            />
          </div>
          <p>Sustainable Microgreens, Unbeatable Flavor!</p>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-lg leading-7 capitalize">This is a footer.</h2>
          <ul className="mb-3 ml-6 list-disc [&>li]:mt-2">
            <li className="">
              <Link href="">Link Item</Link>
            </li>
            <li className="">
              <Link href="">Link Item</Link>
            </li>

            <li className="">
              <Link href="">Link Item</Link>
            </li>
            <li className="">
              <Link href="">Link Item</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-lg leading-7 capitalize">This is a footer.</h2>
          <ul className="mb-3 ml-6 list-disc [&>li]:mt-2">
            <li className="">
              <Link href="">Link Item</Link>
            </li>
            <li className="">
              <Link href="">Link Item</Link>
            </li>

            <li className="">
              <Link href="">Link Item</Link>
            </li>
            <li className="">
              <Link href="">Link Item</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-lg leading-7 capitalize">Legal Items.</h2>
          <ul className="mb-3 ml-6 list-disc [&>li]:mt-2">
            <li className="">
              <Link href="">Terms and Conditions</Link>
            </li>
            <li className="">
              <Link href="">Privacy Center</Link>
            </li>

            <li className="">
              <Link href="">Disclaimers</Link>
            </li>
            <li className="">
              <Link href="">Code of Conduct</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
