import React from "react";
import { Card, CardContent } from "./ui/card";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-90">
      <Card className="rounded-none">
        <CardContent className="container mx-auto">
          <p className="">Start of the website.</p>
        </CardContent>
      </Card>
    </header>
  );
}
