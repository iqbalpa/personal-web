import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ProjectItemProps } from "@/constant/type";

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
					className={clsx("mt-2", {
						"text-blue-500": category === "Web Development",
						"text-red-500": category === "Machine Learning",
						"text-gray-500": category !== "Web Development" && category !== "Machine Learning",
					})}
				>
					{category}
				</p>
				<div className="flex flex-row">
					{appLink && (
						<Link href={appLink} target="_blank">
							<button className="text-blue-500 bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
								App
							</button>
						</Link>
					)}
					{repoLink && (
						<Link href={repoLink} target="_blank">
							<button className="ml-2 text-blue-500 bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
								Repo
							</button>
						</Link>
					)}
					{paperLink && (
						<Link href={paperLink} target="_blank">
							<button className="ml-2 text-blue-500 bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
								Paper
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
