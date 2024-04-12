import { BlogPost } from "@/constant/type";

const hamburgerInitialState = {
	isOpen: false,
};

export const hamburgerReducer = (state = hamburgerInitialState, action: any) => {
	switch (action.type) {
		case "INITIALIZE_HAMBURGER":
			return {
				...state,
				isOpen: false,
			};
		case "TOGGLE_MENU":
			return {
				...state,
				isOpen: !state.isOpen,
			};
		default:
			return state;
	}
};

const blogInitialState: { blogs: BlogPost[] } = {
	blogs: [],
};

export const blogReducer = (state: { blogs: BlogPost[] } = blogInitialState, action: any) => {
	if (action.type === "SET_BLOGS") {
		return {
			...state,
			blogs: action.payload,
		};
	} else {
		return state;
	}
};
