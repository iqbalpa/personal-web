"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceItem from "@/components/experienceItem/ExperienceItem";
import { experienceItems } from "../../../constant/constant";

const Experience: React.FC = () => {
	return (
		<div>
			<motion.h1
				className="text-2xl font-bold"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				Experiences
			</motion.h1>
			{experienceItems.map((item, index) => (
				<ExperienceItem key={index} {...item} />
			))}
		</div>
	);
};

export default Experience;
