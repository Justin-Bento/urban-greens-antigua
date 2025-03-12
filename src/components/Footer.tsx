import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <Card className="bg-green-900 text-white rounded-none shadow-none border-none">
        <CardContent className="container mx-auto">
          <div className="relative w-32 aspect-[16/11]">
            <Image
              fill
              src="/media/logo/urban-greens-logo-white.png"
              alt=""
              className="object-center"
            />
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
