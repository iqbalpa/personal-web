"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceItemProps } from "@/constant/type";

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, duration, description }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
		>
			<h1 className="text-lg font-bold">{role}</h1>
			<h2 className="text-md font-bold">{company}</h2>
			<p>{duration}</p>
			<ul className="list-disc">
				{description.map((desc, index) => (
					<li className="ml-5" key={index}>
						{desc}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default ExperienceItem;
