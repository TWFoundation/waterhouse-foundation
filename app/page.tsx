import React from "react";
import { HiMail } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FOUNDERS } from "@/lib/constants";
import Connect from "./connect";
import Founders from "./founders";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="w-full md:max-w-5xl text-6xl md:text-9xl font-semibold">
          <p className="text-left">Waterhouse</p>
          <p className="text-right">Foundation</p>
        </h1>

        <p className="max-w-lg text-center">
          Waterhouse Foundation is a research organisation and providers of
          investment, advisory and risk management solutions.
        </p>

        <span className="text-primary font-bold">We are coming soon...</span>

        <Connect />
      </section>

      <section className="py-12 flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl md:text-6xl font-semibold">Our Founders</h2>

        <Founders />
      </section>

      {/* <section className="min-h-screen py-12 flex flex-col items-center justify-center gap-4">
        <h2 className="text-6xl md:text-8xl font-semibold">Our Focus</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FOCUS.map((value, index) => (
            <Card key={index} className="w-full">
              <CardHeader className="h-96">
                <div className="relative p-4 h-full">
                  <Image
                    fill
                    objectFit="cover"
                    src={value.image}
                    alt={value.title}
                    className="rounded shadow-md"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </main>
  );
}
