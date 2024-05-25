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

export const appStringMap = {
  shared: {
    footer: FooterData,
  },
  pages: {
    Home: {
      homeIcon: assets.homeIcon,
      title: `Turning 💡 Ideas Into Reality`,
      description: `At {company}, we specialize in transforming innovative ideas into viable Minimum Viable Products (MVPs) that capture market attention and drive growth. Our expert team of strategists, developers, and designers work closely with you to bring your vision to life, ensuring your startup is ready to make an impact.`,
      link1: HomeLink1,
      heroImage: homeImages,
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
