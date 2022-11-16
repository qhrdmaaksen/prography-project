import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    completeTodo: false,
  },
  reducers: {
    // 버튼 클릭 시 투두리스트 완료/취소 토글
    toggleCompleteTodoButton(state) {
      state.completeTodo = !state.completeTodo;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
