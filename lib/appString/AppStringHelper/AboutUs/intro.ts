import { assets } from '@/assets';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Url } from 'next/dist/shared/lib/router/router';

interface AboutIntroSection {
  aboutImage: {
    url: StaticImport;
    altText: string;
  };
  h1: string;
  p1: string;
  p2: string;
  button: {
    href: Url;
    buttonText: string;
  };
}

export const AboutIntroSection: AboutIntroSection = {
  aboutImage: {
    url: assets.main.aboutHero,
    altText: 'About Us',
  },
  h1: 'About Us',
  p1: `We create a supportive ecosystem for seniors by offering sessions and programs designed to help them enhance their health and happiness and create a renewed sense of meaning and purpose in their lives.`,
  p2: `We partner with residential communities and organizations to provide a distinctive year-long program tailored for seniors. This program encompasses acquiring new skills, cultivating hobbies, group excursions social gatherings, and engaging in community service to share their wealth of knowledge and experience.`,
  button: {
    href: 'contact-us',
    buttonText: 'Learn More',
  },
};
