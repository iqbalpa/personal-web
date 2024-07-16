import "server-only";
import React from "react";
import { Client } from "@notionhq/client";
import { Award } from "@/constant/award.constant";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

const getAwardContent = React.cache((post: any): Award => {
	return {
		id: post.id,
		title: post.properties.title.title[0]?.plain_text || "",
		description: post.properties.description.rich_text[0]?.plain_text || "",
		date: post.properties.date.date.start || "",
	};
});

// ALL AWARDS
export const fetchAwards = async () => {
	if (!process.env.NOTION_AWARD_DB_ID) {
		return [];
	}
	const awards = await notion.databases.query({
		database_id: process.env.NOTION_AWARD_DB_ID,
		sorts: [
			{
				property: "date",
				direction: "descending",
			},
		],
	});
	const allAwards = awards.results;
	return allAwards.map((award: any) => getAwardContent(award));
};
