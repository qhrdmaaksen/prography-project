import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    // 투두리스트 추가 method
    addTodoToList(state, action) {
			console.log('addTodoToList method 실행:::')
      const newTodoItem = action.payload; // 작업에 추가하는 데이터 설정
      state.items = state.items.push({
        title: newTodoItem.title,
      });
			console.log('state.items:::', state.items)
    },
    // 투두리스트 아이템 삭제 method
    removeTodoItemFromList(state, action) {
      const id = action.payload; // 삭제할 아이템의 id 설정
      // 기존 항목에서 삭제할 항목을 id 를 통해 찾음
      const existingTodoItem = state.items.find((item) => item.id === id);
      // 기존 항목에서 삭제할 항목을 제외한 나머지 항목을 새로운 배열로 생성
      if (existingTodoItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
