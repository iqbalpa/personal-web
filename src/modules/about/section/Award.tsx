import React from "react";
import AwardItem from "@/components/awardItem/AwardItem";
import { AwardItems } from "../../../constant/constant";

const Award: React.FC = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Honor and Awards</h1>
			{AwardItems.map((item, index) => (
				<AwardItem key={index} {...item} />
			))}
		</div>
	);
};

export default Award;
