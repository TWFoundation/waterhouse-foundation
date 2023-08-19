"use client";

import React from "react";
import { HiMail } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Connect() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => router.push("/contact")}>Contact Us</Button>
      <Button
        variant="secondary"
        size="icon"
        onClick={() => router.push("mailto:contact@waterhousefoundation.com")}
      >
        <HiMail />
      </Button>
    </div>
  );
}
