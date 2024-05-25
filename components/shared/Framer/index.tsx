'use client';
import { whileInViewAnimation } from '@utils/framer.variants';
import { motion } from 'framer-motion';
import { ReactNode, ElementType } from 'react';

type FramerProps = {
  children: ReactNode;
  tag?: ElementType;
  animationType?: 'left' | 'right' | 'up' | 'down' | 'fadeIn' | 'fadeOut';
  duration?: number;
  isHover?: boolean;
  className?: string; // Add className prop
};

export const Framer = ({
  children,
  tag: Tag = 'div',
  animationType = 'up',
  duration = 0.8,
  isHover = false,
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
    >
      {children}
    </MotionTag>
  );
};
