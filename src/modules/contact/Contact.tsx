import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaMedium, FaKaggle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type ContactItem = {
	id: number;
	url: string;
	name: string;
	title: string;
	icon: React.ReactNode;
};

const contactItems: ContactItem[] = [
	{
		id: 1,
		url: "https://linkedin.com/in/iqbalpahlevia",
		name: "LinkedIn",
		title: "Iqbal Pahlevi Amin",
		icon: <FaLinkedin />,
	},
	{ id: 2, url: "https://github.com/iqbalpa", name: "Github", title: "iqbalpa", icon: <FaGithub /> },
	{
		id: 3,
		url: "mailto:iqbalpahlevi16@gmail.com",
		name: "Email",
		title: "iqbalpahlevi16@gmail.com",
		icon: <MdEmail />,
	},
	{
		id: 4,
		url: "https://www.kaggle.com/iqbalpahlevi",
		name: "Kaggle",
		title: "iqbalpahlevi",
		icon: <FaKaggle />,
	},
	{ id: 5, url: "https://medium.com/@iqbalpa", name: "Medium", title: "iqbalpa", icon: <FaMedium /> },
	{
		id: 6,
		url: "https://instagram.com/iqbalpahlevia",
		name: "Instagram",
		title: "iqbalpahlevia",
		icon: <FaInstagram />,
	},
];

const ContactModule: React.FC = () => {
	return (
		<div className="flex flex-wrap justify-center px-10 md:px-24 lg:px-44 py-5 md:py-10 lg:py-16">
			<h1 className="w-full text-3xl font-bold text-center mb-5">Contact</h1>
			{contactItems.map((item) => (
				<a
					key={item.id}
					href={item.url}
					target="_blank"
					rel="noreferrer"
					className="w-72 md:w-80 bg-white rounded-lg shadow-lg overflow-hidden m-3 p-4 flex flex-col items-center justify-center hover:shadow-2xl hover:border-black hover:border-[1px] hover:scale-110 transition duration-300"
				>
					{item.icon}
					<h2 className="text-lg font-semibold my-2">{item.name}</h2>
					<p className="text-gray-600 text-sm">{item.title}</p>
				</a>
			))}
		</div>
	);
};

export default ContactModule;
