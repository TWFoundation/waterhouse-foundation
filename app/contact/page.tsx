import React from "react";
import Form from "./form";

export default function Contact() {
  return (
    <main className="pt-16 min-h-screen container flex flex-col items-start justify-center gap-4">
      <h1 className="text-6xl md:text-9xl font-semibold">Contact Us</h1>
      <Form />
    </main>
  );
}
