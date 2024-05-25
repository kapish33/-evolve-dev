import { Variants } from "framer-motion";

export type SLIDE_TYPE = "left" | "right" | "up" | "down" | "fadeIn" | "fadeOut" | "rotate" | "scaleUp";

type AnimateConfigType = {
  [key in SLIDE_TYPE]: Record<string, number | string>;
};

const animationConfig: AnimateConfigType = {
  up: {
    x: 0,
    y: 40,
  },
  down: {
    x: 0,
    y: -40,
  },
  left: {
    x: -40,
    y: 0,
  },
  right: {
    x: 40,
    y: 0,
  },
  fadeIn: {
    x: 0,
    y: 0,
    initialOpacity: 0,
    animateOpacity: 1,
  },
  fadeOut: {
    x: 0,
    y: 0,
    initialOpacity: 1,
    animateOpacity: 0,
  },
  rotate: {
    x: 0,
    y: 0,
    rotate: 45,
    initialOpacity: 0,
    animateOpacity: 1,
  },
  scaleUp: {
    x: 0,
    y: 0,
    scale: 0.6,
    initialOpacity: 0,
    animateOpacity: 1,
  },
};

type IS_HOVER_ANIMATION = "yes" | "no";
type HoverAnimationConfig = {
  [key in IS_HOVER_ANIMATION]: Record<string, number>;
};

const hoverAnimationConfig: HoverAnimationConfig = {
  yes: {
    scale: 1.06,
  },
  no: {
    scale: 1,
  },
};

export const whileInViewAnimation = ({
  type = "up",
  duration = 0.8,
  isHover = false,
}: {
  type: SLIDE_TYPE;
  duration?: number;
  isHover?: boolean;
}): Variants => {
  const {
    x,
    y,
    rotate = 0,
    scale = 1,
    initialOpacity = 0,
    animateOpacity = 1,
  } = animationConfig[type];
  return {
    initial: {
      x,
      y,
      rotate,
      scale,
      opacity: initialOpacity,
    },
    whileInView: {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: animateOpacity,
      transition: {
        duration,
        ease: "easeInOut",
      },
    },
    whileHover: {
      ...hoverAnimationConfig[isHover ? "yes" : "no"],
    },
  };
};
