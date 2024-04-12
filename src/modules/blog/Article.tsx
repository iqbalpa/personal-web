"use client";

import React from "react";
import { useParams } from "next/navigation";
import prisma from "@/lib/prisma";

const ArticleModule: React.FC = async () => {
	const { id } = useParams();
	const post = await prisma.post.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (post === null) {
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
