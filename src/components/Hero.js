import React from 'react';
import { Link } from 'gatsby';

import Heading from './Heading';
import { BlogConfig } from '../../blog-config';
import TWSocialLinks from './TWSocialLinks';
import avatar from '../../content/assets/avatar.jpg';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center p-6 mx-6 space-y-4 bg-purple-100 rounded-lg shadow-md md:mx-0 md:space-x-8 xl:p-12 md:space-y-0 md:flex-row'>
      <picture className='relative flex-none w-40 h-40 rounded-full shadow-xl md:h-44 md:w-44 mb-2'>
        <img
          className='absolute flex-none object-cover w-40 h-40 rounded-full md:h-44 md:w-44 mb-2'
          src={avatar}
          alt='Me'
          width={176}
          height={176}
        />
      </picture>
      <div className='space-y-2 p-2'>
        <div className='space-y-1 space-y-2 text-xl leading-7 md:text-2xl md:leading-8 lg:text-3xl lg:leading-10'>
          <Heading size='h3' noMargin>
            <span role='img' aria-label='wave'>
              👋
            </span>{' '}
            Hey, I&apos;m Aman Mittal{' '}
            <span className='font-medium'>also known as</span>{' '}
            <Link className='text-purple-500' to={BlogConfig.twitter}>
              @amanhimself
            </Link>
            .
          </Heading>
          <small>I’m a software developer and a technical writer.</small>
          <p className='text-base'>
            This website is a collection of all posts I&apos;ve written in my
            journey of learning web and mobile development. You can read the{' '}
            <Link
              to='/blog'
              className='underline text-purple-600 hover:no-underline'
            >
              blog here
            </Link>{' '}
            or learn more{' '}
            <Link
              to='/about'
              className='underline text-purple-600 hover:no-underline'
            >
              about me
            </Link>
            .
          </p>
          <p className='text-base'>
            You can join 1000+ devs and subscribe to my{' '}
            <Link
              to={BlogConfig.newsletter}
              className='underline text-purple-600 hover:no-underline'
            >
              weekly newsletter!
            </Link>{' '}
          </p>
          <TWSocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Hero;