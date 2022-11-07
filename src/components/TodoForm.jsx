import classes from "./TodoForm.module.css";
import { useRef } from "react";

const TodoForm = (props) => {
  const todoRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoRef.current.value;
    if (enteredTodo.length === 0) {
      return alert("할 일을 입력해주세요");
    }
    const todosData = {
      id: new Date().toISOString(),
      title: enteredTodo,
    };
    console.log('todosData:::',todosData)
    props.onAddTodos(todosData);
  };

  const onKeyPressHandler = (e) => {
    if(e.key === 'Enter'){
      submitHandler(e)
    }
  }

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <div>
        <h1>Todos</h1>
        <input id="title" type="text" ref={todoRef} required minLength={1} onKeyPress={onKeyPressHandler}/>
      </div>
    </form>
  );
};
export default TodoForm;
