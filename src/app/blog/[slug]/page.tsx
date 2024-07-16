import Link from "next/link";

import { fetchSinglePost } from "@/lib/notion";
import { FaChevronLeft } from "react-icons/fa";

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await fetchBlogData(params.slug);
	if (!post) {
		return;
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="w-[672px] mx-auto">
				<Link href="/" className="text-blue-500 flex flex-row items-center gap-2">
					<FaChevronLeft /> Go Back
				</Link>
				<div className="my-4">
					<span className="text-gray-600">{post.createdTime}</span>
				</div>
				<h1 className="text-6xl text-gray-900 font-bold my-6">{post.title}</h1>
				<div className="prose text-justify" dangerouslySetInnerHTML={{ __html: post.content }}></div>
			</div>
		</main>
	);
}

async function fetchBlogData(slug: string) {
	const res = fetchSinglePost(slug);
	return res;
}
