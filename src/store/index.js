import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import todoSliceReducer from "./todo-slice";

const store = configureStore({
	reducer: {
		ui: uiReducer,
		todoTotalData: todoSliceReducer,
	}
})
export default store;
