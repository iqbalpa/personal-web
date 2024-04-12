import React from "react";
import Link from "next/link";
import { BlogItemCardProps } from "@/constant/type";

const BlogItemCard: React.FC<BlogItemCardProps> = ({ id, title, content, references }) => {
	return (
		<div className="bg-white p-4 shadow-lg rounded-lg">
			<h2 className="text-lg font-semibold">{title}</h2>
			<p>{content[0]}</p>
			<Link href={`/blog/${id}`}>
				<p className="text-blue-500 hover:text-blue-300 duration-100">Read more</p>
			</Link>
		</div>
	);
};

export default BlogItemCard;