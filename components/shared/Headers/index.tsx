"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PC } from "./PC";
import { Mobile } from "./Mobile";
import { ThemeToggle } from "@sharedLayout/Theme/theme";

const Headers = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={menuRef}
      className="flex items-center justify-between gap-x-2 py-3 px-6 bg-pink-700 text-white fixed top-0 w-full z-10"
    >
      <PC isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Mobile toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <ThemeToggle />
    </nav>
  );
};

export default Headers;
