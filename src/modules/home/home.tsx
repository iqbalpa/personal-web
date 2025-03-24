'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import MyPhoto from '../../../public/assets/iqbal.jpg';

const CV_LINK =
  'https://drive.google.com/file/d/1qmxVeBWQBxcz8KRaRk1ZF9Q3zSW8ZDxP/view?usp=sharing';

const HomeModule: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center bg-white px-10 py-5 text-black md:flex-row md:px-24 md:py-10 lg:px-44 lg:py-16">
      <motion.div
        className="w-full text-justify text-lg lg:w-2/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-3 text-xl font-bold md:text-3xl">
          Iqbal Pahlevi Amin{' '}
          <span className="align-middle text-base md:text-lg">
            [{' '}
            <a
              href={CV_LINK}
              target="_blank"
              className="text-blue-500 underline duration-100 hover:text-blue-800"
            >
              resume
            </a>{' '}
            ]
          </span>
        </h1>
        <p className="mb-2 text-base md:text-lg">
          A final-year Computer Science student at Universitas Indonesia, who
          loves <span className="font-semibold">Machine Learning</span> and{' '}
          <span className="font-semibold">Software Engineering</span>. I enjoy
          exploring natural language processing, computer vision, full stack
          development, and cloud computing.
        </p>
        <p className="mb-2 text-base md:text-lg">
          Previously, I was working as a{' '}
          <span className="font-semibold">
            Software Engineer Intern at Traveloka
          </span>
          . I also was working as{' '}
          <span className="font-semibold"> Research Intern at JAIST</span>.
        </p>
      </motion.div>
      <motion.div
        className="mx-10 hidden w-1/3 items-center justify-center lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={MyPhoto}
          alt="My Photo"
          height={150}
          className="rounded-3xl duration-300 hover:scale-110"
        />
      </motion.div>
    </div>
  );
};

export default HomeModule;
