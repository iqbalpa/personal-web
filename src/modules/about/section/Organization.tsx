import React from "react";

type OrganizationItemProps = {
	name: string;
	role: string;
	desc: string[];
	duration: string;
};

const OrganizationItem: React.FC<OrganizationItemProps> = ({ name, role, desc, duration }) => {
	return (
		<div>
			<h1 className="text-lg font-semibold">{name}</h1>
			<h2 className="text-md font-semibold">{role}</h2>
			<p>{duration}</p>
			<ul className="list-disc">
				{desc.map((item, index) => (
					<li className="ml-5" key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

const OrganizationItems: OrganizationItemProps[] = [
	{
		name: "RISTEK Fasilkom UI",
		role: "Lead of Data Science & Analytics SIG",
		desc: ["Assisted the new member of DSA SIG to learning data science and machine learning"],
		duration: "Feb 2024 - Present",
	},
	{
		name: "RISTEK Fasilkom UI",
		role: "Teaching Assistant of Business Intelligence at SISTECH",
		desc: [
			"Developed authentication and authorization using Gin & Gorm",
			"Created a CRUD API for announcement",
			"Implement dependency injection",
		],
		duration: "Feb 2023 - Present",
	},
	{
		name: "RISTEK Fasilkom UI",
		role: "Teaching Assistant of Business Intelligence at SISTECH",
		desc: ["Guided and mentored 20 mentees along with other TAs"],
		duration: "Jun. 2023 – Aug. 2023",
	},
];

const Organization: React.FC = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Volunteering Experiences</h1>
			{OrganizationItems.map((item, index) => (
                <OrganizationItem key={index} {...item} />
            ))}
		</div>
	);
};

export default Organization;
