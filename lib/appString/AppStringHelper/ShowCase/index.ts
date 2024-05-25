import { FaBeer } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface ShowCaseEntity {
  h1: string;
  p: string;
  Icons: IconType;
}

const showcaseArray: Array<ShowCaseEntity> = [
  {
    h1: "Hello",
    p: "paragraph",
    Icons: FaBeer,
  },
  {
    h1: "Hello",
    p: "paragraph",
    Icons: FaBeer,
  },
  {
    h1: "Hello",
    p: "paragraph",
    Icons: FaBeer,
  },
  {
    h1: "Hello",
    p: "paragraph",
    Icons: FaBeer,
  },
];

const showcaseData: Omit<ShowCaseEntity, "Icons"> = {
  h1: "Statics",
  p: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
  gentrify, subway tile poke farm-to-table. Franzen you probably haven
  heard of them man bun deep jianbing selfies heirloom prism food
  truck ugh squid celiac humblebrag.`,
};

export { showcaseData, showcaseArray };
