import { assets } from '@/assets';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { appStringMap } from '@appString/appStringMap';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const {
    pages: {
      aboutUsPage: { intro, impact, communitySpeak, whyBackToBackpan },
    },
  } = appStringMap;
  return (
    <>
      <div className='md:py-10 py-16'>
        {/* Introduction Start */}
        <section className='py-4'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center flex-col lg:flex-row md:mt-20'>
              <div className='w-full lg:w-1/2'>
                <h1 className='font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left'>
                  {intro.h1}
                </h1>
                <p className='text-lg text-gray-500  text-center lg:text-left'>
                  {intro.p1}
                </p>
                <p className='text-lg py-2 text-gray-500  text-center lg:text-left'>
                  {intro.p2}
                </p>
                {/* <button className='cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0'>
                  Join our team
                </button> */}
              </div>
              <div className='w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl'>
                <div className='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8'>
                  <img
                    src='https://pagedone.io/asset/uploads/1696238644.png'
                    alt='Team tailwind section'
                    className='w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0'
                  />
                  <img
                    src='https://pagedone.io/asset/uploads/1696238665.png'
                    alt='Team tailwind section'
                    className='w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto'
                  />
                  <img
                    src='https://pagedone.io/asset/uploads/1696238684.png'
                    alt='Team tailwind section'
                    className='w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0'
                  />
                  <img
                    src='https://pagedone.io/asset/uploads/1696238702.png'
                    alt='Team tailwind section'
                    className='w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto'
                  />
                  <img
                    src='https://pagedone.io/asset/uploads/1696238720.png'
                    alt='Team tailwind section'
                    className='w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto'
                  />
                  <img
                    src='https://pagedone.io/asset/uploads/1696238737.png'
                    alt='Team tailwind section'
                    className='w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Introduction End */}

        {/* Impact Start */}
        <section className='Impact md:py-12 py-8'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-6 '>{impact.Heroh2}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {impact.impactArray.map((impact, key) => {
                return (
                  <div key={key} className='bg-gray-100 rounded-lg p-6'>
                    <h3 className='text-xl text-black font-semibold mb-4'>
                      {impact.h3}
                    </h3>
                    <p className='text-gray-900 mb-4'>{impact.p}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Impact End */}

        {/* CommunitySpeak Start */}

        <section className='CommunitySpeak md:py-12 py-8'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-6 '>
              {communitySpeak.heroHeading}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {communitySpeak.speaksArray.map((speaker, key) => (
                <div
                  key={key}
                  className='dark:bg-white bg-gray-100 rounded-lg p-6'>
                  <blockquote className='text-gray-700 italic'>
                    {speaker.blockquote}
                  </blockquote>
                  <p className='mt-4 text-gray-800'>{speaker.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CommunitySpeak Ends */}

        {/* WhyBackToBachpan Start */}
        <section className=' md:py-12 py-8'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-6 '>
              {whyBackToBackpan.heading}
            </h2>
            <p className='opacity-70 mb-6'>{whyBackToBackpan.para}</p>
          </div>
        </section>
        {/* WhyBackToBachpan Ends */}
      </div>
    </>
  );
}
