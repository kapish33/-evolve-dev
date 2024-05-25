import React from 'react';
import './styles.css';
import Link from 'next/link';
import { t } from '@appString/index';
import { appStringMap } from '@appString/appStringMap';
import { Framer } from '@sharedLayout/Framer';

export const ServicesWeOffer = (): JSX.Element => {
  const {
    pages: {
      Home: {
        ourPrimeProjects: { primeProjects },
      },
    },
  } = appStringMap;
  
  return (
    <section className='py-8 '>
      <Framer animationType='down' className='text-3xl text-center py-4'>
        {t('pages.Home.ourPrimeProjects.heading')}
      </Framer>
      <main className='page-content'>
        {primeProjects.map(({ name, description },index) => {
          return (
            <Framer key={index} animationType='rotate' className='card shadow-md shadow-gray-700 dark:shadow-orange-100'>
              <div className='content'>
                <h2 className='title'>{name}</h2>
                <p className='copy'>{description}</p>
                <Link className='btn' href={'contact-us'}>
                  {'Consult Us'}
                </Link>
              </div>
            </Framer>
          );
        })}
      </main>
    </section>
  );
};
