"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FOUNDERS } from "@/lib/constants";
import Image from "next/image";

export default function Founders() {
  return (
    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {FOUNDERS.map((founder, index) => (
        <Card key={index} className="flex flex-col gap-4">
          <CardHeader className="h-96">
            <div className="relative p-4 h-full">
              <Image
                fill
                objectFit="cover"
                src={founder.image}
                alt={founder.name}
                className="rounded shadow-md"
              />
            </div>
          </CardHeader>

          <CardContent className="flex flex-col items-start gap-4">
            <CardTitle>{founder.name}</CardTitle>
            <CardDescription>{founder.description}</CardDescription>
          </CardContent>

          <CardFooter>
            <Button variant="ghost" size="icon">
              <LinkedInLogoIcon
                className="w-5 h-5"
                onClick={() => window.open(founder.socials.linkedin, "_blank")}
              />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
