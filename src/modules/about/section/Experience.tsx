import React from "react";
import ExperienceItem from "@/components/experienceItem/ExperienceItem";
import { experienceItems } from "../../../constant/constant";
import { fetchExperiences } from "@/lib/experience.notion";
import { convDuration } from "@/utils/convertDuration";

const Experience: React.FC = async () => {
	const experiences = await fetchData();

	return (
		<div>
			<h1 className="text-2xl font-bold mb-3">Experiences</h1>
			{experiences.map((item, index) => (
				<ExperienceItem
					key={item.id}
					role={item.role}
					description={item.description}
					company={item.company}
					duration={convDuration(item.startDate, item.endDate)}
				/>
			))}
		</div>
	);
};

async function fetchData() {
	const res = await fetchExperiences();
	return res;
}

export default Experience;
