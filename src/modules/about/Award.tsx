import React from "react";

type AwardItemProps = {
	title: string;
	desc: string;
};

const AwardItem: React.FC<AwardItemProps> = ({ title, desc }) => {
	return (
		<div className="">
			<h2 className="text-lg font-semibold">{title}</h2>
			<p className="">{desc}</p>
		</div>
	);
};

const AwardItems: AwardItemProps[] = [
	{
		title: "[National Level] Top 10 Data Quest Kemenkeu 2023",
		desc: "Data quest is a data analytics competition that organized by Ministry of Finance of Republic of Indonesia. My team and I proposed a solution by leveraging satellite imagery and region income to estimate the economic growth for each region in Central Java.",
	},
	{
		title: "[National Level] Top JOINTS Data Competitions UGM 2023",
		desc: "JOINTS is a data mining competition that is organized by Computer Science students of UGM. In the final Joints Data Competition, we developed a convolutional neural network to classify fire and non-fire images using Residual Network architecture.",
	},
];

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
