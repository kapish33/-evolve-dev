import Link, { LinkProps } from "next/link";
import React from "react";

export interface ProgramHeroPros {
  backGroundVideoURL: string;
  topSmallText: string;
  h1: string;
  link1: LinkProps & { name: string };
  link2: LinkProps & { name: string };
}

export const ProgramHero = ({
  backGroundVideoURL,
  topSmallText,
  h1,
  link1,
  link2,
}: ProgramHeroPros) => {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* <!-- video - start --> */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={backGroundVideoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link href={"/"} />
      {/* <!-- video - end --> */}

      {/* <!-- overlay - start --> */}
      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
      {/* <!-- overlay - end --> */}

      {/* <!-- text start --> */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
          {topSmallText}
        </p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          {h1}
        </h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            href={link1.href}
          >
            {link1.name}
          </Link>

          <Link
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            href={link2.href}
          >
            {link2.name}
          </Link>
        </div>
      </div>
      {/* <!-- text end --> */}
    </section>
  );
};
