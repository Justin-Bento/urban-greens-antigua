import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

import React from "react";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
  return (
    <>
      <section className="grid grid-cols-2 items-center">
        <section className="">
          <div className="">
            <span className="space-y-1">
              <h1 className="scroll-m-20 text-4xl font-bold capitalize lg:text-5xl">
                Contact Us.
              </h1>
            </span>
            <p className="max-w-[120ch] opacity-70 text-balance my-4 text-lg">
              By droping us a message and we will get back to you.
            </p>
            <Separator className="max-w-[40ch] my-12" />
          </div>
          <div className="">
            <ul className="flex flex-col items-start gap-4">
              <li className="inline-flex items-center gap-1">
                <Button variant="outline" size="icon">
                  <RiPhoneLine className="w-4 h-4" />
                </Button>
                <p className="px-2 body1">+1 (268)-720-8474</p>
              </li>
              {/* end of phone-number */}
              <li className="inline-flex items-center gap-1">
                <Button variant="outline" size="icon">
                  <RiMailLine className="w-4 h-4" />
                </Button>
                <p className="px-2 body1">urbangreensanu@gmail.com</p>
              </li>
              {/* end of email */}
              <li className="inline-flex items-center gap-1">
                <Button variant="outline" size="icon">
                  <RiMapPinLine className="w-4 h-4" />
                </Button>
                <p className="px-2 body1">St.John's, Antigua &#38; Barbuda</p>
              </li>
              {/* end of email */}
            </ul>
          </div>
        </section>
        <section className="">
          <form action="" className="space-y-8">
            <legend className="space-y-2">
              <Label htmlFor="email">Full Name</Label>
              <Input type="email" placeholder="eg - john doe" />
            </legend>
            <legend className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="eg - john.doe@example.com" />
            </legend>
            <legend className="space-y-2">
              <Label htmlFor="email">Message</Label>
              <Textarea placeholder="Type your message here." />
            </legend>
            <Button>Send Form</Button>
          </form>
        </section>
      </section>
    </>
  );
}
