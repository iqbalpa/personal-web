import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { ProjectItemProps } from "@/constant/type";
import LinkButton from "../linkButton/LinkButton";

const ProjectItem: React.FC<ProjectItemProps> = ({
	title,
	description,
	image,
	techStacks,
	category,
	implementation,
	repoLink,
	appLink,
	paperLink,
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
				<p
					className={clsx("mt-2 text-white py-1 px-3 rounded-full", {
						"bg-blue-500": category === "Web Development",
						"bg-red-500": category === "Machine Learning",
						"bg-green-500": category === "Data Analysis",
						"bg-gray-500": category !== "Web Development" && category !== "Machine Learning",
					})}
				>
					{category}
				</p>
				<div className="flex flex-row">
					{appLink && <LinkButton link={appLink} text="App" />}
					{repoLink && <LinkButton link={repoLink} text="Repo" />}
					{paperLink && <LinkButton link={paperLink} text="Paper" />}
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
