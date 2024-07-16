import 'server-only';
import React from 'react';
import { Client } from '@notionhq/client';
import { BlogPost, SingleBlogPost } from '@/constant/blog.constant';
import { NotionRenderer } from '@notion-render/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getPostContent = React.cache((post: any): BlogPost => {
  return {
    id: post.id,
    title: post.properties.title.title[0]?.plain_text || '',
    slug: post.properties.slug.rich_text[0]?.plain_text || '',
    description: post.properties.description.rich_text[0]?.plain_text || '',
    createdTime: post.properties.createdTime.date.start || '',
  };
});

// ALL BLOG POSTS
export const fetchBlogPosts = async () => {
  if (!process.env.NOTION_BLOG_DB_ID) {
    return [];
  }
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,
    sorts: [
      {
        property: 'createdTime',
        direction: 'descending',
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts.map((post: any) => getPostContent(post));
};

// SINGLE BLOG POST
export const fetchSinglePost = async (
  slug: string,
): Promise<SingleBlogPost | null> => {
  if (!process.env.NOTION_BLOG_DB_ID) {
    return null;
  }
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const singlePost = response.results[0];
  const responseBlockPages = await notion.blocks.children.list({
    block_id: singlePost.id,
  });
  const content = responseBlockPages.results;
  const renderer = new NotionRenderer({
    client: notion,
  });
  const html = await renderer.render(...content);
  return {
    ...getPostContent(singlePost),
    content: html,
  };
};
