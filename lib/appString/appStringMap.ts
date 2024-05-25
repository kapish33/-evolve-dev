import { assets } from '@/assets';
import { HomeLink1 } from './AppStringHelper/Home';
import { FooterData } from './AppStringHelper/Shared/Footer';
import { homeImages } from './AppStringHelper/imagePropsFormer';
import { showcaseData, showcaseArray } from './AppStringHelper/ShowCase';
import { Hero as FallPreventionHero } from './AppStringHelper/FallPreventionPrograms';
import { Hero as FlightToHappinessHero } from './AppStringHelper/FlightToHappiness';
import { Hero as HappyHeartCenterHero } from './AppStringHelper/HappyHeartCenter';
import { Hero as MeraSathiHelplineHero } from './AppStringHelper/MeraSathiHelpline';
import { Hero as SecondInningsWellnessProgramsHero } from './AppStringHelper/SecondInningsWellnessPrograms';
import {
  AboutCommunitySpeak,
  AboutImpact,
  AboutIntro,
  AboutWhyBackToBachpan,
} from './AppStringHelper/AboutUs';
import { ShowCase } from './AppStringHelper/Home/ShowCase';
import { outTech } from './AppStringHelper/Home/ourTechStack';

export const appStringMap = {
  shared: {
    footer: FooterData,
  },
  pages: {
    Home: {
      homeIcon: assets.homeIcon,
      title: `Turning 💡 Ideas Into Reality`,
      description: `At {company}, we turn innovative ideas into functional Minimum Viable Products (MVPs) that attract market interest and foster growth. Our team of strategists, developers, and designers collaborate with you to bring your concept to life, ensuring your startup is ready to make a significant impact.`,
      link1: HomeLink1,
      heroImage: homeImages,
      ourPrimeProjects: ShowCase,
      outTech,
      showcase: {
        showcaseData,
        showcaseArray,
      },
    },
    HappyHeartCenter: {
      hero: HappyHeartCenterHero,
    },
    SecondInningsWellnessPrograms: {
      hero: SecondInningsWellnessProgramsHero,
    },
    FlightToHappiness: {
      hero: FlightToHappinessHero,
    },
    MeraSathiHelpline: {
      hero: MeraSathiHelplineHero,
    },
    FallPreventionPrograms: {
      hero: FallPreventionHero,
    },
    aboutUsPage: {
      intro: AboutIntro,
      impact: AboutImpact,
      communitySpeak: AboutCommunitySpeak,
      whyBackToBackpan: AboutWhyBackToBachpan,
    },
  },
};
