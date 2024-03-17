"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Hamburger from "../hamburger/Hamburger";
import { useAppSelector } from "@/app/lib/hooks";

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
	const isOpen = useAppSelector((state) => state.hamburger.isOpen);

	return (
		<div className="flex flex-row justify-between p-6 bg-white text-black">
			<motion.h1
				className="font-bold text-2xl"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				IQBALPA
			</motion.h1>
			<Hamburger />
			<motion.div
				className="hidden lg:flex lg:flex-row items-center justify-center"
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
