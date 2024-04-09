export type AwardItemProps = {
	title: string;
	desc: string;
};

export type ExperienceItemProps = {
	role: string;
	company: string;
	duration: string;
	description: string[];
};

export type OrganizationItemProps = {
	name: string;
	role: string;
	desc: string[];
	duration: string;
};

export type ProjectItemProps = {
	title: string;
	description: string;
	image?: string;
	techStacks: string[];
	category: string;
	implementation: string[];
	repoLink?: string;
	appLink?: string;
	paperLink?: string;
};

export type LinkButtonProps = {
	link: string;
	text: string;
};
