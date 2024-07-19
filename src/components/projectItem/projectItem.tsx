'use client';

import { IProject } from '@/constant/project.constant';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import LinkButton from '../linkButton/linkButton';
import Image from 'next/image';

const ProjectItem: React.FC<IProject> = ({
  title,
  desc,
  stack,
  type,
  detail,
  link,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col rounded-lg bg-white p-4 shadow-lg"
    >
      {image && (
        <div className="mb-2 w-full">
          <Image
            className="rounded-t-lg"
            src={image}
            alt={title}
            width={500}
            height={300}
          />
        </div>
      )}
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
            'bg-blue-500': type === 'se',
            'bg-red-500': type === 'ml',
            'bg-gray-500': type !== 'se' && type !== 'Machine Learning',
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
