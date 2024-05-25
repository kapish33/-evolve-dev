"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Navigation } from "@constants/index";
// import Logo from "./path/to/your/logo.svg"; // Import your logo
interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Mobile = ({ isMenuOpen, toggleMenu }: Props): JSX.Element => {
  return (
    <>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="md:hidden absolute top-14 right-0 left-0 flex flex-col bg-pink-700 text-white py-2 px-4"
        >
          {Navigation.map(({ variant, href, name, size }, index) => {
            return (
              <Link
                key={index}
                className={cn(
                  buttonVariants({ variant, size: size.mobile }),
                )}
                href={href}
                passHref
              >
                {name}
              </Link>
            );
          })}
          {/* Add more routes as needed */}
        </div>
      )}
    </>
  );
};
