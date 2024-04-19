"use client";

import React from "react";
import Link from "next/link";
import { BlogItemCardProps } from "@/constant/type";
import { motion } from "framer-motion";

const BlogItemCard: React.FC<BlogItemCardProps> = ({ id, title, content, references }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.2 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.9 }}
			className="bg-white p-4 shadow-lg rounded-lg"
		>
			<h2 className="text-lg font-semibold">{title}</h2>
			<p>{content[0]}</p>
			<Link href={`/blog/${id}`}>
				<p className="text-blue-500 hover:text-blue-300 duration-100">Read more</p>
			</Link>
		</motion.div>
	);
};

export default BlogItemCard;
