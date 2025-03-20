'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import './styles.css';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Item({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className='features-wrapper flex justify-center items-center relative snap-center h-dvh'>
      <div
        ref={ref}
        className={`features h-48 md:h-72 relative overflow-hidden mr-4 my-6 md:mr-16 rounded-xl p-4 md:p-10 max-h-full ${bgColor}`}
      >
        <h2 className='uppercase font-medium font-lora text-center text-base md:text-medium text-stone-800 dark:text-gray-200'>
          key feature
        </h2>
        <p className='self-center flex-1 mr-12 mt-4 md:mt-8 font-medium font-mono text-base md:text-xl md:leading-10 text-black dark:text-white'>
          {description}
        </p>
      </div>
      <motion.h3
        className='text-2xl md:text-5xl lg:text-6xl absolute left-3/4 font-bold text-black dark:text-gray-200'
        style={{ y }}
      >
        {title}
      </motion.h3>
    </section>
  );
}

export default function Features() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {data.map((item) => (
        <Item
          key={item.title}
          title={item.title}
          description={item.description}
          bgColor={item.bgColor}
        />
      ))}
      <motion.div className='progress' style={{ scaleX }} />
    </div>
  );
}

const data = [
  {
    title: 'Smart Route Search',
    description:
      'Find the perfect route with our intelligent search system that considers your preferences.',
    bgColor: 'bg-sky-400',
  },
  {
    title: 'Favorite Trips',
    description:
      'Save and organize your favorite routes for quick access and future planning.',
    bgColor: 'bg-violet-400',
  },
  {
    title: 'Multi-lang',
    description:
      'Access the app in multiple languages, making it perfect for international travelers.',
    bgColor: 'bg-teal-400',
  },
  {
    title: 'Service Msg',
    description:
      'Stay informed with personalized alerts about your routes, weather conditions, and travel updates.',
    bgColor: 'bg-amber-400',
  },
  {
    title: 'Dark Mode',
    description:
      'Switch between light and dark modes for comfortable viewing in any environment.',
    bgColor: 'bg-stone-400',
  },
];
