import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const { title } = props;
  return (
    <li className={classes.container}>
      <div className={classes.details}>
        <span className={classes.todo_title}>{title}</span>
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
