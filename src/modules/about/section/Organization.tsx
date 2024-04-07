import React from "react";
import OrganizationItem from "@/components/organizationItem/OrganizationItem";
import { OrganizationItems } from "../../../constant/constant";

const Organization: React.FC = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Volunteering Experiences</h1>
			{OrganizationItems.map((item, index) => (
				<OrganizationItem key={index} {...item} />
			))}
		</div>
	);
};

export default Organization;
