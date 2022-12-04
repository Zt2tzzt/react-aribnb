import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './features/home';
import entireReducer from './features/entire';

const store = configureStore({
	reducer: {
		home: homeReducer,
		entire: entireReducer
	}
})

export default store