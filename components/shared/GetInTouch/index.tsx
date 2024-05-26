import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Framer } from '@sharedLayout/Framer';
import Link from 'next/link';

export const GetinTouch = (): JSX.Element => {
  return (
    <section className='bg-gradient-to-r w-full from-fuchsia-900 via-pink-700 to-blue-600 dark:from-orange-500 dark:via-pink-900 dark:to-orange-400'>
      <div className='container flex flex-col items-center px-4 py-8 mx-auto text-center'>
        <Framer
          animationType='down'
          tag='h2'
          className='mx-auto text-2xl font-semibold tracking-tight  xl:text-3xl text-white'>
          Bring your Business to the{' '}
          <span className='text-blue-500'>next level.</span>
        </Framer>

        <Framer
          animationType='up'
          tag='p'
          className='max-w-4xl mt-6 text-center text-gray-300'>
          Embark on an odyssey of exploration! Click here to unveil the wonders.
        </Framer>

        <Framer
          animationType='fadeIn'
          className='inline-flex w-full mt-6 sm:w-auto'>
          <Link
            key={'contact-us'}
            href={'contact-us'}
            className={cn(buttonVariants({ variant: 'outline' }),'mx-auto')}>
            {'Sign Up'}
          </Link>
        </Framer>
      </div>
    </section>
  );
};
