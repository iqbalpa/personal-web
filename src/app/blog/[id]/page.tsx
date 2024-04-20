import { getPost } from "@/lib/post";
import Article from "@/modules/blog/Article";

export default async function Page({ params: { id } }: { params: { id: string } }) {
	const post = await getPost(parseInt(id));

	if (!post) {
		return <div>Post not found</div>;
	}

	return <Article {...post} />;
}
