'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';
import Dropdown from '../dropdown/dropdown';

type NavItem = {
  id: number;
  path: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: 1, path: '/', label: 'Home' },
  { id: 2, path: '/about', label: 'About' },
  { id: 3, path: '/projects', label: 'Projects' },
  { id: 4, path: 'https://iqbalpa.medium.com/', label: 'Blog' },
  { id: 5, path: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between bg-white p-6 text-black">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          IQBALPA
        </motion.h1>
        <div className="block lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <motion.div
          className="hidden items-center justify-center lg:flex lg:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              target={item.label === 'Blog' ? '_blank' : '_self'}
            >
              {pathname === item.path ? (
                <p className="mr-6 font-extrabold text-blue-500 duration-200 hover:scale-110">
                  {item.label}
                </p>
              ) : (
                <p className="mr-6 font-semibold duration-200 hover:scale-110 hover:font-bold">
                  {item.label}
                </p>
              )}
            </Link>
          ))}
        </motion.div>
      </div>
      {isOpen && <Dropdown />}
    </div>
  );
};

export default Navbar;
