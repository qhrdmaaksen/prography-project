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
      title: enteredTodo,
    };
    console.log("todosData:::", todosData);
    props.onAddTodos(todosData);
  };

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      submitHandler(e);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.container}>
        <input
          id="title"
          type="text"
          ref={todoRef}
          required
          minLength={1}
          onKeyPress={onKeyPressHandler}
          placeholder={"무엇을 해야하나요?"}
        />
      </div>
    </form>
  );
};
export default TodoForm;
