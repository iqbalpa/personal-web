import React from "react";
import ExperienceItem from "@/components/experienceItem/ExperienceItem";
import { experienceItems } from "../../../constant/constant";

const Experience: React.FC = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Experiences</h1>
			{experienceItems.map((item, index) => (
				<ExperienceItem key={index} {...item} />
			))}
		</div>
	);
};

export default Experience;
