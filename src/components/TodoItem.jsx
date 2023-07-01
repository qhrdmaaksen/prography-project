import classes from "./TodoItem.module.css";
import { useState } from "react";
import Button from "./UI/Button";

export const TodoItem = (props) => {
  const { title } = props;
  const [completeTodo, setCompleteTodo] = useState(false);

  // 버튼 클릭 시 completeTodo 현재 상태 반대 상태로 변경
  const toggleCompleteTodoHandler = () => {
    setCompleteTodo((prevState) => !prevState);
  };

  let content;
  if (completeTodo) {
    content = <span className={classes.complete_todo_title}>{title}</span>;
  } else {
    content = <span className={classes.todo_title}>{title}</span>;
  }
  return (
    <li className={classes.container}>
      <div className={classes.details}>
        <div onClick={toggleCompleteTodoHandler}>{content}</div>
        <div className={classes.actions}>
          <span className={classes.modifyBTN}>
            <Button type="button" color="#61dafb">
              수정
            </Button>
          </span>
          <span className={classes.deleteBTN}>
            <Button type="button" color="#b3807a">
              삭제
            </Button>
          </span>
        </div>
      </div>
    </li>
  );
};
