import React from "react";
import { Card, CardContent } from "./ui/card";

export default function Footer() {
  return (
    <footer className="">
      <Card className="bg-gray-900 text-white rounded-none shadow-none border-none">
        <CardContent className="container mx-auto">
          <p className="">End of the website.</p>
        </CardContent>
      </Card>
    </footer>
  );
}
