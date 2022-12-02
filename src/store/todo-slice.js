import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    item: [],
    changed: false,
  },
  reducers: {
    //리듀서 사용 파이어베이스 에서 로드하는 타이틀로 타이틀 교체
    replaceTodo(state, action) {
      state.item = action.payload.item;
      console.log("replaceTodo", state.item);
    },
    // 투두리스트 추가 method
    addTodoToList(state, action) {
      console.log('addTodoToList state ::: ', state);
      console.log('addTodoToList action ::: ', action);
      const newTodoItem = action.payload; // 작업에 추가하는 데이터 설정
      const existingItem = state.item.find(item => item.id === newTodoItem.id)
      state.changed = true;
      if(!existingItem){
        state.item.push({
          id: newTodoItem.id,
          title: newTodoItem.title,
        })
      }
      /*state.item = {
        title: newTodoItem.title,
      };*/
      console.log("state.items:::", state.item);
    },
    // 투두리스트 아이템 삭제 method
    removeTodoItemFromList(state, action) {
      const id = action.payload; // 삭제할 아이템의 id 설정
      // 기존 항목에서 삭제할 항목을 id 를 통해 찾음
      const existingTodoItem = state.items.find((item) => item.id === id);
      state.changed = true;
      // 기존 항목에서 삭제할 항목을 제외한 나머지 항목을 새로운 배열로 생성
      if (existingTodoItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
