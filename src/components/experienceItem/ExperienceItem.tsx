import React from "react";
import { ExperienceItemProps } from "@/constant/type";

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, duration, description }) => {
	return (
		<div>
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
		</div>
	);
};

export default ExperienceItem;