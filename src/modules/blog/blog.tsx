import { BlogPost } from '@/constant/blog.constant';
import { fetchBlogPosts } from '@/lib/blog.notion';
import Link from 'next/link';
import React from 'react';

const BlogModule: React.FC = async () => {
  const posts: BlogPost[] = await fetchPosts();

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-10 lg:px-20 lg:py-10">
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-3">
        {posts.map((post, _index) => (
          <div key={post.id} className="rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-row justify-between">
              <p className="text-sm font-semibold lg:text-base">{post.title}</p>
              <p className="text-xs text-slate-500 lg:text-sm">
                {post.createdTime}
              </p>
            </div>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`}>
              <p className="text-blue-500 duration-100 hover:text-blue-300">
                Read more
              </p>
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
