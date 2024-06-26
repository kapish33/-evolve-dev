import { IconType } from "react-icons/lib";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiSolidity,
  SiSwift,
  SiMicrosoftazure,
  SiAmazonaws,
  SiKubernetes,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

export interface TechItem {
  iconName: IconType;
  name: string;
}

export interface TechStack {
  heading: string;
  Frontend: TechItem[];
  Backend: TechItem[];
  Cloud: TechItem[];
  Database: TechItem[];
}

const ourTechStack: TechStack = {
  heading: "Our Tech Stack",
  Frontend: [
    {
      iconName: FaReact,
      name: "React Js",
    },
    {
      iconName: SiNextdotjs,
      name: "Next Js",
    },
    {
      iconName: TbBrandReactNative,
      name: "React Native",
    },
    {
      iconName: SiSwift,
      name: "Swift",
    },
    {
      iconName: SiTypescript,
      name: "Type Script",
    },
    {
      iconName: SiJavascript,
      name: "JavaScript",
    },
    {
      iconName: SiHtml5,
      name: "Html",
    },
    // Additional frontend tech items can be added here
  ],
  Backend: [
    {
      iconName: SiTypescript,
      name: "Type Script",
    },
    {
      iconName: SiJavascript,
      name: "JavaScript",
    },
    {
      iconName: SiSolidity,
      name: "Solidity",
    },
    // Backend tech items can be added here
  ],
  Cloud: [
    // Cloud tech items can be added here
    {
      iconName: SiMicrosoftazure,
      name: "Microsoft Azure",
    },
    {
      iconName: SiAmazonaws,
      name: "Amazon Aws",
    },
    {
      iconName: SiGooglecloud,
      name: "GCP",
    },
    {
      iconName: SiKubernetes,
      name: "Kubernetes",
    },
  ],
  Database: [
    // Database tech items can be added here
    {
      iconName: SiMongodb,
      name: "MongoDB",
    },
    {
      iconName: SiMysql,
      name: "SQL",
    },
  ],
};

const techStacks: (keyof TechStack)[] = [
  "Frontend",
  "Backend",
  "Cloud",
  "Database",
];

export const outTech = { ourTechStack, techStacks };
