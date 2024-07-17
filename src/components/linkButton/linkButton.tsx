import React from 'react';
import Link from 'next/link';
import { LinkButtonProps } from '@/constant/type';

const LinkButton: React.FC<LinkButtonProps> = ({ link, text }) => {
  return (
    <Link href={link} target="_blank">
      <button className="ml-2 rounded-md border border-blue-500 bg-transparent px-3 py-1 text-blue-500 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
