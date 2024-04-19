import React from "react";
import BlogItemCard from "@/components/blogItemCard/BlogItemCard";
import { BlogPost } from "@/constant/type";
import { getPosts } from "@/lib/post";
import prisma from "@/lib/prisma";

const BlogModule: React.FC<{ blogs: BlogPost[] }> = ({ blogs = [] }) => {
	if (blogs.length === 0) {
		return <div className="absolute top-1/2 left-1/2 text-2xl font-bold">Loading...</div>;
	}

	return (
		<div className="flex flex-col justify-center items-center px-6 pb-10 lg:px-20 lg:py-10">
			<h1 className="text-2xl font-bold">Blog</h1>
			<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
				{blogs.map((item: BlogPost, index) => (
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

export const getStaticProps = async () => {
	console.log("getPosts");
	const posts = await prisma.post.findMany();
	console.log(posts);
	return {
		props: {
			blogs: posts,
		},
	};
};

export default BlogModule;
