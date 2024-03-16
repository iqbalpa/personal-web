import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/blog">
				<p className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg">Blog</p>
			</Link>
		</div>
	);
};

export default Page;
