import React from "react";

const experienceItems: ExperienceItemProps[] = [
	{
		role: "Research Intern",
		company: "Japan Advanced Institute of Science and Technology (JAIST)",
		duration: "Nov 2023 - Present",
		description: [
			"Doing research in the field of simultaneous speech translation by using offline models",
			"Aim to maintain the translation quality and reduce the latency of the translation",
		],
	},
	{
		role: "Teaching Assistant of Introduction to AI & Data Science",
		company: "Faculty of Computer Science, Universitas Indonesia",
		duration: "Aug 2023 - Present",
		description: [
			"Responsible for creating and delivering Lab 1 materials and hands-on related to Python Pandas and Numpy.",
			"Assist students in understanding the materials and help them to finish their assignments.",
			"Assist lecturer in grading students' assignments.",
		],
	},
	{
		role: "Teaching Assistant of Programming Foundations with Python",
		company: "Faculty of Computer Science, Universitas Indonesia",
		duration: "Jan 2023 - July 2023",
		description: [
			"Teach and assist 11 students for weekly coding practice in Lab.",
			"Responsible for creating Tugas Pemrograman 3 about Python List.",
		],
	},
	{
		role: "Teaching Assistant of Calculus 1",
		company: "Faculty of Computer Science, Universitas Indonesia",
		duration: "Aug 2022 - Jan 2023",
		description: [
			"Assisted in teaching more than 100 Calculus 1 students every two weeks with other teaching assistants.",
			"Responsible for grading students' assignments and quizzes.",
		],
	},
];

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

type ExperienceItemProps = {
	role: string;
	company: string;
	duration: string;
	description: string[];
};

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
