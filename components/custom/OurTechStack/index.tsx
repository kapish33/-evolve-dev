import { appStringMap } from '@appString/appStringMap';
import { Framer } from '@sharedLayout/Framer';
import React, { useState } from 'react';
import { TechStacks } from './techStack';

export const OurTechStack = () => {
  const {
    pages: {
      Home: {
        outTech: { ourTechStack },
      },
    },
  } = appStringMap;

  return (
    <section className=' py-16 md:py-20 xl:py-48'>
      <Framer animationType='down' className='px-auto text-3xl text-center py-4' tag={'h2'}>
        {ourTechStack.heading}
      </Framer>

      <TechStacks />
    </section>
  );
};
