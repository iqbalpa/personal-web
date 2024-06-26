"use client";

import React from "react";
import MyPhoto from "../../../public/assets/iqbal.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const CV_LINK = "https://drive.google.com/file/d/1_BbwJzqKAoxklMVw0_iSjixR_Rfq7NFd/view?usp=sharing";

const HomeModule: React.FC = () => {
	return (
		<div className="bg-white text-black flex flex-col md:flex-row items-center px-10 md:px-24 lg:px-44 py-5 md:py-10 lg:py-16 flex-1">
			<motion.div
				className="w-full lg:w-2/3 text-justify text-lg"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-xl md:text-3xl font-bold mb-3">
					Iqbal Pahlevi Amin{" "}
					<span className="text-base md:text-lg align-middle">
						[{" "}
						<a
							href={CV_LINK}
							target="_blank"
							className="underline text-blue-500 hover:text-blue-800 duration-100"
						>
							resume
						</a>{" "}
						]
					</span>
				</h1>
				<p className="mb-2 text-base md:text-lg">
					Hi! I am Iqbal Pahlevi Amin, a 3rd year Computer Science student at Universitas Indonesia. I am
					serving as Teaching Assistant of Introduction to AI & Data Science (5th and 6th semester),
					Programming Foundation with Python (4th semester), and Calculus 1 (3rd semester).
				</p>
				<p className="mb-2 text-base md:text-lg">
					I have experience in doing research in the fields of simultaneous speech translation during my time
					in Japan Advanced Institute of Science and Technology (JAIST) as a research intern.
				</p>
				<p className="text-base md:text-lg">
					Software Engineer and Machine Learning are two fields that I am interested about. I love to learn
					about machine learning algorithm, especially deep learning in computer vision and natural language
					processing. While learning about machine learning, I also enjoy to develop website, both frontend
					and backend as well.
				</p>
			</motion.div>
			<motion.div
				className="w-1/3 mx-10 hidden lg:flex items-center justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Image src={MyPhoto} alt="My Photo" height={150} className="rounded-3xl hover:scale-110 duration-300" />
			</motion.div>
		</div>
	);
};

export default HomeModule;
