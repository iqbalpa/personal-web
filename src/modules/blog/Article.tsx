// "use client";

// import React from "react";
// import { useParams } from "next/navigation";
// import prisma from "@/lib/prisma";

// const ArticleModule: React.FC = async () => {
// 	const { id } = useParams();
// 	const post = await prisma.post.findUnique({
// 		where: {
// 			id: Number(id),
// 		},
// 	});
// 	console.log("post", post);

// 	if (post === null) {
// 		return <div>Post not found</div>;
// 	}

// 	return (
// 		<div className="bg-white p-4">
// 			<h1 className="text-lg font-semibold">{post.title}</h1>
// 			{post.content.map((item: string, index: number) => (
// 				<p key={index}>{item}</p>
// 			))}
// 			{post.references.map((item: string, index: number) => (
// 				<p key={index}>{item}</p>
// 			))}
// 		</div>
// 	);
// };

// export default ArticleModule;

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import prisma from "@/lib/prisma";

const ArticleModule: React.FC = () => {
	const { id } = useParams();
	console.log("outside", id);
	const [post, setPost] = useState<any>(null);

	useEffect(() => {
		console.log("id", id);
	}, [id]);

	useEffect(() => {
		console.log("id", id);
		const fetchPost = async () => {
			try {
				const postData = await prisma.post.findUnique({
					where: {
						id: Number(id),
					},
				});
				setPost(postData);
			} catch (error) {
				console.error("Error fetching post:", error);
			}
		};
		fetchPost();
	}, [id]);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div className="bg-white p-4">
			<h1 className="text-lg font-semibold">{post.title}</h1>
			{post.content.map((item: string, index: number) => (
				<p key={index}>{item}</p>
			))}
			{post.references.map((item: string, index: number) => (
				<p key={index}>{item}</p>
			))}
		</div>
	);
};

export default ArticleModule;
