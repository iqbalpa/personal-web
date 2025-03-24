'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoUI from '../../../../public/assets/ui.webp';

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="mb-1 text-2xl font-bold">Education</h1>
      <div className="mb-4 flex flex-row items-center rounded-2xl bg-gray-100 p-5 shadow-lg shadow-gray-300">
        <Image
          src={LogoUI}
          alt="UI Logo"
          width={100}
          className="rounded-full"
        />
        <div className="ml-3">
          <p>
            <span className="font-bold">University:</span> Universitas Indonesia
          </p>
          <p>
            <span className="font-bold">Major:</span> Computer Science
          </p>
          <p>
            <span className="font-bold">Year:</span> 2021 - 2025
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
