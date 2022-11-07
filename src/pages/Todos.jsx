import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useHttp from "../api/http";
import {useCallback} from "react";

const Todos = (callback, deps, props) => {
  const {sendRequest} = useHttp;
  const addFormDataHandler = useCallback((todo) => {
    sendRequest(
        'https://prography-project-default-rtdb.firebaseio.com/todos.json',
        'POST',
        JSON.stringify(todo)
    )
  },[sendRequest])
  return (
    <div>
      <TodoForm onAddTodos={addFormDataHandler}/>
      <div>
        <TodoList />
      </div>
    </div>
  );
};
export default Todos;
