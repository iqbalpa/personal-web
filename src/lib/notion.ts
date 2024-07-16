import "server-only";
import React from "react";
import { Client } from "@notionhq/client";
import { BlogPost } from "@/constant/blog.constant";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

const getPostContent = React.cache((post: any): BlogPost => {
	return {
		id: post.id,
		title: post.properties.title.title[0]?.plain_text || "",
		slug: post.properties.slug.rich_text[0]?.plain_text || "",
		content: post.properties.content.rich_text[0]?.plain_text || "",
		createdTime: post.properties.createdTime.date.start || "",
	};
});

export const fetchBlogPosts = async () => {
	if (!process.env.NOTION_BLOG_DB_ID) {
		return [];
	}
	const posts = await notion.databases.query({
		database_id: process.env.NOTION_BLOG_DB_ID,
		sorts: [
			{
				property: "createdTime",
				direction: "descending",
			},
		],
	});
	const allPosts = posts.results;
	return allPosts.map((post: any) => getPostContent(post));
};
