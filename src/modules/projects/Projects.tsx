import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectItems: ProjectItemProps[] = [
	{
		title: "Todo App Backend",
		description: "Todo application to manage your tasks",
		techStacks: ["Go", "Gin", "Gorm", "PostgreSQL"],
		category: "Web Development",
		implementation: [
			"Created CRUD API using Golang Gin",
			"Implement Authentication and Authorization",
			"Managed to connect the backend and PostgreSQL database using Golang Gorm",
			"Implemented dependency injection",
		],
		repoLink: "https://github.com/iqbalpa/todo-backend-go",
	},
	{
		title: "Rentspace",
		description: "Rentspace is a platform to rent your space",
		techStacks: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "GCP", "Sonarcloud"],
		category: "Web Development",
		implementation: [
			"Implemented microservices architecture",
			"Developed the frontend using NextJS - Tailwind CSS for styling",
			"Developed the API gateway for microservices backend using Java Springboot",
		],
	},
	{
		title: "HalowBund",
		description: "HalowBund is a platform to provides information for mothers and children",
		techStacks: ["Django", "Javascript", "Flutter"],
		category: "Web Development",
		implementation: [
			"Created the frontend with plain HTML, CSS, Javascript for website application",
			"Created the frontend with Flutter for mobile application",
			"Built the backend system using Django and its unit test",
		],
		repoLink: "https://github.com/orgs/PBP-F09/repositories",
	},
	{
		title: "Netflix Landing Page Clone",
		description: "Netflix landing page clone using React",
		techStacks: ["React", "Tailwind CSS"],
		category: "Web Development",
		implementation: [
			"Developed a frontend clone for Netflix landing page with React JS as the frontend framework and Tailwind CSS for styling",
		],
		appLink: "https://netflix-clone-iqbalpa.vercel.app/",
	},
];

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

// Refactor to component

type ProjectItemProps = {
	title: string;
	description: string;
	image?: string;
	techStacks: string[];
	category: string;
	implementation: string[];
	repoLink?: string;
	appLink?: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
	title,
	description,
	image,
	techStacks,
	category,
	implementation,
	repoLink,
	appLink,
}) => {
	return (
		<div className="bg-white p-4 shadow-lg rounded-lg">
			{image && <Image src={image} alt={title} width={300} height={200} />}
			<h2 className="text-lg font-bold">{title}</h2>
			<p className="text-gray-500">{description}</p>
			<ul className="list-disc">
				{implementation.map((item, index) => (
					<li className="ml-5" key={index}>
						{item}
					</li>
				))}
			</ul>
			<div className="flex flex-wrap mt-2">
				{techStacks.map((tech, index) => (
					<span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm mr-2 mb-2">
						{tech}
					</span>
				))}
			</div>
			<div className="flex justify-between">
				<p className="text-gray-500 mt-2">{category}</p>
				<div className="flex flex-row">
					{appLink && (
						<Link href={appLink} target="_blank" rel="noreferrer">
							<button className="text-blue-500 bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
								App
							</button>
						</Link>
					)}
					{repoLink && (
						<Link href={repoLink} target="_blank" rel="noreferrer">
							<button className="ml-2 text-blue-500 bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
								Repo
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
