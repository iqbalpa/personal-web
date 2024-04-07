import React from "react";
import { OrganizationItemProps } from "@/constant/type";

const OrganizationItem: React.FC<OrganizationItemProps> = ({ name, role, desc, duration }) => {
	return (
		<div>
			<h1 className="text-lg font-semibold">{name}</h1>
			<h2 className="text-md font-semibold">{role}</h2>
			<p>{duration}</p>
			<ul className="list-disc">
				{desc.map((item, index) => (
					<li className="ml-5" key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default OrganizationItem;