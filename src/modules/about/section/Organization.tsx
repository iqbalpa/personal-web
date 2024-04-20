"use client";

import React from "react";
import { motion } from "framer-motion";
import OrganizationItem from "@/components/organizationItem/OrganizationItem";
import { OrganizationItems } from "../../../constant/constant";

const Organization: React.FC = () => {
	return (
		<div>
			<motion.h1
				className="text-2xl font-bold mb-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				Volunteering Experiences
			</motion.h1>
			{OrganizationItems.map((item, index) => (
				<OrganizationItem key={index} {...item} />
			))}
		</div>
	);
};

export default Organization;
