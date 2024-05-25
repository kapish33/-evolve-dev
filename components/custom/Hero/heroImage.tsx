"use client";
import { whileInViewAnimation } from "@/utils/framer.variants";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Props {
  url: StaticImageData;
  alt: string;
}
export const HeroImage = ({ url, alt }: Props) => {
  return (
    <motion.div
      className=" lg:mt-0 lg:col-span-5 lg:flex"
      variants={whileInViewAnimation({ type: "up" })}
      initial="initial"
      whileInView="whileInView"
    >
      <Image
        className="mx-auto object-contain"
        src={url}
        alt={alt}
        width={500}
        height={500}
      />
    </motion.div>
  );
};
