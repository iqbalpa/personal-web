'use client';

import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaMedium, FaKaggle } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

type ContactItem = {
  id: number;
  url: string;
  name: string;
  title: string;
  icon: React.ReactNode;
};

const contactItems: ContactItem[] = [
  {
    id: 1,
    url: 'https://linkedin.com/in/iqbalpahlevia',
    name: 'LinkedIn',
    title: 'Iqbal Pahlevi Amin',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/iqbalpa',
    name: 'Github',
    title: 'iqbalpa',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'mailto:iqbalpahlevi16@gmail.com',
    name: 'Email',
    title: 'iqbalpahlevi16@gmail.com',
    icon: <MdEmail />,
  },
  {
    id: 4,
    url: 'https://www.kaggle.com/iqbalpahlevi',
    name: 'Kaggle',
    title: 'iqbalpahlevi',
    icon: <FaKaggle />,
  },
  {
    id: 5,
    url: 'https://medium.com/@iqbalpa',
    name: 'Medium',
    title: 'iqbalpa',
    icon: <FaMedium />,
  },
  {
    id: 6,
    url: 'https://instagram.com/iqbalpahlevia',
    name: 'Instagram',
    title: 'iqbalpahlevia',
    icon: <FaInstagram />,
  },
];

const ContactModule: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Iqbal Pahlevi Amin';
  }, []);

  return (
    <div className="flex flex-wrap justify-center px-10 py-5 md:px-24 md:py-10 lg:px-44 lg:py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mb-5 w-full text-center text-3xl font-bold"
      >
        Contact
      </motion.h1>
      {contactItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="m-3 flex w-72 flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-110 hover:border-[1px] hover:border-black hover:shadow-2xl md:w-80"
          >
            {item.icon}
            <h2 className="my-2 text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.title}</p>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactModule;
