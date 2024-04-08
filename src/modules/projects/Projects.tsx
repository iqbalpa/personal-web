import React from "react";
import Image from "next/image";

const projectItems: ProjectItemProps[] = [
	{
		title: "Project 1",
		description: "Description 1",
		image: "/images/project1.jpg",
		techStacks: ["React", "Node.js", "MongoDB"],
		category: "Web Development",
	},
	{
		title: "Project 2",
		description: "Description 2",
		image: "/images/project2.jpg",
		techStacks: ["React", "Node.js", "MongoDB"],
		category: "Web Development",
	},
	{
		title: "Project 3",
		description: "Description 3",
		techStacks: ["React", "Node.js", "MongoDB"],
		category: "Web Development",
	},
	{
		title: "Project 4",
		description: "Description 4",
		techStacks: ["React", "Node.js", "MongoDB"],
		category: "Web Development",
	},
];

const ProjectsModule: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center">
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

// Refactor to component

type ProjectItemProps = {
	title: string;
	description: string;
	image?: string;
	techStacks: string[];
	category: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, image, techStacks, category }) => {
	return (
		<div className="bg-white p-4 shadow-lg rounded-lg">
			<h2 className="text-lg font-bold">{title}</h2>
			<p className="text-gray-500">{description}</p>
			{image && <Image src={image} alt={title} width={300} height={200} />}
			<div className="flex flex-wrap mt-2">
				{techStacks.map((tech, index) => (
					<span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm mr-2 mb-2">
						{tech}
					</span>
				))}
			</div>
			<p className="text-gray-500 mt-2">{category}</p>
		</div>
	);
};
