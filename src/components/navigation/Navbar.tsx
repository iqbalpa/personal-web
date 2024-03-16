"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type NavItem = {
	id: number;
	path: string;
	label: string;
};

const navItems: NavItem[] = [
	{ id: 1, path: "/", label: "Home" },
	{ id: 2, path: "/about", label: "About" },
	{ id: 3, path: "/projects", label: "Projects" },
	{ id: 4, path: "/blog", label: "Blog" },
	{ id: 5, path: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
	return (
		<div className="flex flex-row justify-between p-6 bg-slate-200 text-black">
			<motion.h1
				className="font-bold text-2xl"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				IQBAL
			</motion.h1>
			<motion.div
				className="flex flex-row items-center justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				{navItems.map((item) => (
					<Link href={item.path} key={item.id}>
						<p className="mr-6 font-semibold hover:scale-110 hover:font-bold duration-200">{item.label}</p>
					</Link>
				))}
			</motion.div>
		</div>
	);
};

export default Navbar;
