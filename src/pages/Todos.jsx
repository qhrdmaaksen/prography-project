import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/UI/Card";
import { todoActions } from "../store/todo-slice";
import {useEffect, useState} from "react";
import { sendTodoData, fetchTodoData } from "../store/todo-actions";

let isInitial = true;
const Todos = (callback, deps, props) => {
  const [data , setData] = useState([])
  const getData = useSelector((state) => state.todoTotalData.item)
  console.log('selector get data ::: ', getData)
  const todoData = useSelector((state) => state.todoTotalData);
  const dispatch = useDispatch();

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
    dispatch(fetchTodoData()).then((response) => {
      console.log("fetch get response:::", response);
      const dataTest = []
      for (const key in response) {
        const todo = {
          id: key,
          title: response[key].title,
        };
        dataTest.push(todo);
        setData(dataTest);
      console.log("fetch response:::", todo);
      }
    })
  }, [dispatch])


  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(todoData.changed) {
      dispatch(sendTodoData(todoData)).then((response) => {
        console.log("response:::", response);
        if (response.name) {
          data.push(todoData)
          setData(data)
        }
      });
    }
  }, [todoData, dispatch, data]);
  return (
    <Card>
      <TodoForm onAddTodos={addFormDataHandler} />
      <TodoList todos={data} />
    </Card>
  );
};
export default Todos;
