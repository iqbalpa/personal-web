import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";

const BlogModule: React.FC = async () => {
	const blogs = await prisma.post.findMany({});

	return (
		<div className="flex flex-col justify-center items-center px-6 pb-10 lg:px-20 lg:py-10">
			<h1 className="text-2xl font-bold">Blog</h1>
			<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
				{blogs.map((item, index) => (
					<BlogItemCard
						key={item.id}
						id={item.id.toString()}
						title={item.title}
						content={item.content}
						references={item.references}
					/>
				))}
			</div>
		</div>
	);
};

// refactor to its own component

type BlogItemCardProps = {
	id: string;
	title: string;
	content: string[];
	references: string[];
};

const BlogItemCard: React.FC<BlogItemCardProps> = ({ id, title, content, references }) => {
	return (
		<div className="bg-white p-4 shadow-lg rounded-lg">
			<h2 className="text-lg font-semibold">{title}</h2>
			<p>{content[0]}</p>
			<Link href={`/blog/${id}`} as={`/blog/${title}`}>
				<p className="text-blue-500 hover:text-blue-300 duration-100">Read more</p>
			</Link>
		</div>
	);
};

export default BlogModule;
