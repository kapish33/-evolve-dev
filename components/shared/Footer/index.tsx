import { FooterData } from "@appString/AppStringHelper/Shared/Footer";
import Link from "next/link";

interface Props {}

export const Footer = ({}: Props): JSX.Element => {
  return (
    <div className="max-w-screen-xl px-4 py-8 pt-4 sm:pt-10 lg:pt-12 mx-auto">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
          {/* <!-- nav - start --> */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            {FooterData.FooterRoutes.map(
              ({ href, name, size, variant }, ind) => {
                return (
                  <Link
                    key={ind}
                    href={href}
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    {name}
                  </Link>
                );
              }
            )}
          </nav>
          {/* <!-- nav - end --> */}

          {/* <!-- social - start --> */}
          <div className="flex gap-4">
            {FooterData.FooterSocialMedia.map(({ name, svg, url }, key) => {
              return (
                <Link
                  key={key}
                  href={url}
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={svg} />
                  </svg>
                </Link>
              );
            })}
          </div>
          {/* <!-- social - end --> */}
        </div>

        <div className="py-8 text-center text-sm text-gray-400">
          © 2024 - Back To Bachpan All rights reserved.
        </div>
      </footer>
    </div>
  );
};
