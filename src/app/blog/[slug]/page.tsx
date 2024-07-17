import Link from 'next/link';

import { fetchSinglePost } from '@/lib/blog.notion';
import { FaChevronLeft } from 'react-icons/fa';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchBlogData(params.slug);
  if (!post) {
    return;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto w-[672px]">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 text-blue-500"
        >
          <FaChevronLeft /> Go Back
        </Link>
        <div className="my-4">
          <span className="text-gray-600">{post.createdTime}</span>
        </div>
        <h1 className="my-6 text-6xl font-bold text-gray-900">{post.title}</h1>
        <div
          className="prose text-justify"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </main>
  );
}

async function fetchBlogData(slug: string) {
  const res = fetchSinglePost(slug);
  return res;
}
