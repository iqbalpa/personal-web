'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

type ConnectMeItem = {
  id: number;
  url: string;
  name: string;
  icon: React.ReactNode;
};

const connectMeItems: ConnectMeItem[] = [
  {
    id: 1,
    url: 'https://linkedin.com/in/iqbalpahlevia',
    name: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/iqbalpa',
    name: 'Github',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'mailto:iqbalpahlevi16@gmail.com',
    name: 'Email',
    icon: <MdEmail />,
  },
  {
    id: 4,
    url: 'https://medium.com/@iqbalpa',
    name: 'Medium',
    icon: <FaMedium />,
  },
  {
    id: 5,
    url: 'https://instagram.com/iqbalpahlevia',
    name: 'Instagram',
    icon: <FaInstagram />,
  },
];

const ConnectMe: React.FC = () => {
  return (
    <motion.div
      className="fixed -left-[6.8rem] top-1/3 hidden rounded-r-2xl bg-slate-500 p-4 text-3xl text-white duration-300 hover:left-0 lg:flex lg:flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {connectMeItems.map((item, _index) => (
        <div
          key={item.id}
          className="flex w-full justify-end rounded-md px-2 py-1 duration-150 hover:scale-105 hover:bg-slate-200 hover:text-black"
        >
          <Link
            target="_blank"
            href={item.url}
            className="flex flex-row items-center justify-center"
          >
            <p className="mr-2 text-lg">{item.name}</p>
            <>{item.icon}</>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default ConnectMe;
