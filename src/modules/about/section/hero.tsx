'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import IqbalV2 from '../../../../public/assets/iqbal-v2.jpg';

const Hero: React.FC = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={IqbalV2}
        alt="Iqbal"
        className="mb-2 rounded-full"
        width={200}
        height={200}
      />
      <p className="w-full text-center lg:w-3/5">
        a computer science student who loves to learn things
      </p>
    </motion.div>
  );
};

export default Hero;
