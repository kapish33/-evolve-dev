import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { appStringMap } from '@appString/appStringMap';

import Link from 'next/link';
import { t } from '@appString/index';
import { env } from '@utils/envornment';
import { Framer } from '@sharedLayout/Framer';

export const Hero: React.FC = () => {
  const {
    pages: { Home },
  } = appStringMap;

  return (
    <section className='max-w-screen-5xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 text-center'>
      <div className=''>
        <Framer className='mb-4 lg:text-7xl md:text-6xl text-5xl pb-3 font-extrabold tracking-tight leading-none dark:text-white'  tag='h1' animationType='down' >
        {Home.title}
        </Framer>
        <Framer tag='p' className='max-w-5xl mx-auto mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
          {t('pages.Home.description', { company: env.companyName })}
        </Framer>
        <Framer animationType='up'>
        <Link
            className={cn(
              buttonVariants({
                variant: Home.link1.variant,
                size: Home.link1.size.pc,
              }),
              'font-kalam'
            )}
            href={Home.link1.href}>
            {Home.link1.name}
          </Link>
        </Framer>
      </div>

      {/* <HeroImage url={Home.heroImage.hero.url} alt={Home.heroImage.hero.alt} /> */}
    </section>
  );
};
