import { ProgramHero } from "@/components/custom/ProgarmHero";
import { appStringMap } from "@appString/appStringMap";

export default function FallPrevention() {
  const {
    pages: { FallPreventionPrograms },
  } = appStringMap;
  return <ProgramHero {...FallPreventionPrograms.hero} />;
}
