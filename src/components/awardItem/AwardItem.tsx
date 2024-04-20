"use client";

import React from "react";
import { motion } from "framer-motion";
import { AwardItemProps } from "@/constant/type";

const AwardItem: React.FC<AwardItemProps> = ({ title, desc }) => {
	return (
		<motion.div
			className="mb-2"
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
		>
			<h2 className="text-lg font-semibold">{title}</h2>
			<p className="">{desc}</p>
		</motion.div>
	);
};

export default AwardItem;
