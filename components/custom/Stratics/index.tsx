"use client";
import { FaBeer } from "react-icons/fa";
import { motion } from "framer-motion";
import { appStringMap } from "@appString/appStringMap";
import { whileInViewAnimation } from "@/utils/framer.variants";

export const Statics = (): JSX.Element => {
  const {
    pages: {
      Home: {
        showcase: { showcaseArray, showcaseData },
      },
    },
  } = appStringMap;
  return (
    <section className="text-gray-600 body-font max-w-screen-xl px-4 py-8 mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-gray-900">
            {showcaseData.h1}
          </h1>
          <motion.p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {showcaseData.p}
          </motion.p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {showcaseArray.map(({ h1, Icons, p }) => {
            return (
              <>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <motion.div
                    variants={whileInViewAnimation({ type: "down" })}
                    initial="initial"
                    whileInView="whileInView"
                    className="border-2 border-gray-200 px-4 py-6 rounded-lg"
                  >
                    <Icons className="text-orange-400 w-12 h-12 mb-3 inline-block" />
                    <motion.h2
                      variants={whileInViewAnimation({ type: "fadeIn" })}
                      initial="initial"
                      whileInView="whileInView"
                      className="title-font font-medium text-3xl dark:text-gray-50 text-gray-900"
                    >
                      {h1}
                    </motion.h2>
                    <p className="leading-relaxed">{p}</p>
                  </motion.div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
