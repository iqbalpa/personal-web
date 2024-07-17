'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ProjectItemProps } from '@/constant/type';
import LinkButton from '../linkButton/linkButton';

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  techStacks,
  category,
  implementation,
  repoLink,
  appLink,
  paperLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="rounded-lg bg-white p-4 shadow-lg"
    >
      {image && <Image src={image} alt={title} width={300} height={200} />}
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <ul className="list-disc">
        {implementation.map((item, index) => (
          <li className="ml-5" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap">
        {techStacks.map((tech, index) => (
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
            'bg-blue-500': category === 'Web Development',
            'bg-red-500': category === 'Machine Learning',
            'bg-green-500': category === 'Data Analysis',
            'bg-gray-500':
              category !== 'Web Development' && category !== 'Machine Learning',
          })}
        >
          {category}
        </p>
        <div className="flex flex-row">
          {appLink && <LinkButton link={appLink} text="App" />}
          {repoLink && <LinkButton link={repoLink} text="Repo" />}
          {paperLink && <LinkButton link={paperLink} text="Paper" />}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
