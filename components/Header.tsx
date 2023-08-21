"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { NAVIGATION } from "@/lib/constants";

export default function Header() {
  return (
    <header className="px-4 py-4 fixed w-full flex items-center justify-center gap-2 bg-background shadow-sm z-10">
      <NavigationMenu>
        <NavigationMenuList>
          {NAVIGATION.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button variant="ghost">{link.name}</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuIndicator className="NavigationMenuIndicator" />
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenu>
    </header>
  );
}
