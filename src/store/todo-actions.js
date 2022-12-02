import { todoActions } from "./todo-slice";

export const fetchTodoData = () => {
  console.log("fetchTodoData method 실행:::");
  return async (dispatch) => {
    const fetchData = async () => {
      console.log("fetchData method 실행:::");
      const response = await fetch(
        "https://prography-project-default-rtdb.firebaseio.com/todos.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log("data:::", data);
      const transformedTodo = [];
      for (const key in data) {
        const todoObj = {
          id: key,
          title: data[key].title,
        };
        transformedTodo.push(todoObj);
      }
      console.log("fetchData transformedTodo data::: ", transformedTodo);
      return transformedTodo;
    };
    try {
      const todosData = await fetchData()
      dispatch(
          todoActions.replaceTodo({
            item: todosData || [],
          })
      )
      console.log("todosData:::", todosData);
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  };
};

export const sendTodoData = (todo) => {
  return async () => {
    console.log("sendRequest 호출 :::");
    console.log("응답 보낸 제목 :", todo.item.title);
    // 전송 요청
    const sendRequest = async () => {
      const response = await fetch(
        "https://prography-project-default-rtdb.firebaseio.com/todos.json",
        {
          method: "POST",
          body: JSON.stringify({
            title: todo.item.title,
          }),
        }
      );
      console.log("포스트 요청 응답 :::", response);
      if (!response.ok) {
        throw new Error("todo data 전송 중 오류 발생");
      } else {
        return response.json();
      }
    };
    await sendRequest();
  };
};
