'use client';
import { SLIDE_TYPE, whileInViewAnimation } from '@utils/framer.variants';
import { motion } from 'framer-motion';
import { ReactNode, ElementType } from 'react';

type FramerProps = {
  children: ReactNode;
  tag?: ElementType;
  animationType?: SLIDE_TYPE
  duration?: number;
  isHover?: boolean;
  className?: string; // Add className prop
  onClick?: () => void;
};

export const Framer = ({
  children,
  tag: Tag = 'div',
  animationType = 'up',
  duration = 0.8,
  isHover = false,
  onClick = ()=> {},
  className = '', // Default to an empty string
}: FramerProps): JSX.Element => {
  const MotionTag = motion(Tag);

  const variants = whileInViewAnimation({ type: animationType, duration, isHover });

  return (
    <MotionTag
      className={className} // Pass className to the MotionTag component
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      whileHover={isHover ? 'whileHover' : undefined}
      onClick={onClick}
    >
      {children}
    </MotionTag>
  );
};
