"use client";

import { NextPage } from "next";
import { useParams } from "next/navigation";

const Page: NextPage = () => {
	const { id } = useParams();
	return (
		<div>
			<p>Post: {id}</p>
		</div>
	);
};

export default Page;
