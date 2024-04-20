"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoUI from "../../../../public/assets/ui.webp";

const Education: React.FC = () => {
	return (
		<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
			<h1 className="text-2xl font-bold mb-1">Education</h1>
			<div className="flex flex-row items-center">
				<Image src={LogoUI} alt="UI Logo" width={100} className="rounded-full" />
				<div className="ml-3">
					<p>
						<span className="font-bold">University:</span> Universitas Indonesia
					</p>
					<p>
						<span className="font-bold">Major:</span> Computer Science
					</p>
					<p>
						<span className="font-bold">Year:</span> 2021 - present
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Education;
