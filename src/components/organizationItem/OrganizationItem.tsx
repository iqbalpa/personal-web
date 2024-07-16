'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OrganizationItemProps } from '@/constant/type';

const OrganizationItem: React.FC<OrganizationItemProps> = ({
  name,
  role,
  desc,
  duration,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="mb-2"
    >
      <h1 className="text-lg font-semibold">{name}</h1>
      <h2 className="text-md font-semibold">{role}</h2>
      <p>{duration}</p>
      <ul className="list-disc">
        {desc.map((item, index) => (
          <li className="ml-5" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default OrganizationItem;
