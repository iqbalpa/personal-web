const initialState = {
	isOpen: false,
};

const hamburgerReducer = (state = initialState, action: any) => {
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

export default hamburgerReducer;
