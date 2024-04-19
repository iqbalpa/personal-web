import { BlogPost } from "@/constant/type";
import { getPosts } from "@/lib/post";
import BlogItemCard from "@/components/blogItemCard/BlogItemCard";

export default async function Page() {
	const blogs: BlogPost[] = await getPosts();

	return (
		<div className="flex flex-col justify-center items-center px-6 pb-10 lg:px-20 lg:py-10">
			<h1 className="text-2xl font-bold">Blog</h1>
			<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
				{blogs.map((item: BlogPost, index) => (
					<BlogItemCard
						key={item.id}
						id={item.id.toString()}
						title={item.title}
						content={item.content}
						references={item.references}
					/>
				))}
			</div>
		</div>
	);
}
