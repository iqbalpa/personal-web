'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

type NavItem = {
  id: number;
  path: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: 1, path: '/', label: 'Home' },
  { id: 2, path: '/about', label: 'About' },
  { id: 3, path: '/projects', label: 'Projects' },
  { id: 4, path: '/blog', label: 'Blog' },
  { id: 5, path: '/contact', label: 'Contact' },
];

const Dropdown: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col justify-center bg-white text-black"
      variants={variants}
      transition={{ duration: 1 }}
    >
      {navItems.map((item) => (
        <Link href={item.path} key={item.id}>
          <div className="w-full text-center duration-200 hover:bg-slate-300 hover:font-bold">
            <p className="mb-2 font-semibold">{item.label}</p>
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default Dropdown;
