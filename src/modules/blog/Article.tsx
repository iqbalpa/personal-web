"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArticleProps {
	title: string;
	content: string[];
	references: string[];
}

const Article: React.FC<ArticleProps> = ({ title, content, references }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="mx-4 lg:mx-28 bg-white p-4"
		>
			<h1 className="mb-6 text-2xl text-center font-semibold">{title}</h1>
			<div>
				{content.map((item: string, index: number) => (
					<p key={index} className="text-justify indent-8 text-lg">
						{item}
					</p>
				))}
			</div>
			<h2 className="mt-4 text-lg font-semibold">References</h2>
			<div className="flex flex-col">
				{references.map((item: string, index: number) => (
					<a key={index}>{item}</a>
				))}
			</div>
		</motion.div>
	);
};

export default Article;
