"use client";

import React from "react";
import { motion } from "framer-motion";
import AwardItem from "@/components/awardItem/AwardItem";
import { AwardItems } from "../../../constant/constant";

const Award: React.FC = () => {
	return (
		<div>
			<motion.h1
				className="text-2xl font-bold mb-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				Honor and Awards
			</motion.h1>
			{AwardItems.map((item, index) => (
				<AwardItem key={index} {...item} />
			))}
		</div>
	);
};

export default Award;
