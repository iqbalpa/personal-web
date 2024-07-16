import React from "react";
import { fetchBlogPosts } from "@/lib/notion";
import { BlogPost } from "@/constant/blog.constant";
import Link from "next/link";

const BlogModule: React.FC = async () => {
	const posts: BlogPost[] = await fetchPosts();

	return (
		<div className="flex flex-col justify-center items-center px-6 pb-10 lg:px-20 lg:py-10">
			<h1 className="text-2xl font-bold">Blog</h1>
			<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
				{posts.map((post, index) => (
					<div key={post.id} className="bg-white p-4 shadow-lg rounded-lg">
						<div className="flex flex-row justify-between">
							<p className="text-sm lg:text-base font-semibold">{post.title}</p>
							<p className="text-xs lg:text-sm text-slate-500">{post.createdTime}</p>
						</div>
						<p>{post.content}</p>
						<Link href={`/blog/${post.slug}`}>
							<p className="text-blue-500 hover:text-blue-300 duration-100">Read more</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

async function fetchPosts() {
	const res = await fetchBlogPosts();
	return res;
}

export default BlogModule;
