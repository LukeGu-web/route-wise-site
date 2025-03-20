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
    title: 'Track Expenses',
    description:
      'Keep a detailed record of every expense to understand where your money is going.',
    bgColor: 'bg-sky-400',
  },
  {
    title: 'Multiple Ledgers',
    description:
      'Organize your finances with separate ledgers for different accounts or financial goals.',
    bgColor: 'bg-violet-400',
  },
  {
    title: 'Convert Currency',
    description:
      'Seamlessly manage your finances across multiple currencies without any hassle.',
    bgColor: 'bg-teal-400',
  },
  {
    title: 'Daily Reminder',
    description:
      'Stay on top of your finances with helpful daily reminders to log expenses and income.',
    bgColor: 'bg-amber-400',
  },
  {
    title: 'Dark Mode',
    description:
      'Switch to dark mode for a sleek, comfortable viewing experience, day or night.',
    bgColor: 'bg-stone-400',
  },
];
