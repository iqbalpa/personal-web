import { IProject } from '@/constant/project.constant';
import { Client } from '@notionhq/client';
import React from 'react';
import 'server-only';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getProjectContent = React.cache(async (post: any): Promise<IProject> => {
  const responseBlockPages = await notion.blocks.children.list({
    block_id: post.id,
  });
  const content = responseBlockPages.results;

  // Extracting text content from all child blocks
  const detail: string[] = content.map(
    (block: any) => block.bulleted_list_item?.rich_text[0].plain_text,
  );
  return {
    id: post.id,
    title: post.properties.title.title[0].plain_text,
    link: post.properties.link.rich_text[0]?.plain_text || '',
    type: post.properties.type.select.name,
    desc: post.properties.desc.rich_text[0].plain_text,
    image: post.properties.image.rich_text[0]?.plain_text || '',
    date: post.properties.date.date.start,
    stack: post.properties.stack.multi_select.map((tech: any) => tech.name),
    detail: detail,
  };
});

// ALL PROJECTS
export const fetchProjects = async (): Promise<IProject[]> => {
  if (!process.env.NOTION_PROJECT_DB_ID) {
    return [];
  }
  const projects = await notion.databases.query({
    database_id: process.env.NOTION_PROJECT_DB_ID,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  });
  const allProjects = projects.results;
  const mappedProjects = await Promise.all(
    allProjects.map(async (proj: any) => await getProjectContent(proj)),
  );

  return mappedProjects;
};
