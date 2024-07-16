import 'server-only';
import React from 'react';
import { Client } from '@notionhq/client';
import { IExperience } from '@/constant/experience.constant';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getExperienceContent = React.cache(
  async (post: any): Promise<IExperience> => {
    const responseBlockPages = await notion.blocks.children.list({
      block_id: post.id,
    });
    const content = responseBlockPages.results;

    // Extracting text content from all child blocks
    const description: string[] = content.map(
      (block: any) => block.bulleted_list_item.rich_text[0].plain_text,
    );
    return {
      id: post.id,
      role: post.properties.role.title[0]?.plain_text || '',
      company: post.properties.company.rich_text[0]?.plain_text || '',
      startDate: post.properties.startDate.date.start,
      endDate: post.properties.endDate.date.start,
      description: description,
    };
  },
);

// ALL EXPERIENCES
export const fetchExperiences = async (): Promise<IExperience[]> => {
  if (!process.env.NOTION_EXP_DB_ID) {
    return [];
  }
  const experiences = await notion.databases.query({
    database_id: process.env.NOTION_EXP_DB_ID,
    sorts: [
      {
        property: 'endDate',
        direction: 'descending',
      },
    ],
  });
  const allExperiences = experiences.results;
  const mappedExperiences = await Promise.all(
    allExperiences.map(async (exp: any) => await getExperienceContent(exp)),
  );

  return mappedExperiences;
};
