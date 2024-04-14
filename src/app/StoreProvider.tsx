"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./lib/store";
import { getPosts } from "@/lib/post";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
	console.log(">>> inside store provider");
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		// Create the store instance the first time this renders
		storeRef.current = makeStore();

		// initialize hamburger state
		storeRef.current.dispatch({ type: "INITIALIZE_HAMBURGER" });

		console.log("before getPosts");
		// get blog posts
		getPosts()
			.then((posts) => {
				storeRef.current?.dispatch({ type: "SET_BLOGS", payload: posts });
				console.log("store", storeRef.current?.getState());
			})
			.catch((err) => {
				console.error("Failed to fetch blog posts", err);
			});
		console.log("after getPosts");
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
