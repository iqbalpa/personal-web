import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ConnectMe: React.FC = () => {
	return (
		<div className="hidden absolute top-1/3 -left-28 hover:left-0 duration-300 lg:flex lg:flex-col items-end text-white  text-xl bg-slate-500 p-4 rounded-r-lg">
			<Link
				href="https://linkedin.com/in/iqbalpahlevia"
				className="flex flex-row items-center justify-center hover:text-black duration-100"
			>
				<p className="mr-2">LinkedIn</p>
				<FaLinkedin />
			</Link>
			<Link
				href="https://github.com/iqbalpa"
				className="flex flex-row items-center justify-center hover:text-black duration-100"
			>
				<p className="mr-2 ">Github</p>
				<FaGithub />
			</Link>
			<Link
				href="mailto:iqbalpahlevi16@gmail.com"
				className="flex flex-row items-center justify-center hover:text-black duration-100"
			>
				<p className="mr-2">Email</p>
				<MdEmail />
			</Link>
			<Link
				href="https://medium.com/@iqbalpa"
				className="flex flex-row items-center justify-center hover:text-black duration-100"
			>
				<p className="mr-2">Medium</p>
				<FaMedium />
			</Link>
			<Link
				href="https://instagram.com/iqbalpahlevia"
				className="flex flex-row items-center justify-center hover:text-black duration-100"
			>
				<p className="mr-2">Instagram</p>
				<FaInstagram />
			</Link>
		</div>
	);
};

export default ConnectMe;
