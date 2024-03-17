"use client";

import { NextPage } from "next";
import Image from "next/image";
import MyPhoto from "../../public/assets/iqbal.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

type profileLink = {
	id: number;
	label: string;
	url: string;
};

const profileLinks: profileLink[] = [
	{ id: 1, label: "GitHub", url: "https://github.com/iqbalpa" },
	{ id: 2, label: "LinkedIn", url: "https://linkedin.com/in/iqbalpahlevia" },
	{ id: 3, label: "Medium", url: "https://medium.com/@iqbalpa" },
	{ id: 4, label: "Kaggle", url: "https://kaggle.com/iqbalpahlevi" },
];

const Page: NextPage = () => {
	return (
		<div className="bg-white text-black flex flex-col items-center md:flex-row md:px-44 py-16 flex-1">
			<motion.div
				className="w-2/3 text-justify text-lg"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-3xl font-bold mb-3">Iqbal Pahlevi Amin</h1>
				<p className="mb-2">
					Hi! I am Iqbal Pahlevi Amin, a 3rd year Computer Science student at Universitas Indonesia. I am
					serving as Teaching Assistant of Introduction to AI & Data Science (5th and 6th semester),
					Programming Foundation with Python (4th semester), and Calculus 1 (3rd semester).
				</p>
				<p className="mb-2">
					I have experience in doing research in the fields of simultaneous speech translation during my time
					in Japan Advanced Institute of Science and Technology (JAIST) as a research intern.
				</p>
				<p>
					Software Engineer and Machine Learning are two fields that I am interested about. I love to learn
					about machine learning algorithm, especially deep learning in computer vision and natural language
					processing. While learning about machine learning, I also enjoy to develop website, both frontend
					and backend as well.
				</p>
			</motion.div>
			<motion.div
				className="w-1/3 mx-10 flex items-center justify-center invisible md:visible"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Image src={MyPhoto} alt="My Photo" height={150} className="rounded-3xl" />
			</motion.div>
		</div>
	);
};

export default Page;
