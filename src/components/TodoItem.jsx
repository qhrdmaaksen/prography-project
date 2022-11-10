import classes from "./TodoItem.moudle.css";

const TodoItem = (props) => {
	const {title} = props;
  return (
    <li className={classes.container}>
      <div className={classes.details}>
        <div>
					<span className={classes.todo_title}>{title}</span>
        </div>
        <div className = {classes.actions}>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
