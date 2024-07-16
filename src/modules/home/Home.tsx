'use client';

import React from 'react';
import MyPhoto from '../../../public/assets/iqbal.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CV_LINK =
  'https://drive.google.com/file/d/1_BbwJzqKAoxklMVw0_iSjixR_Rfq7NFd/view?usp=sharing';

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
          Hi! I am Iqbal Pahlevi Amin, a 3rd year Computer Science student at
          Universitas Indonesia. I am serving as Teaching Assistant of
          Introduction to AI & Data Science (5th and 6th semester), Programming
          Foundation with Python (4th semester), and Calculus 1 (3rd semester).
        </p>
        <p className="mb-2 text-base md:text-lg">
          I have experience in doing research in the fields of simultaneous
          speech translation during my time in Japan Advanced Institute of
          Science and Technology (JAIST) as a research intern.
        </p>
        <p className="text-base md:text-lg">
          Software Engineer and Machine Learning are two fields that I am
          interested about. I love to learn about machine learning algorithm,
          especially deep learning in computer vision and natural language
          processing. While learning about machine learning, I also enjoy to
          develop website, both frontend and backend as well.
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
