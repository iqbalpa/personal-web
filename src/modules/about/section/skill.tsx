'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skill: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-1 text-2xl font-bold">Skills</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-4 rounded-2xl bg-gray-100 p-5 shadow-lg shadow-gray-300"
      >
        <p>
          <span className="font-bold">Languages:</span> Python ● Java ●
          Javascript ● Typescript ● Go ● C++ ● SQL
        </p>
        <p>
          <span className="font-bold">Backend Tools:</span> Django ● Express ●
          Springboot ● Go ● Node JS ● FastAPI ● Nest JS
        </p>
        <p>
          <span className="font-bold">Frontend Tools:</span> React ● Next JS ●
          Tailwind CSS ● Chakra UI ● Bootstrap
        </p>
        <p>
          <span className="font-bold">Development Tools:</span> Git ● PostgreSQL
          ● MySQL ● MongoDB ● Docker ● GCP ● AWS ● Sonarcloud
        </p>
        <p>
          <span className="font-bold">Machine Learning Tools:</span> Tensorflow
          ● Keras ● Scikit-learn ● PyTorch
        </p>
        <p>
          <span className="font-bold">Operating System:</span> Windows ● Linux
          (Ubuntu) ● MacOS
        </p>
      </motion.div>
    </div>
  );
};

export default Skill;
