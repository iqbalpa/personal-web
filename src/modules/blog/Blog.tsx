"use client";

import React, { useRef } from "react";
import { useAppStore, useAppSelector } from "@/app/lib/hooks";
import BlogItemCard from "@/components/blogItemCard/BlogItemCard";
import { getPosts } from "@/lib/post";
import { BlogPost } from "@/constant/type";

const BlogModule: React.FC = () => {
	const store = useAppStore();
	const initialized = useRef(false);
	if (!initialized.current) {
		getPosts()
			.then((posts) => {
				store.dispatch({ type: "SET_BLOGS", payload: posts });
				console.log("posts", posts);
				initialized.current = true;
			})
			.catch((err) => {
				console.error("Failed to fetch blog posts", err);
			});
	}
	const blogs = useAppSelector((state) => state.blog.blogs);
	console.log("state blogs", blogs);

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

export default BlogModule;
