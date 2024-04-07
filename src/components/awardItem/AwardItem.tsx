import React from "react";
import { AwardItemProps } from "@/constant/type";

const AwardItem: React.FC<AwardItemProps> = ({ title, desc }) => {
	return (
		<div className="">
			<h2 className="text-lg font-semibold">{title}</h2>
			<p className="">{desc}</p>
		</div>
	);
};

export default AwardItem;