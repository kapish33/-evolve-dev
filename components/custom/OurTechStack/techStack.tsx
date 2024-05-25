'use client';
import {
  TechItem,
  TechStack,
} from '@appString/AppStringHelper/Home/ourTechStack';
import { appStringMap } from '@appString/appStringMap';
import { Framer } from '@sharedLayout/Framer';
import React, { useState } from 'react';

export const TechStacks = () => {
  const {
    pages: {
      Home: {
        outTech: { techStacks, ourTechStack },
      },
    },
  } = appStringMap;
  const [selectedTech, setSelectedTech] = useState<keyof TechStack>(
    techStacks[0]
  )

  const handleTechClick = (tech: keyof TechStack) => {
    setSelectedTech(tech);
  };

  // Type assertion here to indicate that ourTechStack[selectedTech] is of type TechItem[]
  const techItems = ourTechStack[selectedTech] as TechItem[];

  return (
    <div className='mx-auto'>
      {techStacks.map((tech) => (
        <span
          key={tech}
          className={`px-4 py-2 capitalize ${
            selectedTech === tech ? 'underline underline-offset-4' : ''
          }`}
          onClick={() => handleTechClick(tech)}>
          {tech}
        </span>
      ))}
      {/* Selected from ourTechStack and show below */}
      {techItems && (
        <div className='mt-4'>
          <ul className='py-4'>
            {techItems.map((item, index) => (
              <li key={index} className='mb-4'>
                <Framer animationType='up' className='flex items-center'>
                  {/* Make the icon bigger */}
                  <item.iconName className='mr-4 text-4xl text-pink-500 dark:text-pink-700' />
                  {/* Style the text */}
                  <span className='text-lg font-semibold text-gray-800'>
                    {item.name}
                  </span>
                </Framer>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
