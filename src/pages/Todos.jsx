import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useHttp from "../api/http";
import { useCallback } from "react";
import Card from "../components/Card";

const DUMMY_TODO_ITEMS = [
  { id: "t1", title: "아침 스트레칭으로 하루를 시작하는 비타민777" },
  { id: "t2", title: "점심 식사" },
  { id: "t3", title: "저녁 산책" },
]

const Todos = (callback, deps, props) => {
  const { sendRequest } = useHttp;
  const addFormDataHandler = useCallback(
    (todo) => {
      sendRequest(
        "https://prography-project-default-rtdb.firebaseio.com/todos.json",
        "POST",
        JSON.stringify(todo)
      );
    },
    [sendRequest]
  );
  return (
    <Card>
      <TodoForm onAddTodos={addFormDataHandler} />
      <TodoList todos={DUMMY_TODO_ITEMS}/>
    </Card>
  );
};
export default Todos;
