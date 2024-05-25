import { ProgramHero } from "@/components/custom/ProgarmHero";
import { appStringMap } from "@appString/appStringMap";

export default function FlightToHappiness() {
  const {
    pages: { FlightToHappiness },
  } = appStringMap;
  return <ProgramHero {...FlightToHappiness.hero} />;
}
