import { ProgramHero } from '@/components/custom/ProgarmHero';
import { appStringMap } from '@appString/appStringMap';

export default function MereSathiHelpline() {
  const {
    pages: { MeraSathiHelpline },
  } = appStringMap;
  return (
    <>
      <ProgramHero {...MeraSathiHelpline.hero} />
    </>
  );
}
