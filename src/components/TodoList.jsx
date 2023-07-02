import { TodoItem } from "./TodoItem";
import classes from "./TodoList.module.css";

export const TodoList = (props) => {
  return (
    <div className={classes.container}>
      <h1>Todos</h1>
        <ul>
          <TodoItem key={props.id} id={props.id} title={props.title} />
        </ul>
    </div>
  );
};
