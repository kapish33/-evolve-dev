import { assets } from "@/assets";
import { StaticImageData } from "next/image";

const imageDataFormer = (url: StaticImageData, alt: string) => {
  return {
    url,
    alt,
  };
};

const homeImages = {
  hero: imageDataFormer(assets.main.hero, "Hero Alt Image"),
};

export { homeImages };
