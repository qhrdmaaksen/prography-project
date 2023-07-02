import { TodoList, TodoForm } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/UI";
import { todoActions } from "../store/todo-slice";
import { useEffect, useState } from "react";
import { fetchTodoData, sendTodoData } from "../store/todo-actions";

let isInitial = true;
export const Todos = (callback, deps, props) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const getTodoData = useSelector((state) => state.todoTotalData);
  console.log("getTodoData", getTodoData);

  const addFormDataHandler = (todosData) => {
    console.log("addFormDataHandler 실행:::", todosData);
    dispatch(
      todoActions.addTodoToList({
        title: todosData.title,
      })
    );
  };

  //현재 firebase 에 담긴 데이터를 첫 렌더링 시 가져오기
  useEffect(() => {
    /*dispatch(fetchTodoData());
    console.log('action data',dispatch(fetchTodoData()))*/
    dispatch(fetchTodoData());
    dispatch(fetchTodoData()).then((res) => {
      console.log("res", res);
    });
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (getTodoData.changed) {
      dispatch(sendTodoData(getTodoData)).then((response) => {
        console.log("response:::", response);
        setData(getTodoData);
      });
    }
  }, [getTodoData, dispatch]);

  return (
    <Card>
      <TodoForm onAddTodos={addFormDataHandler} />
      {getTodoData &&
        getTodoData.item.map((todo) => {
          return <TodoList key={todo.id} id={todo.id} title={todo.title} />;
        })}
    </Card>
  );
};
