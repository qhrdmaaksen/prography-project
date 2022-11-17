import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    completeTodoCheck: false,
  },
  reducers: {
    // 버튼 클릭 시 투두리스트 완료/취소 토글
    toggleCompleteTodoClick(state) {
      state.completeTodoCheck = !state.completeTodoCheck;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
