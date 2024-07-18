'use client';

import { IProject } from '@/constant/project.constant';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import LinkButton from '../linkButton/linkButton';

const ProjectItem: React.FC<IProject> = ({
  title,
  desc,
  stack,
  type,
  detail,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="rounded-lg bg-white p-4 shadow-lg"
    >
      {/* {image && <Image src={image} alt={title} width={300} height={200} />} */}
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-500">{desc}</p>
      <ul className="list-disc">
        {detail.map((item, index) => (
          <li className="ml-5" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="mb-2 mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <p
          className={clsx('mt-2 rounded-full px-3 py-1 text-white', {
            'bg-blue-500': type === 'Web Development',
            'bg-red-500': type === 'Machine Learning',
            'bg-green-500': type === 'Data Analysis',
            'bg-gray-500':
              type !== 'Web Development' && type !== 'Machine Learning',
          })}
        >
          {type}
        </p>
        <div className="flex flex-row">
          <LinkButton link={link} text="Repo" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
