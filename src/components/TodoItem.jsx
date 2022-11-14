import classes from "./TodoItem.module.css";
import { useState } from "react";

const TodoItem = (props) => {
  const { title } = props;

  const [completeTodo, setCompleteTodo] = useState(false);

  // 버튼 클릭 시 completeTodo 현재 상태 반대 상태로 변경
  const toggleCompleteTodoHandler = () => {
      setCompleteTodo(prevState => !prevState)
  };

  return (
    <li className={classes.container}>
      <div className={classes.details}>
        <div onClick={toggleCompleteTodoHandler}>
          {completeTodo ? <span className={classes.complete_todo_title}>{title}</span>
          : <span className={classes.todo_title}>{title}</span>}
        </div>
        <div className={classes.actions}>
          <span className={classes.modifyBTN}>
            <button type="button">수정</button>
          </span>
          <span className={classes.deleteBTN}>
            <button type="button">삭제</button>
          </span>
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
