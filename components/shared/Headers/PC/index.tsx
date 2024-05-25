import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Navigation } from "@constants/index";
import { appStringMap } from "@appString/appStringMap";
import Image from "next/image";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const PC = ({ isMenuOpen, toggleMenu }: Props): JSX.Element => {
  const {
    pages: {
      Home: { homeIcon },
    },
  } = appStringMap;
  return (
    <>
      {/* Logo on the left */}
      <Link href="/" className="w-full" passHref>
        {/* <img src={Logo} alt="Logo" className="h-8 w-auto mr-2" /> */}
        <Image src={homeIcon} alt="Logo" className="h-8 w-auto mr-2 rounded-full" />
      </Link>

      {/* Menu for medium-sized devices and above */}
      <div className="hidden md:flex space-x-4 ">
        {Navigation.map(({ variant, href, name, size }, index) => {
          return (
            <Link
              key={index}
              className={cn(buttonVariants({ variant, size: size.pc }))}
              href={href}
              passHref
            >
              {name}
            </Link>
          );
        })}
        {/* Add more routes as needed */}
      </div>

      {/* Hamburger menu for small devices */}
      <button
        onClick={toggleMenu}
        className="md:hidden block text-gray-50 hover:text-white focus:outline-none"
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {/* SVG for hamburger menu icon */}
          {isMenuOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm16 4H4v1h16v-1z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4z" // Shortened last line
            />
          )}
        </svg>
      </button>
    </>
  );
};
