"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { whileInViewAnimation } from "@/utils/framer.variants";

interface Props {}

export const ShowCase = ({}: Props): JSX.Element => {
    // max-w-screen-xl px-4 py-8 mx-auto
  return (
    <>
      <h2 className="text-3xl text-center py-4">
        Featured Projects (showcase 2-3 projects with images
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl px-4 py-8 mx-auto lg:py-16 ">
        <div className="grid gap-4">
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/128428/pexels-photo-128428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/2701596/pexels-photo-2701596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
        </div>
        <div className="grid gap-4">
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/4668998/pexels-photo-4668998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/2709718/pexels-photo-2709718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
        </div>
        <div className="grid gap-4">
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/41008/cowboy-ronald-reagan-cowboy-hat-hat-41008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/1652340/pexels-photo-1652340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
        </div>
        <div className="grid gap-4">
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/34761/old-people-couple-together-connected.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={whileInViewAnimation({ type: "up" })}
            initial="initial"
            whileInView="whileInView"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
