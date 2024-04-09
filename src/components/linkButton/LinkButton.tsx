import React from "react";
import Link from "next/link";
import { LinkButtonProps } from "@/constant/type";

const LinkButton: React.FC<LinkButtonProps> = ({ link, text }) => {
	return (
		<Link href={link} target="_blank">
			<button className="ml-2 text-blue-500 bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
				{text}
			</button>
		</Link>
	);
};

export default LinkButton;
