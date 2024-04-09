import React from "react";
import ProjectItem from "@/components/projectItem/ProjectItem";
import { projectItems } from "@/constant/constant";

const ProjectsModule: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center px-20 py-10">
			<h1 className="text-2xl font-bold">Projects</h1>
			<div className="grid grid-cols-3 gap-4 mt-4">
				{projectItems.map((item, index) => (
					<ProjectItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default ProjectsModule;
