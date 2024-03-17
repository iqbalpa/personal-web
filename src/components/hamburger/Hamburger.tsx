"use client";

import React, { useState, useRef } from "react";
import { useAppStore, useAppSelector, useAppDispatch } from "@/app/lib/hooks";

const Hamburger: React.FC = () => {
	// Initialize the store with the product information
	const store = useAppStore();
	const initialized = useRef(false);
	if (!initialized.current) {
		store.dispatch({ type: "INITIALIZE_HAMBURGER" });
		initialized.current = true;
	}
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector((state) => state.hamburger.isOpen);

	const handleClick = () => {
		dispatch({ type: "TOGGLE_MENU" });
	};

	return (
		<button onClick={handleClick} className="flex flex-col justify-center items-center lg:hidden">
			<span
				className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
					isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
				}`}
			></span>
			<span
				className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
					isOpen ? "opacity-0" : "opacity-100"
				}`}
			></span>
			<span
				className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
					isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
				}`}
			></span>
		</button>
	);
};

export default Hamburger;
