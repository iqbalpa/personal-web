// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { useAppStore, useAppSelector } from "@/app/lib/hooks";
// import BlogItemCard from "@/components/blogItemCard/BlogItemCard";
// import { BlogPost } from "@/constant/type";

// const BlogModule: React.FC = () => {
// 	console.log(">>> inside blog module");
// 	const [blogs, setBlogs] = useState<BlogPost[]>([]);

// 	const store = useAppStore();
// 	const initialized = useRef(false);
// 	if (!initialized.current) {
// 		store.dispatch({ type: "FETCH_BLOGS" });
// 		initialized.current = true;
// 	}

// 	useEffect(() => {
// 		const unsubscribe = store.subscribe(() => {
// 			const state = store.getState();
// 			setBlogs(state.blog.blogs);
// 		});
// 		return unsubscribe;
// 	}, []);

// 	// const blogs = useAppSelector((state) => state.blog.blogs);
// 	console.log("state blogs", blogs);

// 	return (
// 		<div className="flex flex-col justify-center items-center px-6 pb-10 lg:px-20 lg:py-10">
// 			<h1 className="text-2xl font-bold">Blog</h1>
// 			<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
// 				{blogs.map((item: BlogPost, index) => (
// 					<BlogItemCard
// 						key={item.id}
// 						id={item.id.toString()}
// 						title={item.title}
// 						content={item.content}
// 						references={item.references}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default BlogModule;










"use client";

import React, { useRef, useEffect, useState } from "react";
import { useAppStore, useAppSelector } from "@/app/lib/hooks";
import BlogItemCard from "@/components/blogItemCard/BlogItemCard";
import { BlogPost } from "@/constant/type";

const BlogModule: React.FC = () => {
	console.log(">>> inside blog module");
	const [blogs, setBlogs] = useState<BlogPost[]>([]);
	const store = useAppStore();
	const initialized = useRef(false);

	useEffect(() => {
		const fetchBlogs = async () => {
			await store.dispatch({ type: "FETCH_BLOGS" });
			initialized.current = true;
		};

		if (!initialized.current) {
			fetchBlogs();
		}

		const unsubscribe = store.subscribe(() => {
			const { blog: { blogs } } = store.getState();
			setBlogs(blogs);
		});
		
		return unsubscribe;
	}, [store, setBlogs]);

	console.log("state blogs", blogs);

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
};

export default BlogModule;
