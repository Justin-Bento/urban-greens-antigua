import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";

export default function page() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <section className="">
          <div className="">
            <span className="space-y-1">
              <h1 className="scroll-m-20 text-4xl font-bold capitalize">
                Contact Us.
              </h1>
            </span>
            <p className="text-balance text-foreground my-4 text-lg/[1.75]">
              Please feel free to drop us a message, and we'll get back to you
              promptly.
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
                <p className="px-2 body1">
                  St.John&#39;s, Antigua &#38; Barbuda
                </p>
              </li>
              {/* end of email */}
            </ul>
          </div>
        </section>
        <section className="">
          <ContactForm />
        </section>
      </section>
    </>
  );
}
