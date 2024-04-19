import { getPost } from "@/lib/post";

export default async function Page({ params: { id } }: { params: { id: string } }) {
	const post = await getPost(parseInt(id));

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div className="mx-4 lg:mx-28 bg-white p-4">
			<h1 className="mb-6 text-2xl text-center font-semibold">{post.title}</h1>
			<div>
				{post.content.map((item: string, index: number) => (
					<p key={index} className="text-justify indent-8 text-lg">
						{item}
					</p>
				))}
			</div>
			<h2 className="mt-4 text-lg font-semibold">References</h2>
			<div className="flex flex-col">
				{post.references.map((item: string, index: number) => (
					<a key={index}>{item}</a>
				))}
			</div>
		</div>
	);
}
