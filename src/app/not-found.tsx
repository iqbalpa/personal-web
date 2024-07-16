'use client';

import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <div className="flex flex-1 items-center justify-center bg-white text-black">
      <motion.h1
        className="text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        This page is under development🛠️
      </motion.h1>
    </div>
  );
}
