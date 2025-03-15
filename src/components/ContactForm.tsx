"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgjggby");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <legend className="space-y-4">
        <Label htmlFor="fullname" className="font-semibold capitalize">
          Full Name
        </Label>
        <Input id="fullname" type="string" name="fullname" />
        <ValidationError
          prefix="Fullname"
          field="fullname"
          errors={state.errors}
        />
      </legend>
      <legend className="space-y-4">
        <Label htmlFor="company" className="font-semibold capitalize">
          Company
        </Label>
        <Input id="company" type="string" name="company" />
        <ValidationError
          prefix="Fullname"
          field="company"
          errors={state.errors}
        />
      </legend>
      <legend className="space-y-4">
        <Label htmlFor="email" className="font-semibold capitalize">
          Email Address
        </Label>
        <Input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </legend>
      <legend className="space-y-4">
        <Label htmlFor="message" className="font-semibold capitalize">
          Send your message below.
        </Label>
        <Textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </legend>
      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}
