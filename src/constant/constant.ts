import { AwardItemProps, ExperienceItemProps, OrganizationItemProps } from "@/constant/type";

export const AwardItems: AwardItemProps[] = [
	{
		title: "[National Level] Top 10 Data Quest Kemenkeu 2023",
		desc: "Data quest is a data analytics competition that organized by Ministry of Finance of Republic of Indonesia. My team and I proposed a solution by leveraging satellite imagery and region income to estimate the economic growth for each region in Central Java.",
	},
	{
		title: "[National Level] Top JOINTS Data Competitions UGM 2023",
		desc: "JOINTS is a data mining competition that is organized by Computer Science students of UGM. In the final Joints Data Competition, we developed a convolutional neural network to classify fire and non-fire images using Residual Network architecture.",
	},
];

export const experienceItems: ExperienceItemProps[] = [
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

export const OrganizationItems: OrganizationItemProps[] = [
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
