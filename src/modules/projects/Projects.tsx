"use client";

import React, {useEffect} from "react";
import { motion } from "framer-motion";
import ProjectItem from "@/components/projectItem/ProjectItem";
import { projectItems } from "@/constant/constant";

const ProjectsModule: React.FC = () => {
	useEffect(() => {
		document.title = "Projects | Iqbal Pahlevi Amin";
	}, []);

	return (
		<div className="flex flex-col justify-center items-center px-6 pb-10 lg:px-20 lg:py-10">
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="text-2xl font-bold"
			>
				Projects
			</motion.h1>
			<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
				{projectItems.map((item, index) => (
					<ProjectItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default ProjectsModule;
