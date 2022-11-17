import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { todoActions } from "../store/todo-slice";
import { useEffect } from "react";
import { sendTodoData } from "../store/todo-actions";

const DUMMY_TODO_ITEMS = [
  { id: "t1", title: "아침 스트레칭으로 하루를 시작하는 비타민777", isClick: false },
  { id: "t2", title: "점심 식사" , isClick: false},
  { id: "t3", title: "저녁 산책" , isClick: false},
];

let isInitial = true;
const Todos = (callback, deps, props) => {
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
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendTodoData(todoData)).then((response) => {
      console.log("response:::", response);
      if (response.name) {
        DUMMY_TODO_ITEMS.push(todoData.item)
        console.log(DUMMY_TODO_ITEMS)
      }
    });

  }, [todoData, dispatch]);
  return (
    <Card>
      <TodoForm onAddTodos={addFormDataHandler} />
      <TodoList todos={DUMMY_TODO_ITEMS} />
    </Card>
  );
};
export default Todos;
