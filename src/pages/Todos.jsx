import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useHttp from "../api/http";
import { useCallback } from "react";
import Card from "../components/Card";

const DUMMY_TODO_ITEMS = [
  { id: "t1", title: "Finish the course" },
  { id: "t2", title: "Learn all about the course main topic" },
  { id: "t3", title: "Help other students in the course Q&A" },
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
