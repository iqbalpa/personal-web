import React from "react";
import Education from "./section/Education";
import Skill from "./section/Skill";
import Experience from "./section/Experience";
import Award from "./section/Award";
import Organization from "./section/Organization";
import Hero from "./section/Hero";

const AboutModule: React.FC = () => {
	return (
		<div className="max-w-screen flex flex-col px-40 pt-5 pb-20">
			<Hero />
			<div className="m-4" />
			<Education />
			<div className="m-4" />
			<Skill />
			<div className="m-4" />
			<Experience />
			<div className="m-4" />
			<Award />
			<div className="m-4" />
			<Organization />
		</div>
	);
};

export default AboutModule;
