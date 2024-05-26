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
      <div className='flex space-x-4 flex-wrap'>
        {techStacks.map((tech) => (
          <span
            key={tech}
            className={`px-4 py-2 capitalize cursor-pointer ${
              selectedTech === tech ? 'underline underline-offset-4' : ''
            }`}
            onClick={() => handleTechClick(tech)}>
            {tech}
          </span>
        ))}
      </div>
      {/* Selected from ourTechStack and show below */}
      {techItems && (
        <div className='mt-4'>
          <ul className='flex flex-wrap gap-4 justify-center py-4'>
            {techItems.map((item, index) => (
              <li key={index} className='flex flex-col items-center'>
                <Framer animationType='up' className='p-2 text-center'>
                  {/* Make the icon bigger */}
                  <item.iconName className='text-4xl mx-auto text-pink-500 dark:text-pink-700 mb-2' />
                  {/* Style the text */}
                  <div className='text-lg font-semibold text-gray-800'>
                    {item.name}
                  </div>
                </Framer>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
