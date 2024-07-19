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
  detail,
  link,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col rounded-lg border-[1px] border-slate-300 bg-white p-4 shadow-lg"
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
      <h2 className="text-sm font-bold md:text-base lg:text-lg">{title}</h2>
      <p className="text-xs text-gray-500 md:text-sm lg:text-base">{desc}</p>
      <ul className="list-disc">
        {detail.map((item, index) => (
          <li className="ml-5 text-xs md:text-sm lg:text-base" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="mb-2 mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs md:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row text-xs md:text-sm">
          <LinkButton link={link} text="Link" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
