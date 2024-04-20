"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill: React.FC = () => {
	return (
		<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
			<h1 className="text-2xl font-bold mb-1">Skills</h1>
			<p>
				<span className="font-bold">Languages:</span> Python, Java, Javascript, Typescript, Go, C++, SQL
			</p>
			<p>
				<span className="font-bold">Backend Tools:</span> Django, Express, Springboot, Go Gin, Node JS, FastAPI
			</p>
			<p>
				<span className="font-bold">Frontend Tools:</span> React, Next JS, Tailwind CSS, Chakra UI, Bootstrap
			</p>
			<p>
				<span className="font-bold">Development Tools:</span> Git, PostgreSQL, MySQL, MongoDB, Docker, GCP,
				Sonarcloud
			</p>
			<p>
				<span className="font-bold">Machine Learning Tools:</span> Tensorflow, Keras, Scikit-learn, PyTorch
			</p>
			<p>
				<span className="font-bold">Skills:</span> Website Development, Machine Learning, Software Engineering,
				Data Science
			</p>
			<p>
				<span className="font-bold">Operating System:</span> Windows, Linux (Ubuntu)
			</p>
		</motion.div>
	);
};

export default Skill;
