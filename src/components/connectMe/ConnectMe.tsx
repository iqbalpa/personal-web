import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type ConnectMeItem = {
	id: number;
	url: string;
	name: string;
	icon: React.ReactNode;
};

const connectMeItems: ConnectMeItem[] = [
	{ id: 1, url: "https://linkedin.com/in/iqbalpahlevia", name: "LinkedIn", icon: <FaLinkedin /> },
	{ id: 2, url: "https://github.com/iqbalpa", name: "Github", icon: <FaGithub /> },
	{ id: 3, url: "mailto:iqbalpahlevi16@gmail.com", name: "Email", icon: <MdEmail /> },
	{ id: 4, url: "https://medium.com/@iqbalpa", name: "Medium", icon: <FaMedium /> },
	{ id: 5, url: "https://instagram.com/iqbalpahlevia", name: "Instagram", icon: <FaInstagram /> },
];

const ConnectMe: React.FC = () => {
	return (
		<div className="hidden absolute top-1/3 -left-[6.8rem] hover:left-0 duration-300 lg:flex lg:flex-col text-white text-3xl bg-slate-500 p-4 rounded-r-2xl">
			{connectMeItems.map((item, index) => (
				<div
					key={item.id}
					className="w-full flex justify-end hover:scale-105 hover:bg-slate-200 py-1 px-2 rounded-md hover:text-black duration-150"
				>
					<Link target="_blank" href={item.url} className="flex flex-row items-center justify-center">
						<p className="mr-2 text-lg">{item.name}</p>
						<>{item.icon}</>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ConnectMe;
