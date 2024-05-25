import { ProgramHero } from "@/components/custom/ProgarmHero";
import { appStringMap } from "@appString/appStringMap";

export default function HappyHeartCenter() {
  const {pages:{HappyHeartCenter}} = appStringMap
  return (
   <ProgramHero {...HappyHeartCenter.hero}/>
  );
}
