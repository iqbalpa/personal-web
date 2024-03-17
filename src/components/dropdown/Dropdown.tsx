"use client";

import React, { useState } from "react";
import Link from "next/link";
// use the store from hamburger
import { useAppSelector } from "@/app/lib/hooks";
import { motion } from "framer-motion";

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: "-100%" },
};

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

const Dropdown: React.FC = () => {
	const isOpen = useAppSelector((state) => state.hamburger.isOpen);
	if (!isOpen) return null;

	return (
		<motion.div
			className="bg-slate-200 text-black flex flex-col justify-center"
			animate={isOpen ? "open" : "closed"}
			variants={variants}
			transition={{ duration: 1 }}
		>
			{navItems.map((item) => (
				<Link href={item.path} key={item.id}>
					<div className="w-full text-center hover:bg-slate-400 hover:font-bold duration-200">
						<p className="mb-2 font-semibold">{item.label}</p>
					</div>
				</Link>
			))}
		</motion.div>
	);
};

export default Dropdown;
